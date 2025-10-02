# Hero Slideshow Setup Guide

I've created an automatic image slideshow for your hero section, similar to the hotel website you showed me!

## ✨ Features Added:
- ✅ Automatic slideshow that changes every 5 seconds
- ✅ Previous/Next navigation buttons
- ✅ Slide indicator dots at the bottom
- ✅ Smooth fade transitions between images
- ✅ Fully responsive for all screen sizes
- ✅ Dark overlay for better text readability
- ✅ Click dots to jump to specific slides

## 📁 How to Add Your Images:

### Option 1: Use the PowerShell Script (Easiest)
1. Make sure your images are in `C:\Users\suria\Downloads\`
2. Open PowerShell in this folder
3. Run: `.\copy-hero-images.ps1`
4. The script will automatically copy and rename your images!

### Option 2: Manual Copy
1. Go to `C:\Users\suria\Downloads\`
2. Copy your images to `public/hero/` folder
3. Rename them as:
   - `g2.jpg` → `slide1.jpg`
   - `image 2.jpg` → `slide2.jpg`
   - `image 3.jpg` → `slide3.jpg`
   - `image 4.jpg` → `slide4.jpg`
   - `image 5.jpg` → `slide5.jpg`
   - `image 6.jpg` → `slide6.jpg`
   - `image 7.jpg` → `slide7.jpg`

## 🎯 File Locations:
- **Images go here**: `frontend/public/hero/`
- **Component updated**: `frontend/src/components/HeroSection.tsx`
- **Copy script**: `frontend/copy-hero-images.ps1`

## 🚀 Testing Your Slideshow:

1. After adding images, run:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000

3. You should see:
   - Images sliding automatically every 5 seconds
   - Arrow buttons on left/right to manually navigate
   - Dot indicators at the bottom
   - Your quote text overlaid on the images

## 🔧 Customization Options:

If you want to change settings, edit `src/components/HeroSection.tsx`:

### Change slide duration (currently 5 seconds):
```typescript
// Line 24: Change 5000 to your desired milliseconds
const timer = setInterval(() => {
  setCurrentSlide((prev) => (prev + 1) % heroImages.length);
}, 5000); // Change this number (5000 = 5 seconds)
```

### Add/Remove slides:
```typescript
// Lines 11-19: Add or remove image paths
const heroImages = [
  '/hero/slide1.jpg',
  '/hero/slide2.jpg',
  // Add more or remove as needed
];
```

### Adjust overlay darkness:
```typescript
// Line 51: Change opacity value (0-100)
<div className="absolute inset-0 bg-black opacity-50"></div>
// Change opacity-50 to opacity-30 (lighter) or opacity-70 (darker)
```

## 📸 Image Recommendations:
- **Format**: JPG or PNG
- **Size**: 1920x1080 or larger
- **Aspect Ratio**: 16:9 (widescreen)
- **File Size**: Keep under 500KB per image for fast loading
- **Quality**: High resolution for crisp display

## 🎨 What Changed:
1. **HeroSection.tsx** - Added full slideshow functionality
2. **public/hero/** - New folder for slideshow images
3. **Auto-advance** - Slides change automatically
4. **Navigation** - Manual controls with arrows and dots
5. **Responsive** - Works perfectly on mobile, tablet, and desktop

## 🐛 Troubleshooting:

### Images not showing?
1. Check if images are in `public/hero/` folder
2. Verify file names match exactly (slide1.jpg, slide2.jpg, etc.)
3. Clear browser cache and refresh
4. Check browser console for errors (F12)

### Slideshow not auto-advancing?
1. Make sure you're using the updated HeroSection.tsx
2. Check browser console for JavaScript errors

### Need different images?
- Just replace the files in `public/hero/` folder
- Keep the same file names (slide1.jpg, etc.)
- No code changes needed!

## 💡 Pro Tips:
- Use high-quality images that represent your educational society
- Ensure text is readable - the dark overlay helps with this
- Test on mobile devices to ensure images look good at all sizes
- Consider compressing images to improve page load speed

---

Need help? Check the images are properly named and in the correct folder!
