# Supabase Image Upload Guide

Your website is now configured to use the new Supabase bucket: **srkkkk**

## 🔗 Connection Details:
- **Supabase URL**: `https://ejsddoyqjvbxwzwlulmw.supabase.co`
- **Connection String**: `postgresql://postgres.ejsddoyqjvbxwzwlulmw:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres`
- **Storage Bucket**: `srkkkk`

## 📸 How to Upload Gallery Images:

### Step 1: Access Supabase Dashboard
1. Go to https://supabase.com/dashboard
2. Log in to your account
3. Select your project: `ejsddoyqjvbxwzwlulmw`

### Step 2: Navigate to Storage
1. Click on **Storage** in the left sidebar
2. Click on the **srkkkk** bucket
3. Create a folder named **gallery** (if it doesn't exist)

### Step 3: Upload Images
1. Click into the **gallery** folder
2. Click **Upload file** button
3. Upload these 20 images with exact filenames:
   - `sr021.jpg`
   - `ng2.JPG`
   - `ng3.JPG`
   - `ng4.JPG`
   - `ng5.JPG`
   - `ng6.JPG`
   - `ng7.JPG`
   - `ng8.JPG`
   - `ng9.JPG`
   - `ng10.JPG`
   - `ng11.JPG`
   - `ng12.JPG`
   - `ng13.JPG`
   - `ng14.JPG`
   - `ng15.JPG`
   - `ng16.JPG`
   - `ng17.JPG`
   - `ng18.JPG`
   - `ng19.JPG`
   - `ng20.JPG`

### Step 4: Set Public Access
1. In the bucket settings, make sure the bucket is set to **Public**
2. Or set the policy to allow public reads:
   ```sql
   CREATE POLICY "Public Access"
   ON storage.objects FOR SELECT
   USING ( bucket_id = 'srkkkk' );
   ```

## 🎯 Hero Slideshow Images:

### Upload Hero Images:
1. In Supabase Storage, go to **srkkkk** bucket
2. Create a folder named **hero**
3. Upload your hero slideshow images with these names:
   - `slide1.jpg` - Your first hero image
   - `slide2.jpg` - Your second hero image
   - (Add more as needed: slide3.jpg, slide4.jpg, etc.)

### Current Hero Images:
The hero section is currently set up for 2 slides. To add more:
1. Upload additional images as `slide3.jpg`, `slide4.jpg`, etc.
2. Update `HeroSection.tsx` and add the new image paths to the array

## 📁 Folder Structure in Supabase:
```
srkkkk/
├── gallery/
│   ├── sr021.jpg
│   ├── ng2.JPG
│   ├── ng3.JPG
│   └── ... (all 20 images)
└── hero/
    ├── slide1.jpg
    └── slide2.jpg
```

## 🔐 Environment Variables:

Make sure you have your Supabase anon key set in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

To find your anon key:
1. Go to Supabase Dashboard
2. Click **Settings** > **API**
3. Copy the **anon/public** key
4. Paste it in your `.env.local` file

## 🚀 Testing:

After uploading images:

1. **Test Gallery**:
   - Go to http://localhost:3000/gallery
   - All 20 images should load from Supabase

2. **Test Hero Slideshow**:
   - Go to http://localhost:3000
   - Hero images should slide automatically
   - Navigation arrows should work

## 🛠️ Troubleshooting:

### Images not loading?
1. Check bucket is public or has correct policies
2. Verify image filenames match exactly (case-sensitive!)
3. Check browser console for CORS errors
4. Verify the bucket name is `srkkkk` (with 4 k's)

### Gallery shows placeholder?
1. Images might not be uploaded yet
2. Check the folder name is `gallery` (lowercase)
3. Verify public access policy is set

### Hero section shows gradient?
1. Upload images to the `hero` folder in Supabase
2. Or use local images in `public/hero/` folder
3. Make sure filenames match: slide1.jpg, slide2.jpg

## 📊 Image Optimization Tips:

1. **Compress images** before uploading (use tools like TinyPNG)
2. **Recommended sizes**:
   - Hero images: 1920x1080 (or larger)
   - Gallery images: 800x600 (or as needed)
3. **Format**: JPG for photos, PNG for graphics
4. **File size**: Keep under 500KB per image for fast loading

## 🔄 What's Updated:

✅ Supabase URL changed to: `ejsddoyqjvbxwzwlulmw.supabase.co`
✅ Storage bucket changed to: `srkkkk`
✅ Gallery images now point to new bucket
✅ Hero section configured with slideshow
✅ All components are responsive

---

Need help? Check the Supabase documentation: https://supabase.com/docs/guides/storage
