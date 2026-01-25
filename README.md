# Bolts and Nuts Torque Specs Web App

A modern, responsive web application for mechanics to check torque specifications and convert units. Built with **Vite + React**.

## Features
- **Torque Chart**: Searchable database of common Metric (8.8, 10.9) and SAE (Grade 5, 8) bolt torque specs.
- **Torque Calculator**: Real-time conversion between Nm, ft-lbs, in-lbs, and kg-m.
- **Premium Design**: Dark mode interface with glassmorphism effects, optimized for both mobile and desktop.
- **PWA Ready**: Fast loading and responsive.

## Project Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment

This project is configured for **GitHub Pages**.

1. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```
   *Note: Ensure you have initialized git and pushed to a remote repository.*

## Customization
- **Data**: Edit `src/data/torqueSpecs.js` to add more bolt sizes or grades.
- **Styles**: Edit `src/index.css` to change the theme variables.
