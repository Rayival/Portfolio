import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        dark: '#0F172A',
        muted: '#64748B',
      },
    },
  },
}
