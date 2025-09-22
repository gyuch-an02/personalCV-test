# Gyuchan An - Computational Biology Portfolio

## Overview
A single-page portfolio presenting Gyuchan An's computational biology, immunology, and AI research. The site highlights academic background, research projects, skills, and leadership experience with a modern, glassmorphic aesthetic and variable typography via Pretendard Variable.

## Project Structure
- `index.html` - HTML entry point wiring the hero narrative, differentiated content panels, and footer. References external styles/scripts and the downloadable CV.
- `assets/css/style.css` - Centralized styling with section-specific gradients, responsive `clamp()` typography, and component layouts such as timelines, research cards, and skill matrices.
- `assets/js/main.js` - Lightweight JavaScript that updates the copyright year and enables smooth scrolling for in-page navigation.
- `personalcv.md` - Markdown CV linked for direct download from the hero call-to-action.

## Local Preview
1. Ensure the repository is cloned locally.
2. From the project root, run `powershell Start-Process msedge .\index.html` (or open `index.html` in any modern browser).
3. Scroll the page to validate smooth anchor navigation and section styling.

## Customization Tips
- Update textual content directly in `index.html`; section IDs (`education`, `research`, etc.) align with navigation anchors.
- Modify palette, gradients, or layout tokens inside `assets/css/style.css`. Look for the `.panel--*` blocks to tweak per-section themes.
- Extend interactive behavior by editing `assets/js/main.js`; additional utilities can hook into the `DOMContentLoaded` handler.

## Deployment
This repository is GitHub Pages ready. Publish the `main` branch (root directory) via **Settings -> Pages**, then share the generated site URL. For custom domains, add a `CNAME` file alongside `index.html`.
