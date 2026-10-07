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

The exact Pages URL is `https://vikaspanthi.github.io/vikasProfile/`. Canonical links and `sitemap.xml` now use this address. In Search Console, submit `https://vikaspanthi.github.io/vikasProfile/sitemap.xml` under **Sitemaps** and inspect `https://vikaspanthi.github.io/vikasProfile/` under **URL Inspection**. A sitemap helps discovery but does not guarantee indexing or a higher position.


## Applications dropdown (October 2026)

Every profile and notes page now has an Applications dropdown. The included
Relative Grade Analytics application is in `apps/relative-grade-analytics/`.
Its original analysis code and documentation are preserved; a Website return
link has been added. Excel parsing and charts use external CDN libraries, so
an internet connection is required. Consult its README for expected input data.

### Add another HTML application

1. Create a folder such as `apps/my-new-tool/`.
2. Put the application HTML there as `index.html`, together with its CSS,
   JavaScript, images, and other required files. Use relative asset paths.
3. Edit `applications-config.js` and add another object to the array, separated
   from the previous object by a comma:
   `{ title: "My New Tool", path: "apps/my-new-tool/index.html" }`
4. Upload the folder and updated config to your GitHub repository. All six
   website menus automatically use this list; no navigation HTML edits needed.
5. Open the deployed site and test the new link. Refresh if an old menu is cached.

GitHub Pages supports browser HTML/CSS/JavaScript applications. Applications
requiring a Python/Node server or private credentials need a separate backend.
Never put passwords or secret API keys in public website files.

### Upload this update

Extract the ZIP and upload the contents of `vikasProfile-main/` to the repository
root (do not upload only the ZIP or an extra enclosing folder). Keep GitHub Pages
set to the existing main branch and root folder. This package does not deploy
automatically. The nested `vikas-panthi-profile-website.zip` is an optional copy
of the same website and is not needed for hosting.
