# AliLauncher Website

Official website source for AliLauncher, created by AliHashemYT.

Minecraft Java on unusual hardware. This is a lightweight, static GitHub Pages site for AliLauncher, created by AliHashemYT. It does not bundle Minecraft game files, launcher packages, or proprietary assets. The site is a static GitHub Pages project site.

## Local preview

From this folder, run a static server such as:

```powershell
py -m http.server 8000
```

Then open <http://localhost:8000>. No build system or package installation is required.

## Pages

- `index.html` — project overview
- `downloads.html` — release and hardware status
- `features.html` — documented feature status
- `updates.html` — milestones and roadmap
- `privacy.html` — website and launcher privacy policy
- `terms.html` — terms and disclaimers
- `contact.html` — creator and repository links

## GitHub Pages

The public project site is deployed from the `main` branch root at <https://alihashemyt.github.io/AliLauncher-Website/>. GitHub Pages serves this static site over HTTPS. Local links are relative so they work beneath the repository path.

### Updating the site

1. Clone `https://github.com/AliHashemYT/AliLauncher-Website.git`.
2. Edit the static HTML, CSS or JavaScript files while preserving the official icon and existing content.
3. Review the diff for private launcher files and secrets.
4. Commit and push to `main`; GitHub Pages publishes the updated branch contents.
5. Verify the public site and its privacy, terms and contact pages.

## Microsoft Entra branding URLs

- Homepage: <https://alihashemyt.github.io/AliLauncher-Website/>
- Privacy policy: <https://alihashemyt.github.io/AliLauncher-Website/privacy.html>
- Terms of service: <https://alihashemyt.github.io/AliLauncher-Website/terms.html>
## Official branding asset

`assets/alilauncher-icon.png` is copied from the exact original icon supplied by AliHashemYT. It is used in the top navigation, footer, homepage hero, PNG favicon, and homepage social-sharing preview. No vector recreation or AI-generated branding artwork is used. The source icon remains unchanged.

## Privacy implementation note

The site uses system font stacks and does not request fonts from an external font service. It does not include analytics or advertising scripts. The theme preference is saved in browser local storage.

## Attribution

Website design and original website code: AliHashemYT project site. Product branding says “Created by AliHashemYT.” This site makes no claim to ownership of Mojang/Microsoft, Sony, upstream launcher, Fabric, Modrinth, or other third-party code, names, assets or marks.
