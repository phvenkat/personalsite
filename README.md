# phanindragvenkata.com

Personal site for Phanindra Venkata Gottipati - CEO, VirtuNx.

**Astro + Tailwind CSS**, deployed as static HTML to GitHub Pages. Pages ship with
zero client JavaScript apart from a few small inline scripts (theme toggle, scroll
reveals, mobile menu).

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output -> dist/
npm run preview    # serve the built dist/
npm run check      # astro check (types) - this is the CI gate
```

## Writing a blog post

Posts are Markdown files in `src/content/blog/`. To publish one:

1. Create `src/content/blog/my-post-slug.md`. The filename becomes the URL:
   `/writing/my-post-slug`.
2. Add frontmatter at the top:

   ```markdown
   ---
   title: "Your title"
   description: "One or two sentences. Used for SEO and the share card."
   pubDate: 2026-08-20
   category: "Enterprise AI"
   draft: false
   ---

   Write the post in Markdown here.
   ```

3. Commit and push to `main`. It auto-builds and deploys with its own page, SEO
   tags, `BlogPosting` structured data, and an entry in the sitemap and RSS feed.

Set `draft: true` to keep a post off the live site while you work on it. You can do
all of this from GitHub's web editor - no local setup needed. `sample-post.md` is a
template; delete it once you have a real post.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml` (check -> build -> publish
`dist/` to GitHub Pages). Pull requests run the same checks without deploying.

The custom domain is set by `public/CNAME`; the deploy asserts it survives the build.
The sitemap is generated automatically at `/sitemap-index.xml` (referenced from
`public/robots.txt`).

## Assets

Files in `public/` are served from the site root. `og-image.png` is the 1200x630
link-preview card referenced by the Open Graph and Twitter tags; regenerate it if the
headline copy changes.
