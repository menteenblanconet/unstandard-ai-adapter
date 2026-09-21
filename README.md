# UN-STANDARD AI Project Adapter

Bilingual prototype (English/Spanish) for adapting Graphic Design assignments using UDL/DUA, SEL/ASE, Student-Centered Learning/ACE, Accessibility, and Design Thinking.

## What you need

1. OpenAI API account with API billing enabled.
2. OpenAI API key.
3. Netlify account.
4. GitHub account/repository (recommended).
5. Squarespace site.

IMPORTANT: Never paste your OpenAI API key into `index.html`, `app.js`, or Squarespace.

## Deploy with GitHub + Netlify

1. Create a new GitHub repository.
2. Upload all files in this folder, preserving the folder structure.
3. In Netlify choose **Add new project / Import an existing project**.
4. Connect GitHub and select the repository.
5. Build command: leave blank.
6. Publish directory: `.`
7. Deploy.

Netlify reads `netlify.toml` and deploys the Function in `netlify/functions/adapt-project.mjs`.

## Add the OpenAI API key

In Netlify:
1. Open **Project configuration**.
2. Open **Environment variables**.
3. Add:
   - Key: `OPENAI_API_KEY`
   - Value: your OpenAI API key
4. Make sure the variable is available to Functions.
5. Redeploy.

Optional:
- Add `OPENAI_MODEL` to choose another compatible OpenAI model.
- If omitted, the prototype uses `gpt-5.6-terra`.

## Test before embedding

Open your Netlify URL and test the adapter.

Example:
- Title: Restaurant Branding Project
- Course: Branding / Identity Design
- Description: Students research a restaurant audience and competitors, develop three identity concepts, refine one logo direction, create a color and typography system, design a menu, and present the final identity.

## Embed in Squarespace

After Netlify gives you a URL such as:

`https://your-unstandard-tool.netlify.app`

Add a **Code** block in Squarespace and paste:

```html
<div style="width:100%; min-height:1200px;">
  <iframe
    src="https://your-unstandard-tool.netlify.app"
    title="UN-STANDARD Project Adapter"
    style="width:100%; min-height:1200px; border:0; border-radius:18px;"
    loading="lazy"
    allow="clipboard-write"
  ></iframe>
</div>
```

Replace the example URL with your real Netlify URL.

## Before making it public

This prototype makes paid API requests from your Netlify Function. Before promoting it publicly:
- Set OpenAI project budget/usage controls.
- Monitor API usage.
- Consider adding authentication, CAPTCHA, or rate limiting.
- Do not collect student names, diagnoses, grades, or personally identifiable student information unless you have an approved reason and appropriate data handling.

## Design colors

Edit these variables in `styles.css`:
- Teal: `#51D2CD`
- Yellow: `#F1C451`
- Blue: `#5D9FD1`
- Plum text: `#350E39`
- Pink background: `#F4D4E5`

## Pedagogical logic

The core logic lives in:
`netlify/functions/adapt-project.mjs`

Edit `SYSTEM_INSTRUCTIONS` to refine how UN-STANDARD applies UDL, SEL, ACE, accessibility, Design Thinking, academic rigor, and flexibility.

## Current prototype limitations

- Text input only. PDF/DOCX upload can be added next.
- TXT download is included; browser Print can save the formatted result as PDF.
- No user accounts/history yet.
- No public-site abuse protection yet.
