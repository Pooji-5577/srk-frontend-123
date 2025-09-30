import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://twlzzpvwmnwdrcuiiysw.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key-here';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Gallery storage bucket name
export const STORAGE_BUCKET = 'srk';

// Helper function to get public URL for stored files
export const getPublicUrl = (filePath: string) => {
  const { data } = supabase.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(filePath);
  
  return data.publicUrl;
};

// Gallery images configuration
export const galleryImages = [
  { filename: 'sr021.jpg', category: 'Events' },
  { filename: 'ng6.JPG', category: 'Activities' },
  { filename: 'ng2.JPG', category: 'Activities' },
  { filename: 'ng3.JPG', category: 'Activities' },
  { filename: 'ng4.JPG', category: 'Activities' },
  { filename: 'ng5.JPG', category: 'Activities' },
  { filename: 'ng7.JPG', category: 'Activities' },
  { filename: 'ng8.JPG', category: 'Activities' },
  { filename: 'ng9.JPG', category: 'Activities' },
  { filename: 'ng10.JPG', category: 'Activities' },
  { filename: 'ng11.JPG', category: 'Activities' },
  { filename: 'ng12.JPG', category: 'Activities' },
  { filename: 'ng13.JPG', category: 'Activities' },
  { filename: 'ng14.JPG', category: 'Activities' },
  { filename: 'ng15.JPG', category: 'Activities' },
  { filename: 'ng16.JPG', category: 'Activities' },
  { filename: 'ng17.JPG', category: 'Activities' },
  { filename: 'ng18.JPG', category: 'Activities' },
  { filename: 'ng19.JPG', category: 'Activities' },
  { filename: 'ng20.JPG', category: 'Activities' }
];

export const getGalleryImageUrl = (filename: string) => {
  return getPublicUrl(`gallery/${filename}`);
};