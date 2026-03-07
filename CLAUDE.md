# stephenjia.github.io

## Project Overview

This is a static HTML portfolio website hosted on GitHub Pages. There is no build system, no npm/yarn dependencies, and no compilation step. The site is served as-is directly from the repository.

**Main files:**
- `index.html` - Primary homepage with tabbed navigation
- `index_kuleuven.html` - Alternative version
- `js/homepage.js` - JavaScript for publications filtering

## Development & Serving

To serve locally for development:

```bash
cd /Users/xujia/Projects/stephenjia.github.io
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser. Changes to HTML/CSS/JS are immediately visible when you refresh the page—no build step needed.

## Project Structure

- `/css/` - Bootstrap 3.3.4 CSS (local copy)
- `/js/` - jQuery 1.11.1, Bootstrap JS, and homepage.js (local copies)
- `/xjia_profile/` - CV PDFs and profile photo
- `/xjia_publications/` - Research paper PDFs
- `index.html.backup` - Backup of original homepage before redesign

## Homepage Features

The homepage uses Bootstrap 3 tabs to organize content:

1. **Always Visible Section:**
   - Profile photo, name, title, contact information
   - Biography with academic background
   - Welcome message for prospective students
   - Social/academic links with icons (LinkedIn, Google Scholar, DBLP, Chinese homepage)

2. **Tabbed Sections:**
   - **News Tab** (default active) - Scrollable box (400px max height) with chronological news items
   - **Publications Tab** - Filterable list (All/Journal/Conference) with paper details
   - **Students Tab** - List of supervised students with current positions
   - **Service Tab** - Academic service activities and reviewing roles

## Styling

- **Font:** Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Base font size:** 16px with 1.6 line-height
- **Color scheme:** Modern blues (#3498db for links, #2c3e50 for headers)
- **News box:** Light gray background (#f9f9f9) with scrollable content
- **Tabs:** Bootstrap 3 tabs with custom styling (blue active state)

## JavaScript Functionality

`js/homepage.js` provides:
- Publications filtering by type (Journal/Conference/All)
- Dynamic filter buttons with active state styling
- News section displays as simple scrollable list (no year grouping)

## Important Notes

- **No build tools** - Edit HTML/CSS/JS directly
- **No testing or linting** - This is a simple static site
- **Direct editing** - All content updates go directly to `index.html`
- **Local dependencies** - Bootstrap and jQuery are included locally, not from CDN
- **Backup files** - Keep `index.html.backup` for reference to original design
