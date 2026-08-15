# React Profile Card

A modern, premium React profile card component featuring a professional design with glassmorphism effects, smooth animations, and responsive layout.

## Features

- **Modern Design**: Deep navy background with vibrant blue and purple gradient accents
- **Glassmorphism**: Subtle backdrop blur and transparency effects
- **Smooth Animations**: Interactive hover effects on card and social icons
- **Responsive**: Optimized for mobile, tablet, and desktop devices
- **Accessible**: Includes proper ARIA labels and semantic HTML
- **Social Integration**: Clickable LinkedIn and GitHub icons with safe external link handling

## Tech Stack

- **React 18** - Modern functional components with hooks
- **Vite** - Fast build tool and dev server
- **react-icons** - Professional icon library (FaLinkedin, FaGithub)
- **CSS3** - Modern styling with gradients, shadows, and transitions

## Project Structure

```
src/
├── components/
│   ├── ProfileCard.jsx    # Main profile card component
│   └── ProfileCard.css    # Component-specific styles
├── App.jsx                # Root component with centered layout
├── App.css                # Global styles and background
└── main.jsx               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the profile card.

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Customization

### Profile Image

Place your profile image in the `public/` folder and update the path in `src/components/ProfileCard.jsx`:

```javascript
const profileImage = '/your-image.png';
```

### Social Links

Update the social media URLs in `src/components/ProfileCard.jsx`:

```javascript
const linkedinUrl = 'https://www.linkedin.com/in/your-profile';
const githubUrl = 'https://github.com/your-username';
```

### Styling

- **Colors**: Modify gradient colors in `ProfileCard.css` and `App.css`
- **Spacing**: Adjust padding and gap values in CSS files
- **Typography**: Update font sizes and weights in CSS classes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

# 👨‍💻 Authors
- ***☝ ABDUL SABOOR ☝***
  ---

## License
---

``` MIT License - feel free to use this project for personal or commercial purposes.
