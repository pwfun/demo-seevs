# DevDocs Demo - Documentation as Code

Clean, minimal Docusaurus demo showing docs-as-code workflow.

## What's Different

- **Docs-only mode** - No homepage, docs ARE the site
- **No logo** - Clean header with just title
- **2 pages only** - Getting Started and API Reference
- **Brand colors** - #CC0000 (red) themee

## Running Locally

```bash
npm install
npm start
```

Opens at `http://localhost:3000` - lands directly on Getting Started page.

## File Structure

```
docs-demo/
├── docs/
│   ├── intro.md          # Getting Started (homepage)
│   └── api-reference.md  # API docs
├── src/css/
│   └── custom.css        # Brand colors
├── .github/workflows/
│   └── deploy.yml        # Auto-deployment
└── docusaurus.config.ts  # Main config
```

## Deploying to GitHub Pages

1. Create repo on GitHub
2. Update `docusaurus.config.ts`:
   - `organizationName: 'your-github-username'`
   - `projectName: 'docs-demo'`
3. Push code
4. Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)
5. Wait 2-3 minutes

Live at: `https://your-username.github.io/docs-demo/`

## Key Features

✅ Docs-only mode (no separate homepage)  
✅ No logo clutter  
✅ Clean, minimal design  
✅ Brand colors throughout  
✅ Auto-deployment configured  
✅ Edit links to GitHub

Perfect for demonstrating docs-as-code workflow!
