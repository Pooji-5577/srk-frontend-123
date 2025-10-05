import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ejsddoyqjvbxwzwlulmw.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key-here';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Gallery storage bucket name
export const STORAGE_BUCKET = 'srkkkk';

// Helper function to get public URL for stored files
export const getPublicUrl = (filePath: string) => {
  const { data } = supabase.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(filePath);
  
  return data.publicUrl;
};

// Gallery images configuration
export const galleryImages = [
  { filename: 'srk 20.jpg', category: 'Activities' },
  { filename: 'srk 21.jpg', category: 'Activities' },
  { filename: 'srk 22.jpg', category: 'Activities' },
  { filename: 'srk 23.jpg', category: 'Activities' },
  { filename: 'srk 24.jpg', category: 'Activities' },
  { filename: 'srk 25.jpg', category: 'Activities' },
  { filename: 'srk 27.jpg', category: 'Activities' },
  { filename: 'srk 28.jpg', category: 'Activities' },
  { filename: 'srk 29.jpg', category: 'Activities' },
  { filename: 'srk 30.jpg', category: 'Activities' },
  { filename: 'srk 32.jpg', category: 'Activities' },
  { filename: 'srk 35.jpg', category: 'Activities' },
  { filename: 'srk 36.jpg', category: 'Activities' },
  { filename: 'srk 37.jpg', category: 'Activities' },
  { filename: 'srk 38.jpg', category: 'Activities' },
  { filename: 'srk 39.JPG', category: 'Activities' },
  { filename: 'srk 40.JPG', category: 'Activities' },
  { filename: 'srk 42.JPG', category: 'Activities' },
  { filename: 'srk 43.JPG', category: 'Activities' },
  { filename: 'srk 44.JPG', category: 'Activities' }
];

export const getGalleryImageUrl = (filename: string) => {
  return getPublicUrl(`gallery/${filename}`);
};