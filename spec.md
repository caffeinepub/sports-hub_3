# Sports Hub

## Current State
The app has a Navbar, HomeSection, BadmintonSection, FootballSection, ScheduleSection, ContactSection, and Footer. It shows sport info, events, and a contact form. There is no product/gear showcase.

## Requested Changes (Diff)

### Add
- A new `ProductsSection` that showcases sports gear and apparel for both badminton and football:
  - Badminton: rackets, shuttlecocks, badminton shoes, jerseys, shorts
  - Football: footballs, football shoes/cleats, jerseys, shorts, goalkeeper gloves
- Filter tabs: All / Badminton / Football and category filters (Apparel, Footwear, Equipment)
- Each product card: image, name, sport tag, category tag, short description, price
- Navigation link "Products" added to Navbar and mobile menu

### Modify
- App.tsx: add `<ProductsSection />` between FootballSection and ScheduleSection
- Navbar: add "Products" link pointing to `#products`

### Remove
- Nothing removed

## Implementation Plan
1. Generate product images (rackets, shoes, jerseys, shorts, football, etc.)
2. Create `src/frontend/src/sections/ProductsSection.tsx` with product catalog, filter tabs, and product cards
3. Update `Navbar.tsx` to add Products nav link
4. Update `App.tsx` to include ProductsSection
