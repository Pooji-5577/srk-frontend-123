/**
 * Supabase Connection Test Utility
 * 
 * This utility helps you verify if your Supabase connection is properly configured
 * and working. Use this to troubleshoot connection issues.
 */

import { supabase, STORAGE_BUCKET } from './supabase';

export interface ConnectionTestResult {
  success: boolean;
  checks: {
    clientInitialized: boolean;
    urlConfigured: boolean;
    keyConfigured: boolean;
    bucketAccessible: boolean;
    canListFiles: boolean;
  };
  details: {
    supabaseUrl: string;
    hasAnonKey: boolean;
    bucketName: string;
    error?: string;
  };
  timestamp: string;
}

/**
 * Comprehensive Supabase connection test
 * Tests all aspects of the Supabase connection
 */
export async function testSupabaseConnection(): Promise<ConnectionTestResult> {
  const result: ConnectionTestResult = {
    success: false,
    checks: {
      clientInitialized: false,
      urlConfigured: false,
      keyConfigured: false,
      bucketAccessible: false,
      canListFiles: false,
    },
    details: {
      supabaseUrl: '',
      hasAnonKey: false,
      bucketName: STORAGE_BUCKET,
    },
    timestamp: new Date().toISOString(),
  };

  try {
    // Check 1: Client initialized
    result.checks.clientInitialized = !!supabase;
    console.log('✓ Supabase client initialized');

    // Check 2: URL configured
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    result.details.supabaseUrl = url;
    result.checks.urlConfigured = url.length > 0 && url.includes('supabase.co');
    console.log(`${result.checks.urlConfigured ? '✓' : '✗'} Supabase URL configured: ${url}`);

    // Check 3: Anon key configured
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    result.details.hasAnonKey = key.length > 0 && !key.includes('[YOUR-');
    result.checks.keyConfigured = result.details.hasAnonKey;
    console.log(`${result.checks.keyConfigured ? '✓' : '✗'} Anon key configured: ${result.details.hasAnonKey ? 'Yes' : 'No/Placeholder'}`);

    // Check 4: Can access storage bucket
    try {
      const { data: buckets, error: bucketsError } = await supabase.storage.listBuckets();
      
      if (bucketsError) {
        throw new Error(`Bucket list error: ${bucketsError.message}`);
      }

      const bucketExists = buckets?.some(b => b.name === STORAGE_BUCKET);
      result.checks.bucketAccessible = !!bucketExists;
      console.log(`${result.checks.bucketAccessible ? '✓' : '✗'} Storage bucket '${STORAGE_BUCKET}' accessible: ${bucketExists ? 'Yes' : 'No'}`);
      
      if (buckets && buckets.length > 0) {
        console.log('  Available buckets:', buckets.map(b => b.name).join(', '));
      }
    } catch (bucketError) {
      const error = bucketError as Error;
      console.error('✗ Error accessing storage:', error.message);
      result.details.error = error.message;
    }

    // Check 5: Can list files in gallery folder
    try {
      const { data: files, error: filesError } = await supabase.storage
        .from(STORAGE_BUCKET)
        .list('gallery', {
          limit: 5,
        });

      if (filesError) {
        throw new Error(`File list error: ${filesError.message}`);
      }

      result.checks.canListFiles = !!files && files.length > 0;
      console.log(`${result.checks.canListFiles ? '✓' : '✗'} Can list gallery files: ${files ? files.length : 0} files found`);
      
      if (files && files.length > 0) {
        console.log('  Sample files:', files.slice(0, 3).map(f => f.name).join(', '));
      }
    } catch (filesError) {
      const error = filesError as Error;
      console.warn('⚠ Could not list files (bucket might be empty or inaccessible):', error.message);
    }

    // Overall success check
    result.success = 
      result.checks.clientInitialized &&
      result.checks.urlConfigured &&
      result.checks.keyConfigured &&
      result.checks.bucketAccessible;

    if (result.success) {
      console.log('✅ Supabase connection is fully operational!');
    } else {
      console.log('❌ Supabase connection has issues. Check the details above.');
    }

  } catch (error) {
    const err = error as Error;
    console.error('❌ Connection test failed:', err.message);
    result.details.error = err.message;
  }

  return result;
}

/**
 * Quick connection check - returns true if basic connection is working
 */
export async function isSupabaseConnected(): Promise<boolean> {
  try {
    const { data, error } = await supabase.storage.listBuckets();
    return !error && !!data;
  } catch {
    return false;
  }
}

/**
 * Test if a specific image can be accessed
 */
export async function testImageAccess(imagePath: string): Promise<{
  accessible: boolean;
  url?: string;
  error?: string;
}> {
  try {
    const { data } = supabase.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(imagePath);

    if (!data.publicUrl) {
      return { accessible: false, error: 'No public URL generated' };
    }

    // Try to fetch the image
    const response = await fetch(data.publicUrl, { method: 'HEAD' });
    
    return {
      accessible: response.ok,
      url: data.publicUrl,
      error: response.ok ? undefined : `HTTP ${response.status}: ${response.statusText}`,
    };
  } catch (error) {
    const err = error as Error;
    return {
      accessible: false,
      error: err.message,
    };
  }
}

/**
 * Get storage bucket information
 */
export async function getBucketInfo() {
  try {
    const { data: buckets, error } = await supabase.storage.listBuckets();
    
    if (error) {
      return { error: error.message };
    }

    const targetBucket = buckets?.find(b => b.name === STORAGE_BUCKET);
    
    if (!targetBucket) {
      return { 
        error: `Bucket '${STORAGE_BUCKET}' not found`,
        availableBuckets: buckets?.map(b => b.name) || [],
      };
    }

    // Get file count in gallery folder
    const { data: files } = await supabase.storage
      .from(STORAGE_BUCKET)
      .list('gallery');

    return {
      bucket: targetBucket,
      galleryFileCount: files?.length || 0,
      files: files?.map(f => f.name) || [],
    };
  } catch (error) {
    const err = error as Error;
    return { error: err.message };
  }
}

/**
 * Run all diagnostic tests and log results
 */
export async function runFullDiagnostics() {
  console.log('🔍 Running Supabase Storage Diagnostics...\n');
  
  const connectionResult = await testSupabaseConnection();
  
  console.log('\n📊 Bucket Information:');
  const bucketInfo = await getBucketInfo();
  console.log(bucketInfo);
  
  if (connectionResult.success && connectionResult.checks.canListFiles) {
    console.log('\n🖼️ Testing sample image access:');
    const imageTest = await testImageAccess('gallery/sr021.jpg');
    console.log(imageTest);
  }
  
  return {
    connection: connectionResult,
    bucket: bucketInfo,
  };
}

// If you want to run this directly in the browser console:
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).testSupabase = testSupabaseConnection;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).supabaseDiagnostics = runFullDiagnostics;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).testImage = testImageAccess;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).bucketInfo = getBucketInfo;
  
  console.log('🔧 Supabase test utilities loaded! Available commands:');
  console.log('  - testSupabase() - Test connection');
  console.log('  - supabaseDiagnostics() - Full diagnostics');
  console.log('  - testImage(path) - Test specific image');
  console.log('  - bucketInfo() - Get bucket information');
}
