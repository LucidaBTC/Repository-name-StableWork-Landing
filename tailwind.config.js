/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          50: "var(--sw-primary-50)",
          100: "var(--sw-primary-100)",
          200: "var(--sw-primary-200)",
          300: "var(--sw-primary-300)",
          400: "var(--sw-primary-400)",
          500: "var(--sw-primary-500)",
          600: "var(--sw-primary-600)",
          700: "var(--sw-primary-700)",
          800: "var(--sw-primary-800)",
          900: "var(--sw-primary-900)",
        },
        secondary: {
          50: "var(--sw-secondary-50)",
          100: "var(--sw-secondary-100)",
          200: "var(--sw-secondary-200)",
          300: "var(--sw-secondary-300)",
          400: "var(--sw-secondary-400)",
          500: "var(--sw-secondary-500)",
          600: "var(--sw-secondary-600)",
          700: "var(--sw-secondary-700)",
          800: "var(--sw-secondary-800)",
          900: "var(--sw-secondary-900)",
        },
        accent: {
          50: "var(--sw-accent-50)",
          100: "var(--sw-accent-100)",
          200: "var(--sw-accent-200)",
          300: "var(--sw-accent-300)",
          400: "var(--sw-accent-400)",
          500: "var(--sw-accent-500)",
          600: "var(--sw-accent-600)",
          700: "var(--sw-accent-700)",
          800: "var(--sw-accent-800)",
          900: "var(--sw-accent-900)",
        },
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "card-gradient": "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
        "primary-gradient": "var(--sw-gradient-primary)",
        "secondary-gradient": "var(--sw-gradient-secondary)",
        "accent-gradient": "var(--sw-gradient-accent)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
        spin: "spin 1s linear infinite",
        "nodePulse": "nodePulse 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        nodePulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      boxShadow: {
        soft: "var(--sw-shadow)",
        medium: "var(--sw-shadow-md)",
        large: "var(--sw-shadow-lg)",
        glow: "0 0 20px rgba(14, 165, 233, 0.15)",
        "glow-purple": "0 0 20px rgba(217, 70, 239, 0.15)",
      },
      spacing: {
        1: "var(--sw-spacing-1)",
        2: "var(--sw-spacing-2)",
        3: "var(--sw-spacing-3)",
        4: "var(--sw-spacing-4)",
        5: "var(--sw-spacing-5)",
        6: "var(--sw-spacing-6)",
        8: "var(--sw-spacing-8)",
        10: "var(--sw-spacing-10)",
        12: "var(--sw-spacing-12)",
        16: "var(--sw-spacing-16)",
        20: "var(--sw-spacing-20)",
        24: "var(--sw-spacing-24)",
      },
      borderRadius: {
        sm: "var(--sw-radius-sm)",
        DEFAULT: "var(--sw-radius)",
        md: "var(--sw-radius-md)",
        lg: "var(--sw-radius-lg)",
        xl: "var(--sw-radius-xl)",
        "2xl": "var(--sw-radius-2xl)",
        "3xl": "var(--sw-radius-3xl)",
        full: "var(--sw-radius-full)",
      },
      fontSize: {
        xs: "var(--sw-font-size-xs)",
        sm: "var(--sw-font-size-sm)",
        base: "var(--sw-font-size-base)",
        lg: "var(--sw-font-size-lg)",
        xl: "var(--sw-font-size-xl)",
        "2xl": "var(--sw-font-size-2xl)",
        "3xl": "var(--sw-font-size-3xl)",
        "4xl": "var(--sw-font-size-4xl)",
        "5xl": "var(--sw-font-size-5xl)",
        "6xl": "var(--sw-font-size-6xl)",
      },
      fontWeight: {
        normal: "var(--sw-font-weight-normal)",
        medium: "var(--sw-font-weight-medium)",
        semibold: "var(--sw-font-weight-semibold)",
        bold: "var(--sw-font-weight-bold)",
      },
      lineHeight: {
        tight: "var(--sw-line-height-tight)",
        normal: "var(--sw-line-height-normal)",
        relaxed: "var(--sw-line-height-relaxed)",
      },
      // Accessibility utilities
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "motion-safe": { raw: "(prefers-reduced-motion: no-preference)" },
        "motion-reduce": { raw: "(prefers-reduced-motion: reduce)" },
        "high-contrast": { raw: "(prefers-contrast: high)" },
      },
    },
  },
  plugins: [
    // Custom plugin for accessibility utilities
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".sr-only": {
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: "0",
        },
        ".not-sr-only": {
          position: "static",
          width: "auto",
          height: "auto",
          padding: "0",
          margin: "0",
          overflow: "visible",
          clip: "auto",
          whiteSpace: "normal",
        },
        ".focus-visible": {
          "&:focus-visible": {
            outline: "2px solid " + theme("colors.primary.500"),
            outlineOffset: "2px",
          },
        },
        ".skip-link": {
          position: "absolute",
          top: "-40px",
          left: "6px",
          background: theme("colors.primary.600"),
          color: "white",
          padding: "8px",
          textDecoration: "none",
          borderRadius: "0 0 4px 4px",
          zIndex: "100",
          "&:focus": {
            top: "0",
          },
        },
        // Respect reduced motion preferences
        "@media (prefers-reduced-motion: reduce)": {
          "*": {
            animationDuration: "0.01ms !important",
            animationIterationCount: "1 !important",
            transitionDuration: "0.01ms !important",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
  // Performance optimizations
  corePlugins: {
    preflight: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
