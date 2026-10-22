# clarkejhomes.com

Author site for Clarke Jackson. Astro static site, deployed to GitHub Pages on every push to `main`.

## Editing

- **Name, intro, bio, photo, email, social links:** `src/site.ts`
- **Books:** one markdown file per book in `src/content/books/` (copy `first-book.md`). Covers go in `public/covers/`.
- **Images:** anything in `public/` is served from the site root (`public/clarke.jpg` → `/clarke.jpg`).

You can edit any of these directly on github.com (pencil icon) and commit; the site redeploys in about a minute.

## Local preview

```bash
npm install
npm run dev
```

## Hosting

- GitHub Pages, custom domain `clarkejhomes.com` (set by `public/CNAME`).
- DNS is in Route 53 in AWS account `841668550433`. Apex A/AAAA records point at GitHub Pages; `www` is a CNAME to `harrisonjackson.github.io`. The MX/TXT records are Google Workspace email — leave them alone.
- `clarkej.com` redirects here via the `HarrisonJackson/clarkej.com` repo.

## Email list

The signup form posts to a Zapier webhook (`newsletter.webhook` in `src/site.ts`).
The Zap "clarkejhomes.com email signups → Google Sheet" adds each signup as a row
(Email, Signed up, Page) to the "Clarke J Home Email List" sheet owned by harrison@untapp.com.
Clear `webhook` to hide the form.
