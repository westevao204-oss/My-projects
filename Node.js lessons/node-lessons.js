/**
 * ============================================================
 *  FOUNDRY — Node.js Lesson Outlines (Reference Copy)
 *  Source of truth: index.html > const NODE_LESSONS
 * ============================================================
 *
 *  Level 6 · Node.js & Backend Architecture
 *  Icon: 🟢  Color: #10B981  Status: available
 *  Sandbox mode: "node" (in-browser emulated runtime)
 * ============================================================
 */

const NODE_LESSONS = [

  // ─── LESSON 1 ─────────────────────────────────────────────
  {
    id: "node-intro-runtime",
    title: "What is Node.js? Runtime Architecture & V8 Engine",
    goal: "Understand what Node.js is, how it runs JavaScript outside the browser using the V8 engine, and why it was a paradigm shift for backend development.",
    simple: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It lets you run JavaScript on a server — outside a browser — so you can build backend APIs, CLI tools, and real-time apps using the same language you use on the front end.",
    analogy: "A browser is like a TV set that can only play shows from its own built-in player. Node.js is like taking the TV's internal playback engine and plugging it into a massive server rack — now it can stream movies to millions of people simultaneously instead of just displaying them on one screen.",
    syntax: `// Check your Node.js environment
console.log('Runtime:', process.version);        // Node.js version
console.log('OS Platform:', process.platform);   // win32 / linux / darwin
console.log('Architecture:', process.arch);      // x64 / arm64
console.log('Working Dir:', process.cwd());      // Current directory`,
    quiz: [
      { q: "What JavaScript engine powers Node.js?", opts: ["SpiderMonkey", "JavaScriptCore", "V8", "Chakra"], a: 2 },
      { q: "What does Node.js allow JavaScript to do that browsers cannot?", opts: ["Animate HTML", "Run on a server without a browser", "Change CSS styles", "Handle user clicks"], a: 1 },
      { q: "Which global object gives you Node.js runtime info like version and platform?", opts: ["window", "document", "process", "global"], a: 2 }
    ]
  },

  // ─── LESSON 2 ─────────────────────────────────────────────
  {
    id: "node-modules-npm",
    title: "Node Modules, require() & the npm Ecosystem",
    goal: "Master how Node.js organizes code into modules using require(), how to use built-in core modules, and how to manage third-party packages with npm.",
    simple: "Node.js uses a module system where every file is its own self-contained module. You use require() to import built-in modules (like 'fs' or 'path'), your own files, or packages installed from npm — the world's largest library of reusable JavaScript packages.",
    analogy: "Think of npm like a global warehouse (Amazon for code). Each package is a pre-built component. require() is your delivery truck that fetches exactly what you ordered and brings it into your workshop. You never build from scratch what someone has already perfected.",
    syntax: `// Built-in core module
const path = require('path');
const os   = require('os');

// Your own module (./utils.js)
const utils = require('./utils');

// npm package (after: npm install express)
const express = require('express');`,
    quiz: [
      { q: "What keyword is used to import modules in CommonJS Node.js?", opts: ["import", "include", "require", "fetch"], a: 2 },
      { q: "What command installs a package from the npm registry?", opts: ["node install", "npm get", "npm install", "node add"], a: 2 },
      { q: "Where does npm save your project's dependency list?", opts: ["index.js", "server.js", "package.json", ".npmrc"], a: 2 }
    ]
  },

  // ─── LESSON 3 ─────────────────────────────────────────────
  {
    id: "node-event-loop-async",
    title: "The Event Loop, Callbacks & Async/Await",
    goal: "Deeply understand how Node.js executes asynchronous code using the Event Loop, callback queue, and how async/await makes async code readable.",
    simple: "Node.js is single-threaded but non-blocking. It uses an Event Loop to handle thousands of concurrent operations (file reads, network calls) without freezing. Async/await is the modern, readable syntax for working with Promises instead of nested callbacks.",
    analogy: "The Event Loop is like a restaurant manager. You (the main thread) take orders (run synchronous code). When a meal needs to cook (async I/O), the chef starts it in the background. The manager (Event Loop) watches for finished meals and calls the waiter (callback) to serve them — you're never just standing and waiting.",
    quiz: [
      { q: "Node.js is __________ but non-blocking.", opts: ["multi-threaded", "single-threaded", "stateless", "synchronous"], a: 1 },
      { q: "What C library powers Node's event loop, thread pool, and asynchronous I/O?", opts: ["glibc", "libuv", "V8-lib", "nginx-core"], a: 1 },
      { q: "In what order does Node run: (A) Synchronous code, (B) setTimeout(..., 0)?", opts: ["B then A", "A then B", "Simultaneously", "Randomly"], a: 1 }
    ]
  },

  // ─── LESSON 4 ─────────────────────────────────────────────
  {
    id: "node-http-server",
    title: "Building an HTTP Web Server from Scratch",
    goal: "Build and run a native HTTP web server using Node's built-in 'http' module without any external dependencies.",
    simple: "Node.js has a built-in 'http' module. With just a few lines you can bind to a port, listen for incoming requests, and return HTTP status codes, headers, and responses.",
    analogy: "An HTTP server is like the front desk receptionist at headquarters. They sit at a designated entrance (port 3000). When a visitor arrives (incoming request), the receptionist inspects their request type (GET/POST), retrieves the package, stamps it with a 200 OK seal, and hands it over.",
    syntax: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'online' }));
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`,
    quiz: [
      { q: "What two objects are passed into http.createServer() callback?", opts: ["input, output", "req, res", "client, host", "socket, buffer"], a: 1 },
      { q: "Which HTTP status code indicates success?", opts: ["404", "500", "200", "301"], a: 2 },
      { q: "What method must always be called to finalize an HTTP response?", opts: ["res.close()", "res.finish()", "res.end()", "res.send()"], a: 2 }
    ]
  },

  // ─── LESSON 5 ─────────────────────────────────────────────
  {
    id: "node-express-rest-api",
    title: "REST APIs with Express: Routing & Middleware",
    goal: "Learn how production teams build scalable REST APIs using Express, routing parameters, and the middleware pattern.",
    simple: "Express is the most popular minimalist web framework for Node.js. It simplifies HTTP routing (app.get, app.post), automatic JSON parsing, and modular middleware functions that process requests in an orderly pipeline.",
    analogy: "An Express API is like an airport security pipeline. The passenger (request) passes through metal detectors (middleware: token verification, JSON parsing). If their boarding pass is valid, next() is called, and they proceed to their departure gate (route handler: GET /flight/104).",
    syntax: `const express = require('express');
const app = express();

app.use(express.json()); // middleware

app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, name: 'Senior Developer' });
});

app.listen(3000);`,
    quiz: [
      { q: "Which middleware enables Express to parse incoming JSON payloads?", opts: ["app.use(express.text())", "app.use(express.json())", "app.use(json.parse())", "app.use(body.json())"], a: 1 },
      { q: "How do you access a URL parameter ':id' in an Express route?", opts: ["req.query.id", "req.body.id", "req.params.id", "req.url.id"], a: 2 },
      { q: "What does calling next() inside middleware do?", opts: ["Ends the request", "Sends a 200 response", "Passes control to the next middleware/route", "Restarts the server"], a: 2 }
    ]
  },

  // ─── LESSON 6 ─────────────────────────────────────────────
  {
    id: "node-crud-json-storage",
    title: "CRUD Operations & JSON File Storage",
    goal: "Implement full Create, Read, Update, Delete operations in an Express REST API that persists data to a JSON file using Node's fs module.",
    simple: "CRUD (Create, Read, Update, Delete) maps to HTTP methods: POST creates data, GET reads it, PUT updates it, and DELETE removes it. Node's fs module lets you read and write JSON files as a simple persistent data store.",
    analogy: "JSON file storage is like a filing cabinet. POST puts a new folder in (Create). GET retrieves a folder (Read). PUT replaces a folder's contents (Update). DELETE removes the folder entirely. The fs module is your filing assistant who opens and closes the cabinet.",
    syntax: `// Read existing data
const data = JSON.parse(fs.readFileSync('db.json', 'utf8'));

// Create — POST /api/items
app.post('/api/items', (req, res) => {
  const newItem = { id: Date.now(), ...req.body };
  data.push(newItem);
  fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
  res.status(201).json(newItem);
});`,
    quiz: [
      { q: "Which HTTP method is used to CREATE a new resource?", opts: ["GET", "PUT", "POST", "DELETE"], a: 2 },
      { q: "Which HTTP method is used to fully UPDATE an existing resource?", opts: ["GET", "PUT", "POST", "PATCH"], a: 1 },
      { q: "What HTTP status code means 'resource successfully created'?", opts: ["200", "201", "204", "400"], a: 1 }
    ]
  }

];

module.exports = NODE_LESSONS;
