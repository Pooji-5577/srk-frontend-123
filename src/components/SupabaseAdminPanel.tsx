/**
 * Supabase Admin Panel Component
 * 
 * This component provides a UI to:
 * 1. Test Supabase connection
 * 2. View bucket status
 * 3. Upload images to gallery/hero folders
 * 4. View uploaded images
 * 
 * Usage: Add this to a page (e.g., /admin or /test)
 * 
 * Note: For production, protect this route with authentication!
 */

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  testSupabaseConnection, 
  getBucketInfo,
  runFullDiagnostics,
  type ConnectionTestResult 
} from '@/lib/supabase-test';
import { 
  uploadMultipleImages, 
  listImages,
  deleteImage,
  getBucketStats,
  type UploadResult 
} from '@/lib/supabase-upload';

export default function SupabaseAdminPanel() {
  const [testResult, setTestResult] = useState<ConnectionTestResult | null>(null);
  const [bucketInfo, setBucketInfo] = useState<any>(null);
  const [bucketStats, setBucketStats] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [uploadFolder, setUploadFolder] = useState<'gallery' | 'hero'>('gallery');
  const [uploadResults, setUploadResults] = useState<UploadResult[]>([]);
  const [galleryImages, setGalleryImages] = useState<any[]>([]);

  // Test connection on mount
  useEffect(() => {
    handleTestConnection();
  }, []);

  const handleTestConnection = async () => {
    setLoading(true);
    try {
      const result = await testSupabaseConnection();
      setTestResult(result);

      const info = await getBucketInfo();
      setBucketInfo(info);

      const stats = await getBucketStats();
      setBucketStats(stats);
    } catch (error) {
      console.error('Test failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRunDiagnostics = async () => {
    setLoading(true);
    try {
      const result = await runFullDiagnostics();
      console.log('Full diagnostics:', result);
      alert('Check the browser console for full diagnostics report');
    } catch (error) {
      console.error('Diagnostics failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setLoading(true);
    setUploadResults([]);

    try {
      const results = await uploadMultipleImages(Array.from(files), uploadFolder);
      setUploadResults(results);

      // Refresh stats
      const stats = await getBucketStats();
      setBucketStats(stats);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadGalleryImages = async () => {
    setLoading(true);
    try {
      const result = await listImages('gallery');
      if (result.success && result.files) {
        setGalleryImages(result.files);
      }
    } catch (error) {
      console.error('Failed to load images:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: boolean) => {
    return status ? '✅' : '❌';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Supabase Storage Admin Panel
        </h1>

        {/* Connection Status */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Connection Status</h2>
            <button
              onClick={handleTestConnection}
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Testing...' : 'Test Connection'}
            </button>
          </div>

          {testResult && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{testResult.success ? '✅' : '❌'}</span>
                <span className="text-lg font-semibold">
                  {testResult.success ? 'Connected' : 'Connection Issues'}
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span>{getStatusIcon(testResult.checks.clientInitialized)}</span>
                  <span>Client Initialized</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{getStatusIcon(testResult.checks.urlConfigured)}</span>
                  <span>URL Configured: {testResult.details.supabaseUrl}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{getStatusIcon(testResult.checks.keyConfigured)}</span>
                  <span>API Key Configured: {testResult.details.hasAnonKey ? 'Yes' : 'No (Placeholder)'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{getStatusIcon(testResult.checks.bucketAccessible)}</span>
                  <span>Bucket Accessible: {testResult.details.bucketName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{getStatusIcon(testResult.checks.canListFiles)}</span>
                  <span>Can List Files</span>
                </div>
              </div>

              {testResult.details.error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
                  <p className="text-red-800 font-semibold">Error:</p>
                  <p className="text-red-600 text-sm">{testResult.details.error}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bucket Stats */}
        {bucketStats && bucketStats.success && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Storage Statistics</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded">
                <p className="text-gray-600 text-sm">Gallery Images</p>
                <p className="text-3xl font-bold text-blue-600">{bucketStats.stats.galleryImages}</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <p className="text-gray-600 text-sm">Hero Images</p>
                <p className="text-3xl font-bold text-green-600">{bucketStats.stats.heroImages}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <p className="text-gray-600 text-sm">Total Images</p>
                <p className="text-3xl font-bold text-purple-600">{bucketStats.stats.totalImages}</p>
              </div>
            </div>
          </div>
        )}

        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload Images</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Folder:
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="gallery"
                  checked={uploadFolder === 'gallery'}
                  onChange={(e) => setUploadFolder(e.target.value as 'gallery')}
                  className="mr-2"
                />
                Gallery
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="hero"
                  checked={uploadFolder === 'hero'}
                  onChange={(e) => setUploadFolder(e.target.value as 'hero')}
                  className="mr-2"
                />
                Hero
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Files:
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              disabled={loading}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100
                disabled:opacity-50"
            />
          </div>

          {uploadResults.length > 0 && (
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold text-gray-700">Upload Results:</h3>
              {uploadResults.map((result, index) => (
                <div
                  key={index}
                  className={`p-3 rounded ${
                    result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{result.success ? '✅' : '❌'}</span>
                    <span className="text-sm">
                      {result.success ? `Uploaded: ${result.path}` : `Failed: ${result.error}`}
                    </span>
                  </div>
                  {result.url && (
                    <a
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-xs ml-6 hover:underline"
                    >
                      View Image
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Gallery Images Viewer */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Gallery Images</h2>
            <button
              onClick={handleLoadGalleryImages}
              disabled={loading}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Load Images'}
            </button>
          </div>

          {galleryImages.length > 0 && (
            <div className="grid grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="border rounded p-2">
                  <p className="text-xs text-gray-600 mb-1 truncate">{image.name}</p>
                  <p className="text-xs text-gray-400">
                    {(image.metadata?.size / 1024).toFixed(0)} KB
                  </p>
                </div>
              ))}
            </div>
          )}

          {galleryImages.length === 0 && (
            <p className="text-gray-500 text-center py-8">
              No images loaded. Click "Load Images" to view gallery contents.
            </p>
          )}
        </div>

        {/* Diagnostics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Advanced Diagnostics</h2>
          <button
            onClick={handleRunDiagnostics}
            disabled={loading}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50"
          >
            Run Full Diagnostics
          </button>
          <p className="text-sm text-gray-600 mt-2">
            Results will be logged to browser console (F12)
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">📚 Quick Guide</h3>
          <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
            <li>Test connection to verify your Supabase setup</li>
            <li>Upload images to gallery or hero folders</li>
            <li>View uploaded images and statistics</li>
            <li>Run diagnostics if you encounter issues</li>
            <li>Check browser console (F12) for detailed logs</li>
          </ul>
          <p className="text-blue-700 text-sm mt-3">
            ⚠️ <strong>Security Note:</strong> In production, protect this page with authentication!
          </p>
        </div>
      </div>
    </div>
  );
}
