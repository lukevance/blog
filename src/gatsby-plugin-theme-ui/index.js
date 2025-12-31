import { merge } from "theme-ui"
import originalTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index"

const theme = merge(originalTheme, {
  // Color scheme - warmer, more sophisticated palette
  colors: {
    text: "#2d3748", // Warmer dark gray instead of pure black
    heading: "#1a202c", // Darker for headings
    primary: "#e85d36", // Warm coral/orange accent (matches 🧡 theme)
    secondary: "#718096", // Muted gray for secondary elements
    toggleIcon: "#cbd5e0",
    background: "#ffffff",
    backgroundSecondary: "#f7fafc", // Very light gray for cards/sections
    divide: "#e2e8f0",
    muted: "#edf2f7",
    modes: {
      dark: {
        text: "#e2e8f0",
        heading: "#f7fafc",
        primary: "#fc8d68", // Lighter coral for dark mode
        secondary: "#a0aec0",
        toggleIcon: "#cbd5e0",
        background: "#1a202c",
        backgroundSecondary: "#2d3748",
        divide: "#4a5568",
        muted: "#2d3748",
      },
    },
  },

  // Typography improvements
  fonts: {
    body: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
    heading: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
  },

  fontSizes: [
    "0.875rem", // 14px
    "1rem",     // 16px
    "1.125rem", // 18px - larger base size
    "1.25rem",  // 20px
    "1.5rem",   // 24px
    "1.875rem", // 30px
    "2.25rem",  // 36px
    "3rem",     // 48px
    "4rem",     // 64px
  ],

  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
  },

  lineHeights: {
    body: 1.75, // More generous for readability
    heading: 1.25,
  },

  letterSpacings: {
    body: "normal",
    heading: "-0.025em", // Tighter for headings, more refined
  },

  // Improved spacing scale
  space: [
    0,
    "0.25rem",
    "0.5rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "6rem",
    "8rem",
  ],

  // Style overrides for better visual hierarchy
  styles: {
    root: {
      fontSize: 2, // 18px base (index from fontSizes)
      lineHeight: "body",
    },
    h1: {
      fontSize: [5, 6, 7], // Responsive sizing
      letterSpacing: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      mt: 5,
      mb: 4,
    },
    h2: {
      fontSize: [4, 5, 6],
      letterSpacing: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      mt: 5,
      mb: 3,
    },
    h3: {
      fontSize: [3, 4, 5],
      letterSpacing: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      mt: 4,
      mb: 3,
    },
    p: {
      fontSize: 2,
      lineHeight: "body",
      mb: 3,
    },
    a: {
      color: "primary",
      textDecoration: "none",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        color: "heading",
        textDecoration: "underline",
      },
    },
    // Blog post card improvements
    Card: {
      bg: "backgroundSecondary",
      borderRadius: "8px",
      p: 4,
      mb: 4,
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        transform: "translateY(-2px)",
      },
    },
  },
})

export default theme
