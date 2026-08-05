# CLOSED SPACE — deployment notes

Static HTML/CSS/vanilla-JS site, no build tooling, no framework.

## Deployment — no CI/CD to production

`git push` does **not** update the live site. Two separate targets:

- **Vercel** (`project1-barbershop.vercel.app`) — auto-deploys from GitHub pushes. Useful as a quick preview, but not what real customers see.
- **hostiq cPanel** (`public_html`) — the actual production site at `closed-space.com.ua`. Updated **manually**: zip the deployable subset, user uploads the zip via cPanel File Manager into `public_html`, then extracts it there.

Deployable subset (root-level files + `assets/`): `index.html`, `robots.txt`, `sitemap.xml`, `llms.txt`, `favicon.ico`, `assets/`, plus any site-ownership/verification files (see below). Excludes `.git`, `.agents`, `data`, `README.md`, `CLAUDE.md`.

## Adding a new root-level file (SEO/verification/etc.)

Search Console, Bing Webmaster Tools, and similar services sometimes hand over a one-off file (e.g. `google<token>.html`) that must sit at the site root for ownership verification. When this happens:

1. Drop the file in the repo root next to `index.html`, commit it.
2. Rebuild the deploy zip including it alongside the other deployable files above.
3. Upload the zip via cPanel File Manager into `public_html` and extract it there (this merges/overwrites in place — no need to move files manually afterward).
4. Verify by opening the file's live URL directly in a browser (`https://closed-space.com.ua/<file>`) **before** telling the user/boss it's done — committing to git or even uploading the zip is not enough proof; the file has to actually resolve on the live domain.

This whole pattern applies to any future root-level file, not just Google's — nothing goes live through git alone on this project.
