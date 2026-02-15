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

### Current Sections (December 15, 2025)

1. **Hero Section** (`/app/frontend/src/components/BirthdayHero.jsx`)
   - Full-screen hero with background image
   - Animated confetti effects
   - Floating balloon animations
   - Personalized birthday message
   - Music toggle button (UI ready)
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
   - Social/contact information ready

### Removed Sections (User Request)
- ~~Photo Gallery~~ - Removed per user request
- ~~Timeline/Memories Section~~ - Removed per user request

### Mock Data
- All data stored in `/app/frontend/src/mockData.js`
- Includes: person info, hero images, wishes, gift message
- Birth date set to 2025-01-15 (can be updated)

### Styling & Animations
- Custom animations in `/app/frontend/src/index.css`
- Confetti fall animation
- Balloon floating animation
- Fade-in-up transitions
- Shake effects
- Smooth scroll behavior

## Technical Stack
- **Frontend**: React 19.0.0
- **UI Library**: Shadcn/UI components
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Images**: Unsplash (curated birthday images)

## Current Status
✅ Frontend fully functional with mock data
✅ Streamlined to 4 main sections (Hero, Wishes, Countdown, Gift)
✅ All interactive elements working
✅ Responsive design implemented
✅ Animations and effects active
✅ Services running (frontend on port 3000, backend on port 8001)

## Next Action Items (Prioritized)

### P0 - Critical
1. Add actual birthday music file (currently placeholder)
2. Update birth date in mockData.js to actual date
3. Customize wishes message further if needed

### P1 - High Priority
1. Add guestbook feature for friends to leave messages
2. Create backend API for storing wishes/messages
3. Deploy to production

### P2 - Nice to Have
1. Social sharing functionality
2. Download celebration images
3. Email invitation feature
4. Admin panel to customize content

## Notes
- Preview service experiencing temporary issues (infrastructure-related)
- Application verified working on localhost:3000
- All mock data can be easily replaced with real data
- Music feature UI ready, needs audio file integration
- Simplified design with focused content per user feedback
