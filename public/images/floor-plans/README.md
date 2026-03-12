# Floor Plan Images Directory

## 📁 Directory Structure

Place your floor plan images in this directory following this naming convention:

```
/public/images/floor-plans/
├── property-1-ground-floor.jpg
├── property-1-first-floor.jpg
├── property-2-ground-floor.jpg
├── property-2-first-floor.jpg
├── property-3-ground-floor.jpg
├── property-3-first-floor.jpg
├── property-4-ground-floor.jpg
├── property-4-first-floor.jpg
├── property-5-ground-floor.jpg
├── property-5-first-floor.jpg
├── property-6-ground-floor.jpg
└── property-6-first-floor.jpg
```

## 📐 Naming Convention

**Format**: `property-{ID}-{floor-name}.jpg`

Where:
- `{ID}` = Property ID (1-6)
- `{floor-name}` = Image identifier from property data (e.g., "ground-floor", "first-floor")

### Examples:
- `property-1-ground-floor.jpg` → Property 1, Ground Floor
- `property-2-first-floor.jpg` → Property 2, First Floor
- `property-6-ground-floor.jpg` → Property 6, Ground Floor

## 🖼️ Image Requirements

### Recommended Specifications:
- **Format**: JPG or PNG (JPG preferred for smaller file size)
- **Resolution**: 1200 x 800 pixels minimum
- **Aspect Ratio**: 3:2 or 4:3
- **File Size**: Under 500KB (compressed)
- **Color Mode**: RGB
- **Background**: White or light gray

### Quality Guidelines:
✅ **DO:**
- Use high-quality architectural drawings
- Include clear room labels
- Show dimensions and measurements
- Use consistent scale across all floor plans
- Include legend/key if needed
- Ensure text is readable when scaled down

❌ **DON'T:**
- Use blurry or low-resolution images
- Include watermarks in the center
- Use dark backgrounds
- Compress too much (maintain clarity)
- Mix different styles between floors

## 🎨 Style Recommendations

### Professional Floor Plans Should Include:
1. **Room Labels**: Clearly marked bedroom, bathroom, kitchen, etc.
2. **Dimensions**: Area measurements for each room
3. **Doors & Windows**: Indicated with standard symbols
4. **Furniture Layout** (optional): Shows space utilization
5. **Scale Indicator**: Shows actual measurements
6. **Compass/North Arrow**: Orientation reference
7. **Total Area**: Overall square meters

### Software Options:
- **AutoCAD** - Professional architectural drawings
- **SketchUp** - 3D modeling with 2D exports
- **Floorplanner** - Online floor plan creator
- **RoomSketcher** - Easy floor plan software
- **Sweet Home 3D** - Free floor plan design
- **Canva** - Simple floor plan templates

## 📋 Property Floor Plan Checklist

Use this to ensure you have all required images:

### Property 1: The Best Yuwittaya
- [ ] `property-1-ground-floor.jpg` (90 m²)
- [ ] `property-1-first-floor.jpg` (90 m²)

### Property 2: The Best Masterpiece
- [ ] `property-2-ground-floor.jpg` (125 m²)
- [ ] `property-2-first-floor.jpg` (125 m²)

### Property 3: The Best Courtyard
- [ ] `property-3-ground-floor.jpg` (75 m²)
- [ ] `property-3-first-floor.jpg` (75 m²)

### Property 4: The Best Lamlukka Klong 6
- [ ] `property-4-ground-floor.jpg` (85 m²)
- [ ] `property-4-first-floor.jpg` (85 m²)

### Property 5: The Best Lamlukka Klong 8
- [ ] `property-5-ground-floor.jpg` (95 m²)
- [ ] `property-5-first-floor.jpg` (95 m²)

### Property 6: The Best Premium
- [ ] `property-6-ground-floor.jpg` (140 m²)
- [ ] `property-6-first-floor.jpg` (140 m²)

## 🔄 Fallback Behavior

If an image is not found, the system automatically shows:
- Property's gradient background with blueprint pattern
- Floor name and area display
- Architectural icon (📐)
- Professional appearance maintained

This ensures the site always looks good even if some images are missing!

## 🚀 Quick Start

1. **Get Your Floor Plans**: From architect or create new ones
2. **Export as JPG**: At recommended resolution
3. **Rename Files**: Follow the naming convention above
4. **Place in Directory**: Drop files into `/public/images/floor-plans/`
5. **Test**: Visit property pages to see them load

## 💡 Tips for Best Results

### Optimization:
```bash
# Use ImageMagick to resize and optimize all images at once
mogrify -resize 1200x800 -quality 85 -format jpg *.jpg
```

### Batch Rename:
If you have images with different names, rename them in bulk:
```bash
# Example: Rename sequentially
mv ground_1.jpg property-1-ground-floor.jpg
mv first_1.jpg property-1-first-floor.jpg
```

## 📱 Display Behavior

### Desktop:
- Images display at 320px height
- 2 floor plans side by side
- Hover zoom effect
- Click to enlarge (future feature)

### Mobile:
- Full width display
- Stacked vertically
- Touch-friendly
- Optimized loading

## 🎯 Current Status

**Status**: Directory created, ready for images

**Next Steps**:
1. Add your floor plan images
2. Follow naming convention
3. Refresh property pages
4. Images will automatically load

## 🆘 Troubleshooting

**Problem**: Image not displaying
- Check filename exactly matches: `property-{id}-{floor-name}.jpg`
- Ensure file is in `/public/images/floor-plans/` directory
- Verify image format is JPG or PNG
- Check file permissions

**Problem**: Image looks stretched
- Use recommended aspect ratio (3:2 or 4:3)
- Set `object-fit: contain` in CSS (already set)
- Check original image dimensions

**Problem**: Image loads slowly
- Compress images (target under 500KB)
- Use JPG instead of PNG for photos
- Consider WebP format for modern browsers

## 📞 Need Help?

If you need floor plan images created:
- Contact your architect
- Use floor plan software listed above
- Hire a freelance architectural draftsman
- Use online floor plan services

The fallback system ensures your site looks professional even while you're gathering the images!
