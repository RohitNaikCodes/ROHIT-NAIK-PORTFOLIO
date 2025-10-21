# How to Add Your Custom Logo

## Current Setup
Your portfolio now has a header with:
- **Name:** "Rohit Naik"
- **Logo:** Circular badge with initials "RN"
- **Title:** "Full Stack Developer"

## To Add a Custom Logo Image:

### Option 1: Use an Image File

1. **Add your logo image** to the `public` folder:
   - Create: `public/logo.png` (or .jpg, .svg)
   - Recommended size: 48x48px to 100x100px

2. **Update** `src/components/Header.jsx`:

Replace this section (around line 13-18):
```jsx
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center font-bold text-accent text-lg sm:text-xl group-hover:bg-accent group-hover:text-background transition-all duration-300">
  RN
</div>
```

With:
```jsx
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-accent">
  <img 
    src="/logo.png" 
    alt="Rohit Naik Logo" 
    className="w-full h-full object-cover"
  />
</div>
```

Or use Next.js Image component (better performance):
```jsx
import Image from "next/image";

// Then replace the logo div with:
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-accent">
  <Image 
    src="/logo.png" 
    alt="Rohit Naik Logo" 
    width={48}
    height={48}
    className="w-full h-full object-cover"
  />
</div>
```

### Option 2: Keep Current Initials Logo
The current "RN" badge is already set up and looks professional!

## Customization Options:

### Change Colors:
In `Header.jsx`, modify these classes:
- `bg-accent/20` - Background color
- `border-accent` - Border color
- `text-accent` - Text color
- `hover:bg-accent` - Hover background

### Change Name/Title:
Update lines 23-27 in `Header.jsx`:
```jsx
<span className="font-bold text-lg sm:text-xl">
  Your Name Here
</span>
<span className="text-xs text-foreground/60">
  Your Title Here
</span>
```

### Remove Top Navigation:
If you don't want the top nav links (About, Projects, etc.), delete lines 31-51 in `Header.jsx`

## Current Features:
✅ Animated entrance (slides down on page load)
✅ Glassmorphism effect (translucent background)
✅ Hover effects on logo and name
✅ Responsive design (mobile & desktop)
✅ Links to homepage when clicked
✅ Optional top navigation bar (desktop only)

## Your Header is Live Now!
The dev server has hot-reloaded - check http://localhost:3000 to see it!
