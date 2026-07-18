# The Royal Stitch — A Heritage Bespoke Atelier

A 4-page luxury boutique platform built with **Vite + React 19 + TypeScript +
Tailwind v4 + framer-motion + react-router-dom + lucide-react**.

## Theme

Luxury Dark Mode — `#000000` background, `#D4AF37` gold accents, `#FFFFFF` text.
Fonts: Playfair Display (display), Inter (sans), JetBrains Mono (mono).

## Pages

| Route               | Page              | Highlights                                                                |
| ------------------- | ----------------- | ------------------------------------------------------------------------- |
| `/`                 | **Welcome**       | Hero with the Master Image, "The Architecture of Elegance," 3 pillars (Bespoke Mastery, Premium Fabric Selection, Worldwide Distribution), editorial gallery, social icons (Instagram, Facebook), WhatsApp Connection button. |
| `/legacy`           | **Our Legacy**    | 458-word brand history (Perfect Silhouette doctrine, heritage), animated timeline, Member Access form (Username + Passphrase, with show/hide toggle). |
| `/showroom`         | **The Showroom**  | Interactive catalog grid (filter, search, favourites, quick-look modal), Inquiry Portal form (Full Name, Mobile Contact, Preferred Style) with the confirmation message "Inquiry received. Our consultant will contact you shortly via mobile." |
| `/partner-portal`   | **Partner Portal**| Asset Manager — add new style with Material Type, Price Tag, Category, gold Upload symbol/dropzone, live catalog table with publish/unpublish & delete, stat cards. |

## Cross-page features

- Mobile-responsive layout with collapsible nav
- Smooth page transitions (framer-motion `AnimatePresence`)
- Floating gold concierge button (bottom-right, expandable to WhatsApp / Instagram / email)
- Working social icons (Instagram, Facebook) and WhatsApp Connection button across the site
- Sticky luxury header that condenses on scroll

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into ./dist
```

## File map

```
src/
  App.tsx                       — router + layout
  main.tsx                      — entry
  index.css                     — Tailwind v4 theme tokens
  components/
    SiteLayout.tsx              — header, footer, floating concierge
    BrandIcons.tsx              — Instagram / Facebook / WhatsApp SVGs
  pages/
    HomePage.tsx                — Welcome
    LegacyPage.tsx              — Our Legacy
    ShowroomPage.tsx            — The Showroom
    PartnerPortalPage.tsx       — Partner Portal
  lib/appInfo.ts                — brand metadata
public/
  uploads/input_0.png           — uploaded master hero image
  images/*.jpg                  — fashion-industry stock photography
  favicon.svg
```
