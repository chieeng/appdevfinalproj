# VacanSee - Boarding House Listing Platform

A modern React-based web application for discovering and managing boarding house accommodations with real-time search, filtering, and messaging capabilities.

## Project Overview

**Purpose:** VacanSee connects students and professionals seeking boarding accommodations with property owners in a user-friendly digital platform.

**Developer:** Application Development Course - Final Project  
**Status:** Active Development  
**Live Demo:** Available at http://localhost:3000 (development)

---

## ✨ Key Features

### User Features
- **Browse Listings:** Explore all available boarding houses with detailed information
- **Advanced Search & Filter:** Filter by location, price range, amenities, and availability
- **Listing Details:** View high-resolution images, descriptions, pricing, and contact information for each property
- **Real-time Messaging:** Communication system between renters and landlords
- **Saved Preferences:** Quick access to favorite listings (profile feature)
- **Responsive Design:** Seamless experience across desktop, tablet, and mobile devices

### Developer Features
- **Authentication System:** Basic login/register with demo credentials support
- **Component-Based Architecture:** Modular, reusable React components for maintainability
- **Responsive Grid Layouts:** Mobile-first CSS Grid implementation with adaptive breakpoints
- **Image Management:** Dynamic image cycling for property showcases
- **State Management:** React hooks (useState) for local state and component communication
- **Professional UI/UX:** Teal-blue color scheme with gradient accents and smooth animations

---

## 🛠️ Technology Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| **Frontend Framework** | React.js | 18.x |
| **Routing** | React Router | 6.x |
| **Styling** | CSS3 | Native (Flexbox/Grid) |
| **Build System** | Create React App | 5.x |
| **Package Manager** | npm | 8.x+ |
| **Development Server** | Webpack Dev Server | Built-in |

---

## 📋 System Requirements

Before running this project, ensure you have:

- **Node.js:** v14.0.0 or higher ([Download](https://nodejs.org/))
- **npm:** v6.0.0 or higher (included with Node.js)
- **Operating System:** Windows, macOS, or Linux
- **RAM:** Minimum 2GB (4GB recommended for smooth development)
- **Disk Space:** ~500MB for node_modules

**To verify installation:**
```bash
node --version
npm --version
```

---

## 🚀 Installation & Setup

### Step 1: Clone or Extract Project
```bash
# Navigate to your workspace
cd "d:\School Works\PracticeCodes\React\appdevfinalproj"
```

### Step 2: Install Dependencies
```bash
npm install
```
This command installs all required packages listed in `package.json`.

### Step 3: Start Development Server
```bash
npm start
```
- Opens automatically at http://localhost:3000
- Hot-reload enabled (changes reflect instantly)
- Console shows build status and warnings

### Step 4: Access the Application
Open your browser and navigate to: **http://localhost:3000**

---

## 📁 Project Structure

```
appdevfinalproj/
├── public/
│   ├── index.html           # Main HTML entry point
│   ├── manifest.json        # PWA manifest
│   └── robots.txt           # SEO robots configuration
├── src/
│   ├── App.jsx              # Root component with routing
│   ├── App.css              # Global styles (4000+ lines)
│   ├── index.js             # React DOM render entry
│   ├── index.css            # Base styles
│   ├── setupTests.js        # Testing configuration
│   ├── reportWebVitals.js   # Performance metrics
│   │
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx       # Navigation bar with logo & auth
│   │   ├── Card.jsx         # Property card with image cycling
│   │   ├── Hero.jsx         # Hero section component
│   │   ├── SearchBar.jsx    # Search input component
│   │   ├── SearchInput.jsx  # Legacy search (removed)
│   │   ├── FilterPanel.jsx  # Filter sidebar component
│   │   ├── ChatBox.jsx      # Messaging overlay component
│   │   ├── InquiryForm.jsx  # Inquiry submission form
│   │   ├── Topbar.jsx       # Secondary top navigation
│   │   └── BoardingCard.jsx # Alternative card variant
│   │
│   ├── images/              # Static assets
│   │   ├── cover-1.png      # Hero background (Search/Conversations)
│   │   ├── cover-2.png      # Hero background (Browse page)
│   │   ├── cover-3.png      # Hero background (Conversations page)
│   │   ├── listing-1.jpg    # Property image 1
│   │   ├── listing-2.png    # Property image 2
│   │   ├── listing-3.jpg    # Property image 3
│   │   └── logo.png         # VacanSee logo (32x32px)
│   │
│   └── pages/               # Route pages
│       ├── Home.jsx         # Homepage with hero & categories
│       ├── Browse.jsx       # All listings with filters
│       ├── Search.jsx       # Search results page
│       ├── ListingDetails.jsx # Individual property page
│       ├── Menu.jsx         # Quick access dashboard
│       ├── Conversations.jsx # Messaging hub
│       ├── Messages.jsx     # Message threads
│       ├── Dashboard.jsx    # User dashboard
│       ├── Profile.jsx      # User profile page
│       ├── About.jsx        # About us page
│       ├── Contact.jsx      # Contact form page
│       ├── Login.jsx        # Authentication login
│       └── Register.jsx     # User registration
│
├── package.json             # Dependencies & scripts
└── README.md               # This file
```

---

## 🎨 Color Scheme

**Primary Palette:**
- **Teal:** `#14b8a6` - Primary action elements, accents
- **Blue:** `#3b82f6` - Secondary buttons, highlights
- **Cyan:** `#06b6d4` - Interactive elements
- **Dark Teal:** `#0891b2` - Menu icons, borders

**Supporting Colors:**
- **White:** `#FFFFFF` - Text, backgrounds
- **Dark Gray:** `#374151` - Secondary text
- **Light Gray:** `#F3F4F6` - Card backgrounds
- **Red:** `#EF4444` - Error states

**Gradient:** `linear-gradient(135deg, #14b8a6, #3b82f6)` - Used throughout UI for modern aesthetic

---

## 🗺️ Application Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home.jsx | Landing page with hero & featured listings |
| `/browse` | Browse.jsx | Complete listings with search/filter |
| `/search` | Search.jsx | Search results based on query |
| `/listing/:id` | ListingDetails.jsx | Individual property details & inquiry |
| `/menu` | Menu.jsx | Quick access dashboard (4 shortcuts) |
| `/conversations` | Conversations.jsx | Messaging hub |
| `/messages/:id` | Messages.jsx | Individual message thread |
| `/dashboard` | Dashboard.jsx | User statistics & overview |
| `/profile` | Profile.jsx | User profile management |
| `/about` | About.jsx | About VacanSee information |
| `/contact` | Contact.jsx | Contact form submission |
| `/login` | Login.jsx | Authentication portal |
| `/register` | Register.jsx | New user registration |

---

## 🔐 Authentication

**Login System:** Basic authentication with state management via `isLoggedIn` in App.jsx

**Demo Credentials:**
```
Email:    eragritchiegg@gmail.com
Password: password123
```

**Features:**
- Login state persists in component (not in localStorage)
- Logout redirects to Home page
- Protected routes can be added via `isLoggedIn` check
- Demo credentials work immediately without backend

---

## 🏠 Key Components Explained

### Navbar.jsx
- Fixed header with VacanSee logo and navigation
- Displays Login/Dashboard buttons based on auth state
- Logo: PNG image (32px) + text with gradient styling
- Responsive menu for mobile devices

### Card.jsx
- Individual property listing component
- Displays cycling property images (listing-1/2/3)
- Shows price, location, description, and rating
- Image rotation: `(id - 1) % 3` for circular image cycling
- Gradient border styling with hover effects

### FilterPanel.jsx
- Sidebar filter interface for Browse page
- Filter by price range, location, amenities, availability
- State management via parent component (Browse.jsx)
- Mobile-responsive collapsible panel

### Hero.jsx
- Full-width hero section with background image
- Used on multiple pages for visual consistency
- Accepts `backgroundImage` as prop for flexibility
- Text overlay with semi-transparent background

### ChatBox.jsx
- Floating messaging interface component
- Persistent overlay across all pages
- Can be toggled open/closed
- Displays chat threads and message input

---

## 📊 Data Structures

**Listing Object:**
```javascript
{
  id: 1,
  title: "Modern Boarding House",
  location: "Downtown Area",
  price: 25000,
  description: "Fully furnished with WiFi and utilities",
  rating: 4.5,
  images: ["listing-1.jpg", "listing-2.png", "listing-3.jpg"],
  amenities: ["WiFi", "AC", "Water", "Kitchen"],
  availability: true,
  ownerContact: "09171234567"
}
```

**User Object:**
```javascript
{
  id: 1,
  email: "eragritchiegg@gmail.com",
  fullName: "Erica Gritchie",
  isLoggedIn: true,
  savedListings: [1, 3, 5],
  messages: []
}
```

**Message Object:**
```javascript
{
  id: 1,
  sender: "user@email.com",
  receiver: "owner@email.com",
  content: "Is this still available?",
  timestamp: "2024-01-15 14:30",
  read: false
}
```

---

## 👥 User Flows

### 1. Guest Browse Flow
Home → Browse/Search → Listing Details → Login Prompt

### 2. Authenticated User Flow
Login → Dashboard → Browse → Inquiry → Messaging

### 3. Message Flow
Conversations Hub → Select Thread → Message Details → Reply

### 4. Profile Management Flow
Dashboard → Profile → Edit Info → Save Changes

---

## ⚠️ Known Issues & Limitations

1. **No Backend Integration:** Messages and inquiries are not persisted to a database
2. **Static Listings:** Property data is hardcoded; no add/edit functionality
3. **No Image Upload:** Users cannot upload custom images
4. **Local State Only:** User data and preferences not saved between sessions
5. **Limited Mobile Optimization:** Some components may need adjustment on very small screens (<320px)

---

## 🔄 Recent Improvements (Phase 3)

✅ Removed "VacanSee Dashboard" heading for cleaner Menu page  
✅ Fixed menu grid alignment (2×2 layout instead of 3-1 mismatch)  
✅ Fixed "How VacanSee Works" grid to match 2×2 layout  
✅ Integrated cover images for hero backgrounds (3 covers)  
✅ Implemented listing image cycling in Card and ListingDetails pages  
✅ Added VacanSee logo to navbar (32px PNG)  
✅ Complete color scheme update: Purple → Teal-Blue gradient  
✅ Updated all box shadows to match new color palette  
✅ Fixed search/filter input vertical alignment  
✅ Removed unused SearchInput.jsx component  

---

## 🧪 Testing Checklist for Reporters

Use this checklist to validate the application:

### Functional Testing
- [ ] **App Loads:** No console errors on initial load
- [ ] **Navigation:** All navbar links navigate correctly
- [ ] **Routes:** All 13 routes are accessible and load proper components
- [ ] **Authentication:** Demo login works with provided credentials
- [ ] **Logout:** Logout button appears when logged in
- [ ] **Search:** Search functionality filters listings
- [ ] **Filters:** Price/location filters work on Browse page
- [ ] **Listing Details:** Click card → view full details page
- [ ] **Image Display:** All property and cover images load correctly
- [ ] **Messaging:** ChatBox overlay opens/closes properly

### Visual/Design Testing
- [ ] **Colors:** Teal (#14b8a6) and Blue (#3b82f6) gradient visible throughout
- [ ] **Navbar:** Logo displays correctly beside VacanSee text
- [ ] **Menu Grid:** 2×2 box layout (not 3-1 mismatch)
- [ ] **How It Works:** Grid displays 4 items in 2×2 layout
- [ ] **Hero Sections:** Cover images display as backgrounds
- [ ] **Cards:** Property cards show cycling images
- [ ] **Responsive:** Test at 480px, 768px, 1024px, and 1440px widths

### Performance Testing
- [ ] **Load Time:** Page loads within 3 seconds
- [ ] **No Memory Leaks:** Switching pages doesn't degrade performance
- [ ] **Image Performance:** Images load quickly (optimized)
- [ ] **Hot Reload:** npm start reflects changes instantly

### Browser Compatibility
- [ ] **Chrome:** Latest version
- [ ] **Firefox:** Latest version
- [ ] **Safari:** Latest version (macOS/iOS)
- [ ] **Edge:** Latest version

---

## 📈 Performance Targets

- **First Contentful Paint:** < 2 seconds
- **Page Load:** < 3 seconds
- **Time to Interactive:** < 5 seconds
- **Lighthouse Score:** 80+ for Performance

---

## 🚢 Deployment Guide

### Deploy to Netlify
1. Push code to GitHub repository
2. Connect GitHub repository to Netlify
3. Set Build Command: `npm run build`
4. Set Publish Directory: `build`
5. Deploy automatically on push

### Deploy to Vercel
1. Connect GitHub repository to Vercel
2. Framework: Select "Create React App"
3. Build Command: `npm run build` (auto-detected)
4. Deploy setup completes automatically

---

## 📝 Development Tips

### Useful Commands
```bash
npm start              # Start development server (http://localhost:3000)
npm test              # Run tests in watch mode
npm run build         # Create optimized production build
npm run eject         # Eject from Create React App (irreversible)
npm ls                # List all dependencies
npm update            # Update all packages
```

### Adding New Components
1. Create file in `src/components/` directory
2. Import in App.jsx or parent component
3. Add corresponding styles to App.css
4. Export as default: `export default ComponentName;`

### Adding New Pages
1. Create file in `src/pages/` directory
2. Import in App.jsx
3. Add route: `<Route path="/path" element={<PageName />} />`
4. Add navbar link if user-accessible

### CSS Organization
- Global styles in App.css (4000+ lines)
- Component styles organized by section with comments
- Mobile breakpoints: 480px, 768px, 1024px
- Use CSS Grid for layouts, Flexbox for components

---

## 📞 Support & Contact

**For Issues/Bugs:**
- Check browser console for errors: F12 → Console tab
- Clear cache and reload: Ctrl+Shift+Delete
- Reinstall dependencies: `rm -r node_modules && npm install`

**For Questions:**
- Review project structure documentation above
- Check component comments in source files
- Test with demo credentials first

**Course Instructor:** [Contact Information]  
**Project Repository:** [GitHub Link - if available]

---

## 📄 License & Attribution

This project is created for educational purposes as part of the Application Development course (Final Project).

**Key Assets:**
- Logo: VacanSee custom design
- Images: Sample boarding house photography
- Icons: CSS-based (no external icon library)
- Fonts: System fonts for performance

---

**Project Status:** ✅ Complete & Ready for Evaluation  
**Last Updated:** January 2024  
**Version:** 1.0.0
