# Birthday Website for Harsh Pandey - PRD

## Project Overview
A beautiful, elegant, and vibrant birthday celebration website for Harsh Pandey with sophisticated design and interactive elements.

## Original Problem Statement
Create a beautiful birthday website with great attractive UI for a friend (Harsh Pandey) featuring elegant & sophisticated design combined with vibrant & colorful elements.

## User Persona
- **Target User**: Harsh Pandey (Birthday celebrant)
- **Purpose**: Personal birthday celebration website
- **Relationship**: Friend

## Design Specifications
- **Style**: Elegant & sophisticated + Vibrant & colorful
- **Color Palette**: 
  - Primary: Amber (#fbbf24) and Gold tones
  - Secondary: Coral/Orange (#fb923c)
  - Accent: Pink (#fca5a5)
  - Backgrounds: Cream, Ivory, and white
- **Typography**: System fonts with proper hierarchy
- **Animations**: Confetti, floating balloons, smooth transitions, micro-interactions

## Features Implemented

### Current Sections (Updated December 15, 2025)

1. **Hero Section** (`/app/frontend/src/components/BirthdayHero.jsx`)
   - Full-screen hero with custom background image (Instagram photo)
   - Animated confetti effects
   - Floating balloon animations
   - Personalized birthday message for Harsh Pandey
   - Music toggle button (fully functional)
   - Smooth scroll indicator

2. **Wishes Section** (`/app/frontend/src/components/WishesSection.jsx`)
   - Heartfelt birthday message
   - Decorative cards for Joy, Success, and Memories
   - Gradient background with subtle animations

3. **Countdown Timer** (`/app/frontend/src/components/CountdownTimer.jsx`)
   - Real-time countdown to next birthday
   - Shows days, hours, minutes, seconds
   - Special "Today is your day" message when birthday arrives

4. **Virtual Gift** (`/app/frontend/src/components/VirtualGift.jsx`)
   - Interactive gift box
   - Click-to-reveal animation
   - Surprise message with celebration emojis
   - Shake animation on click

5. **Footer** (`/app/frontend/src/components/Footer.jsx`)
   - Beautiful gradient background
   - Celebration message
   - Personalized footer for Harsh

### Background Music Setup ✅

**Song Details:**
- **Title**: Ratiyaan
- **Artists**: Hansika Pareek, Sagnik Kolay, Soham M
- **Source**: Latest Hindi Love Song 2024
- **File Location**: Hosted on Emergent Assets CDN
- **URL**: https://customer-assets.emergentagent.com/job_birthday-joy-64/artifacts/g96nf174_Ratiyaan%20-%20Hansika%20Pareek%20%20SagnikKolay%20%20Soham%20M%20%20StereoAuxHits%20Latest%20Hindi%20Love%20Song%202024%20-%20Hansika%20Pareek%20%28youtube%29.mp3

**Music Player Features:**
- ✅ Toggle play/pause button in hero section
- ✅ Music loops continuously
- ✅ Volume set to 50% for comfortable listening
- ✅ User can control playback
- ✅ Music persists across page sections
- ✅ Auto-cleanup on page unmount

**Implementation:**
- Audio initialized in App.js useEffect hook
- Music data stored in mockData.js
- Control button integrated in BirthdayHero component
- Full audio player infrastructure ready

### Custom Background Image ✅
- **Hero Background**: Personal photo from Instagram
- **Image URL**: Instagram CDN-hosted image
- **Format**: WebP (optimized for web)
- **Quality**: High resolution (1080x1080)

### Removed Sections (User Request)
- ~~Photo Gallery~~ - Removed per user request
- ~~Timeline/Memories Section~~ - Removed per user request

### Data Configuration
- All data stored in `/app/frontend/src/mockData.js`
- Includes: person info, hero images, wishes, gift message, music playlist
- Birth date set to 2025-01-15 (can be updated to actual date)

### Styling & Animations
- Custom animations in `/app/frontend/src/index.css`
- Confetti fall animation
- Balloon floating animation
- Fade-in-up transitions
- Shake effects for interactive elements
- Smooth scroll behavior

## Technical Stack
- **Frontend**: React 19.0.0
- **UI Library**: Shadcn/UI components
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Images**: Custom Instagram image + Unsplash
- **Audio**: HTML5 Audio API with loop and volume control

## Current Status
✅ Frontend fully functional with all features
✅ Background music integrated and working
✅ Custom hero background image set
✅ Streamlined to 4 main sections (Hero, Wishes, Countdown, Gift)
✅ All interactive elements working
✅ Responsive design implemented
✅ Animations and effects active
✅ Services running (frontend on port 3000, backend on port 8001)

## Music Implementation Details

### File Structure:
```
/app/frontend/src/
├── App.js (Audio initialization and control)
├── mockData.js (Music playlist configuration)
└── components/
    └── BirthdayHero.jsx (Music toggle UI)
```

### Audio Configuration:
- **Loop**: Enabled (continuous playback)
- **Volume**: 0.5 (50%)
- **Autoplay**: Disabled (user must click to start)
- **Format**: MP3
- **Delivery**: CDN (fast loading)

### How to Update Music:
1. Replace URL in `mockData.js` → `musicPlaylist.defaultTrack.url`
2. Update title and artist information as needed
3. No code changes required, just data update

## Next Action Items (Prioritized)

### P0 - Critical
1. ✅ Background music integrated - COMPLETED
2. ✅ Custom background image set - COMPLETED
3. Update birth date in mockData.js to Harsh's actual birthday

### P1 - High Priority
1. Customize wishes message further if needed
2. Test music playback across different browsers
3. Add loading state for music player

### P2 - Nice to Have
1. Add volume control slider
2. Display current playing song info
3. Add more songs to create a playlist
4. Social sharing functionality
5. Deploy to production

## Notes
- Preview service may experience temporary issues (infrastructure-related)
- Application verified working on localhost:3000
- Music file hosted on secure CDN with reliable access
- All mock data can be easily replaced with real data
- Simplified design with focused content per user feedback
- Music player fully functional - user clicks music icon to play/pause

## How to Use the Website

1. **Landing**: Hero section loads with custom background image
2. **Music**: Click the music icon (top right) to start/stop background music
3. **Navigation**: Scroll or click "Explore Your Special Day" button
4. **Sections**: Experience wishes, countdown timer, and virtual gift
5. **Gift**: Click the gift box to reveal special message

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Audio tested on desktop browsers
- Note: Some mobile browsers may require user interaction before playing audio
