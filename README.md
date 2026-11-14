# Knowledge Base

My personal Zettelkasten, live at https://0x-avi.github.io/knowledge-base/.

Notes are atomic, tagged, optionally tied to a source, and linked to each other (backlinks show up automatically).

## Add a note

Append to `NOTES` in [`data.js`](data.js):

```js
{ title: "Short claim as the title", tags: ["AI"], source: "hfaudio", content:
`• First point
• Second point`,
  links: ["Title of a related note"] },
```

- New tag → add it to `TAGS`.
- New source → add it to `SOURCES` with `name`, `url`, `type`.

Commit and push; GitHub Pages redeploys automatically.

## Glossary

A second page at https://0x-avi.github.io/knowledge-base/glossary.html. Add a term by appending to `TERMS` in [`terms.js`](terms.js).
