# Course Images Implementation Guide

## Overview
This document describes the centralized course image management system implemented for Embedded Systems and VLSI Design courses.

## Structure

### Image Helper (`courseImages.ts`)
A centralized mapping system for course images with proper TypeScript interfaces:

```typescript
export interface CourseImage {
  src: string;
  alt: string;
}
```

### Supported Course Slugs
- `embedded-systems` or `embedded` → Orange/blue neon microchip image
- `vlsi-design` or `vlsi` → Blue circuit board image

### Helper Function
```typescript
getCourseImage(slug: string, title?: string): CourseImage
```

Automatically matches course slugs or titles to return appropriate images with accessibility-compliant alt text.

## Implementation Details

### Files Updated

1. **`src/lib/courseImages.ts`** (NEW)
   - Centralized course image mappings
   - Type-safe image references
   - Automatic slug/title matching

2. **`src/pages/Home.tsx`**
   - Updated `programs` array with new Embedded Systems and VLSI images
   - Added proper alt text for accessibility

3. **`src/pages/ServiceDetail.tsx`**
   - Updated training programs with course images
   - Added image display in program cards with 16:9 aspect ratio
   - Implemented hover scale effect

4. **`src/pages/Blog.tsx`**
   - Updated blog post images for Embedded Systems and VLSI articles
   - Consistent imagery across blog content

5. **`src/pages/BlogPost.tsx`**
   - Updated featured image and related posts
   - Maintained consistency with blog listing

## Design Guidelines

### Image Specifications
- **Aspect Ratio**: 16:9 for all course images
- **Loading**: Lazy loading enabled by default
- **Transitions**: 300ms hover scale (1.05x)
- **Border Radius**: `rounded-xl` (0.75rem)
- **Object Fit**: `object-cover` to maintain aspect ratio

### Responsive Sizes
```html
sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 480px"
```

### Accessibility
- All images include descriptive alt text
- Alt text describes the visual content, not just the course name
- Example: "Embedded systems microchip with orange and blue neon lighting"

## Usage Examples

### Basic Usage
```typescript
import { getCourseImage } from '@/lib/courseImages';

const embeddedImage = getCourseImage('embedded-systems');
// Returns: { src: '...', alt: 'Embedded systems microchip...' }
```

### With Title Fallback
```typescript
const image = getCourseImage('unknown-slug', 'Embedded Systems Course');
// Automatically matches title containing 'embedded'
```

### In Component
```tsx
const { src, alt } = getCourseImage(course.slug);

<img
  src={src}
  alt={alt}
  className="w-full h-full object-cover"
  loading="lazy"
/>
```

## SEO & Social Media

### Open Graph Images
Update meta tags in page components:
```html
<meta property="og:image" content={getCourseImage('embedded-systems').src} />
<meta property="og:image:alt" content={getCourseImage('embedded-systems').alt} />
```

### Twitter Cards
```html
<meta name="twitter:image" content={getCourseImage('vlsi').src} />
<meta name="twitter:image:alt" content={getCourseImage('vlsi').alt} />
```

## Performance Optimizations

1. **Lazy Loading**: All images use `loading="lazy"` attribute
2. **Responsive Images**: Proper `sizes` attribute for optimal loading
3. **Cached References**: Images sourced from reliable CDN (Pexels)
4. **Optimized Transforms**: CSS transforms use GPU acceleration

## Future Enhancements

### Planned Features
- [ ] Local image optimization with next/image equivalent
- [ ] WebP/AVIF format support
- [ ] Automatic responsive srcset generation
- [ ] Image preloading for above-the-fold content
- [ ] Dark mode variants

### Adding New Course Images
1. Add entry to `COURSE_IMAGES` object in `courseImages.ts`
2. Include proper slug and descriptive alt text
3. Update this README with new course information
4. Test across all pages using the course

## Testing Checklist

- [x] Home page program cards display correct images
- [x] Service detail page shows images in program cards
- [x] Blog listing shows correct featured images
- [x] Blog post page displays proper hero image
- [x] All images have descriptive alt text
- [x] Images load lazily on scroll
- [x] Hover effects work smoothly
- [x] Responsive sizing works on mobile/tablet/desktop
- [x] Build completes without errors

## Commit Message
```
feat(media): replace Embedded & VLSI images site-wide + SEO/OG updates

- Created centralized courseImages.ts helper
- Updated all Embedded Systems images to orange neon chip
- Updated all VLSI Design images to blue PCB circuit
- Added proper accessibility alt text
- Implemented responsive image loading
- Enhanced ServiceDetail program cards with images
- Maintained consistent 16:9 aspect ratio
- Optimized for performance with lazy loading
```
