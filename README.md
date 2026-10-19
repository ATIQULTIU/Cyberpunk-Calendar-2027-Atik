# ⚡ Cyberpunk Calendar 2027 — Atik

A responsive, neon cyberpunk annual calendar and developer profile page for **MD. Atiqul Islam (Atik)**. Built with vanilla HTML, CSS and JavaScript; no build tools or dependencies are required.

## Features

- All 12 months of 2027 generated from JavaScript date arithmetic.
- Monday-first week layout, with Sundays highlighted in neon pink.
- Responsive layout for desktop, tablet and mobile.
- Live digital clock, profile links, neon UI and print / Save as PDF support.
- Includes Atik’s supplied portrait at `assets/images/profile.png`.
- Select a different profile photo in the browser to preview it during the current session.
- Print stylesheet for a compact calendar printout.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. For local development, you can optionally run a simple server from this folder:

   ```bash
   python -m http.server 8000
   ```

   Then visit `http://localhost:8000`.

## Change the profile portrait

The supplied portrait is included at `assets/images/profile.png` and is used by default. To change it permanently, replace that file with another PNG image while keeping the same filename. The “Use your original photo” control previews a selected image in the current browser session; it does not upload the photo to a server or save it automatically.

## Personal details

- **Name:** MD. Atiqul Islam (Atik)
- **Role:** Software Engineer | Front-End Developer | Creative Technologist
- **Email:** [atik.cmttiu1001@gmail.com](mailto:atik.cmttiu1001@gmail.com)
- **GitHub:** https://github.com/ATIQULTIU
- **Portfolio:** https://md-atiqul-islam.my.canva.site/

## Calendar accuracy

The calendar is generated from UTC date objects to avoid daylight-saving/time-zone shifts. Weekday headings are Monday-first. The calendar includes every date from January 1 through December 31, 2027. Sundays are highlighted; Bangladesh public holidays are not hard-coded because official dates can change and lunar-calendar holidays may be announced later.

## Files

```text
cyberpunk-calendar-2027/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── app.js
└── assets/
    └── images/
        ├── avatar-placeholder.svg
        ├── profile.png
        └── poster-concept.png
```

## License

Personal portfolio project. Update this section if you choose a specific open-source license before publishing.
