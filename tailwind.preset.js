/**
 * Tyler Darrell — Design System: Tailwind preset
 * Drop into tailwind.config: `presets: [require('./tailwind.preset.js')]`
 * Mirrors the tokens in /tokens. Dark theme.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#8b5cf6",
          primary: "#8b5cf6",
          "primary-light": "#a78bfa",
          purple: "#a855f7",
          secondary: "#2dd4bf",
          "secondary-light": "#5eead4",
        },
        bg: {
          base: "#0a0a0f",
          surface: "#12121a",
          elevated: "#1a1a25",
        },
        ink: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#64748b",
          gray: "#9ca3af",
          light: "#e5e7eb",
        },
        success: "#22c55e",
        error: "#ef4444",
        warning: "#f59e0b",
        info: "#3b82f6",
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        sm: "0.25rem", md: "0.375rem", lg: "0.5rem",
        xl: "0.75rem", "2xl": "1rem", full: "9999px",
      },
      boxShadow: {
        card: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px rgba(255,255,255,0.1)",
        elevated: "0 20px 40px rgba(0,0,0,0.4), 0 0 60px rgba(168,85,247,0.1), inset 0 1px rgba(255,255,255,0.15)",
        "glow-brand": "0 10px 30px rgba(168,85,247,0.4), 0 0 20px rgba(45,212,191,0.2)",
        "glow-violet": "0 0 60px rgba(139,92,246,0.25)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #8b5cf6 0%, #2dd4bf 100%)",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.4, 0, 0.2, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
      },
      transitionDuration: {
        fast: "150ms", base: "200ms", slow: "300ms", slower: "500ms",
      },
    },
  },
};
