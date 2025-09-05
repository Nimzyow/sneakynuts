module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        highlight: "var(--color-highlight)",
        gold: "var(--color-gold)",
        purple: "var(--color-purple)",
        pink: "var(--color-pink)",
        blue: "var(--color-blue)",
        green: "var(--color-green)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-dark": "var(--color-text-dark)",
      },
    },
  },
};