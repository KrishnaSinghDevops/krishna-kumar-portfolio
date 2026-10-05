# Krishna Kumar — Developer Portfolio

A modern, responsive static resume/portfolio website built with:

- HTML5
- Bootstrap 5
- JavaScript
- LESS CSS
- Bootstrap Icons

## Folder structure

```text
krishna-kumar-portfolio/
├── index.html
├── styles.less
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg
    └── Krishna_Kumar_Resume.pdf
```

## Before publishing

1. Open `index.html`.
2. Search for `Replace # with the actual LinkedIn profile URL`.
3. Replace the LinkedIn `href="#"` with the real LinkedIn profile URL.
4. If you change `styles.less`, recompile it to `styles.css` for production, or keep the included Less.js fallback.

## Simplest Vercel deployment

For a zero-setup static deployment in 2026, Vercel Drop can publish a folder by drag-and-drop:
https://vercel.com/drop

For automatic redeployment after every GitHub push, connect the GitHub repository to Vercel.

## Local preview

Because this is a static site, you can simply open `index.html` in a browser.

For a better local server (optional):

```bash
python -m http.server 5500
```

Then open:

http://localhost:5500
