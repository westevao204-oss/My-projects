# Node.js & Backend Architecture — Lesson Reference

These files document all 6 Node.js lessons built into **Foundry** (`index.html`).
The lessons live in the `NODE_LESSONS` array and are loaded under **Level 6**.

---

## Lesson Map

| # | ID | Title |
|---|----|-------|
| 1 | `node-intro-runtime` | What is Node.js? Runtime Architecture & V8 Engine |
| 2 | `node-modules-npm` | Node Modules, require() & the npm Ecosystem |
| 3 | `node-event-loop-async` | The Event Loop, Callbacks & Async/Await |
| 4 | `node-http-server` | Building an HTTP Web Server from Scratch |
| 5 | `node-express-rest-api` | REST APIs with Express: Routing & Middleware |
| 6 | `node-crud-json-storage` | CRUD Operations & JSON File Storage |

---

## Sandbox Runtime

Each lesson uses `mode: "node"` in its playground config.
The in-browser Node.js sandbox emulates:

- `require('http')` — Native HTTP server with request routing
- `require('express')` — Express app with `.get()`, `.post()`, `.put()`, `.delete()`, `.listen()`
- `require('fs')` — Virtual file system (readFile, writeFile, readFileSync, writeFileSync)
- `require('os')` — System info (platform, arch, cpus, totalmem, freemem)
- `require('path')` — path.join / path.resolve
- `process` — version, platform, env, uptime(), memoryUsage()
- `console.log / .info / .warn / .error` — Styled terminal output
- `module.exports` / `exports`

Express routes are rendered as **clickable test buttons** — students can fire real mock HTTP requests and see live JSON responses.

---

## How to Edit Lessons

Open `index.html` and find:

```js
const NODE_LESSONS = [
  L("node-intro-runtime", "What is Node.js?...", { ... }),
  ...
];
```

Each lesson follows the standard `L()` format with these fields:
`goal`, `simple`, `analogy`, `syntaxLabel`, `syntax`, `example`, `exampleNote`,
`lines`, `tryIt`, `mistakes`, `quiz`, `challenge`, `next`, `playground`
