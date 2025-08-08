# Stitching 101 – Static Website

A responsive, accessible single-page site that introduces the basics of hand stitching: tools, techniques, and common stitches. Built with plain HTML/CSS/JS.

## Run locally

Using Python (already available in most environments):

```bash
cd /workspace
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Structure

- `index.html` – content and layout
- `styles.css` – design system and responsive styles
- `script.js` – interactivity (mobile nav, accordion, signup validation)

## Notes

- No external JS deps. Fonts are loaded from Google Fonts.
- The signup form is client-side only (demo). Hook it to your backend or a form service to collect submissions.