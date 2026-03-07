# stephenjia.github.io

## Project Overview

This is a static HTML portfolio website hosted on GitHub Pages. There is no build system, no npm/yarn dependencies, and no compilation step. The site is served as-is directly from the repository.

**Main files:**
- `index.html` - Primary homepage
- `index_kuleuven.html` - Alternative version

## Development & Serving

To serve locally for development:

```bash
cd /Users/xujia/Projects/stephenjia.github.io
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser. Changes to HTML/CSS/JS are immediately visible when you refresh the page—no build step needed.

## Project Structure

- `/css/` - Bootstrap 3.3.4 CSS (local copy)
- `/js/` - jQuery 1.11.1 and Bootstrap JS (local copies)
- `/xjia_profile/` - CV PDFs and profile photo
- `/xjia_publications/` - Research paper PDFs

## Important Notes

- **No build tools** - Edit HTML/CSS/JS directly
- **No testing or linting** - This is a simple static site
- **Direct editing** - All content updates go directly to `index.html`
- **Local dependencies** - Bootstrap and jQuery are included locally, not from CDN
