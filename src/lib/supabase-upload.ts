/**
 * Supabase Storage Upload Utility
 * 
 * This utility provides functions to upload images to Supabase Storage
 * programmatically from your application.
 */

import { supabase, STORAGE_BUCKET } from './supabase';

export interface UploadResult {
  success: boolean;
  path?: string;
  url?: string;
  error?: string;
}

/**
 * Upload a single image to Supabase Storage
 * 
 * @param file - The File object to upload
 * @param folder - The folder in the bucket (e.g., 'gallery', 'hero')
 * @param filename - Optional custom filename. If not provided, uses original filename
 * @returns UploadResult with success status and URL
 * 
 * @example
 * ```typescript
 * const result = await uploadImage(file, 'gallery', 'sr021.jpg');
 * if (result.success) {
 *   console.log('Image uploaded:', result.url);
 * }
 * ```
 */
export async function uploadImage(
  file: File,
  folder: 'gallery' | 'hero' | string,
  filename?: string
): Promise<UploadResult> {
  try {
    // Validate file
    if (!file) {
      return { success: false, error: 'No file provided' };
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      return { 
        success: false, 
        error: `Invalid file type: ${file.type}. Allowed: JPEG, PNG, WebP` 
      };
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return { 
        success: false, 
        error: `File too large: ${(file.size / 1024 / 1024).toFixed(2)}MB. Max: 5MB` 
      };
    }

    // Determine path
    const name = filename || file.name;
    const path = `${folder}/${name}`;

    // Upload to Supabase
    const { data, error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: true, // Overwrite if exists
      });

    if (error) {
      return { success: false, error: error.message };
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(path);

    return {
      success: true,
      path: data.path,
      url: urlData.publicUrl,
    };
  } catch (error) {
    const err = error as Error;
    return { success: false, error: err.message };
  }
}

/**
 * Upload multiple images at once
 * 
 * @param files - Array of File objects
 * @param folder - The folder to upload to
 * @returns Array of UploadResults
 * 
 * @example
 * ```typescript
 * const results = await uploadMultipleImages(fileList, 'gallery');
 * const successful = results.filter(r => r.success);
 * console.log(`Uploaded ${successful.length}/${results.length} images`);
 * ```
 */
export async function uploadMultipleImages(
  files: File[],
  folder: 'gallery' | 'hero' | string
): Promise<UploadResult[]> {
  const results: UploadResult[] = [];

  for (const file of files) {
    const result = await uploadImage(file, folder);
    results.push(result);
  }

  return results;
}

/**
 * Delete an image from Supabase Storage
 * 
 * @param path - The full path to the file (e.g., 'gallery/sr021.jpg')
 * @returns Success status
 */
export async function deleteImage(path: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .remove([path]);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    const err = error as Error;
    return { success: false, error: err.message };
  }
}

/**
 * List all files in a folder
 * 
 * @param folder - The folder to list
 * @returns Array of file objects
 */
export async function listImages(folder: string) {
  try {
    const { data, error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .list(folder, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
      });

    if (error) {
      return { success: false, error: error.message };
    }

    return {
      success: true,
      files: data || [],
    };
  } catch (error) {
    const err = error as Error;
    return { success: false, error: err.message };
  }
}

/**
 * Check if user has permission to upload
 * (Requires authentication for most configurations)
 */
export async function checkUploadPermission(): Promise<{
  canUpload: boolean;
  isAuthenticated: boolean;
  error?: string;
}> {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
      return { 
        canUpload: false, 
        isAuthenticated: false, 
        error: error.message 
      };
    }

    return {
      canUpload: !!user,
      isAuthenticated: !!user,
    };
  } catch (error) {
    const err = error as Error;
    return { 
      canUpload: false, 
      isAuthenticated: false, 
      error: err.message 
    };
  }
}

/**
 * Get usage statistics for the bucket
 */
export async function getBucketStats() {
  try {
    // List all files in gallery
    const galleryResult = await listImages('gallery');
    const heroResult = await listImages('hero');

    return {
      success: true,
      stats: {
        galleryImages: galleryResult.success ? galleryResult.files?.length || 0 : 0,
        heroImages: heroResult.success ? heroResult.files?.length || 0 : 0,
        totalImages: 
          (galleryResult.success ? galleryResult.files?.length || 0 : 0) +
          (heroResult.success ? heroResult.files?.length || 0 : 0),
      },
    };
  } catch (error) {
    const err = error as Error;
    return { success: false, error: err.message };
  }
}

/**
 * Example React component hook for file upload
 * You can use this in your components
 */
export function useImageUpload(folder: 'gallery' | 'hero') {
  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const results = await uploadMultipleImages(Array.from(files), folder);
    
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);

    console.log(`✅ Uploaded: ${successful.length}`);
    console.log(`❌ Failed: ${failed.length}`);
    
    if (failed.length > 0) {
      console.error('Failed uploads:', failed);
    }

    return { successful, failed, total: results.length };
  };

  return { handleUpload };
}
