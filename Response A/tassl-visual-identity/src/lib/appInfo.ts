import { Boxes, Database, Palette, Route } from 'lucide-react'

export const appInfo = {
  name: 'Design Arena Starter',
  description:
    'A Vite, React, TypeScript, Tailwind v4 starter shaped for fast agent-built web apps.',
}

export const starterFeatures = [
  {
    icon: Boxes,
    title: 'Vite + React 19',
    description: 'Modern TypeScript app shell with fast local builds.',
  },
  {
    icon: Palette,
    title: 'Tailwind v4',
    description: 'Theme tokens live in src/index.css and are ready for semantic classes.',
  },
  {
    icon: Route,
    title: 'Routing ready',
    description: 'react-router-dom is wired so new pages can be added without reshaping App.tsx.',
  },
  {
    icon: Database,
    title: 'App folders',
    description: 'components, pages, lib, and public/uploads are ready for real features.',
  },
]
