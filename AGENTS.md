# Repository Guidelines

## Project Structure & Module Organization
Keep the public entry point at `index.html` in the repository root for GitHub Pages to serve it automatically. Introduce supporting assets under `assets/css`, `assets/js`, and `assets/img` as the site grows, and mirror that structure locally before linking in the markup. If you add repo-level configuration files (`CNAME`, `.nojekyll`), store them alongside `index.html` so the deployment pipeline picks them up.

## Build, Test, and Development Commands
- `powershell Start-Process msedge .\index.html` - Opens the site in Microsoft Edge for a manual smoke test.
- `npx serve .` - Hosts the static site locally at `http://localhost:3000` with caching disabled for iterative checks.
- `npx htmlhint index.html` - Lints the markup; resolve warnings before committing changes.

## GitHub Pages Deployment
Ensure the `main` branch stays production-ready because Pages can serve directly from it (or from `docs/`). Verify the GitHub Pages settings: `Source: Deploy from a branch`, `Branch: main / (root)`. After local validation, push commits and confirm the workflow status under **Settings > Pages**. If you add a custom domain, commit a `CNAME` file containing the domain and allow DNS to propagate before testing. Use `gh repo view --web` to open the project and confirm the live URL refreshes.

## Coding Style & Naming Conventions
Indent HTML with two spaces and use double quotes for attributes. Prefer semantic containers (`<header>`, `<section>`, `<footer>`) and keep heading levels sequential. Follow a BEM-style class pattern such as `hero__title` and `hero--compact` to clarify structure and state. Move repeated inline styles into `assets/css/site.css` once it exists so Pages delivers optimized assets.

## Testing Guidelines
Run `npx htmlhint index.html`, then reload the page in at least one Chromium-based browser and a mobile viewport emulator. Validate UTF-8 rendering to guard against broken Hangul characters. Capture before-and-after screenshots for layout adjustments and reference them in your pull request description.

## Commit & Pull Request Guidelines
Write concise, imperative commit messages like `Add hero fade-in animation` or `Fix footer encoding`. Pull requests should summarize the change, list the commands you ran (including linting and manual preview), and attach screenshots when visuals shift. Link related work items with `Fixes #ID` so automation closes them on merge.

## Localization & Accessibility Notes
Keep files UTF-8 encoded to avoid garbled Hangul on the live Pages instance. Provide meaningful `aria-label` attributes for interactive elements and maintain WCAG AA contrast, especially against background images. Document localization or accessibility impacts in the pull request so reviewers can verify them post-deploy.
