# Dr. Vikas Panthi — academic website and teaching notes

This ZIP is ready for GitHub Pages. Upload all files from the ZIP to the **root** of one GitHub repository, preserving their filenames.

- `index.html` — academic profile homepage
- `notes.html` — subject directory for original notes
- `external-materials.html` — external course link directory (files remain on the publisher’s site)
- `python.html` — Python Programming notes
- `operating-systems.html` — Operating Systems notes
- `software-engineering.html` — Software Engineering notes
- `style.css` and `script.js` — styling and interactions shared by all pages
- `profile-portrait.png` — homepage portrait

## Publish on GitHub Pages

1. Create a GitHub repository and upload the site files listed above to its root.
2. Open the repository's **Settings → Pages**.
3. Select **Deploy from a branch**, your default branch, and **/(root)**; save.
4. Follow the published URL shown in Pages settings when deployment finishes.

The notes are concise original summaries and are **publicly readable and copyable** when published. The external resources linked on the notes pages remain on their publishers' websites. Do not put private or restricted books in the repository.

## Help Google discover the site

1. Confirm the exact public GitHub Pages URL in **Settings → Pages**. The repository URL is different from the Pages website URL.
2. Add the exact Pages URL as a URL-prefix property in [Google Search Console](https://search.google.com/search-console/about) and verify ownership.
3. Inspect the homepage URL and request indexing. Check `notes.html` as well.
4. Link to the live Pages URL from your GitHub profile and academic profiles.
5. Check `site:YOUR-EXACT-PAGES-URL` after Google has crawled it. Search position is not guaranteed.

Once the permanent Pages URL is known, canonical tags and a sitemap can use that exact address.
