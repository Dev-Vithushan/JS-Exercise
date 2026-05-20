// ============================================================
// JS Intermediate Questions - Full Stack Web Engineer Focus
// ============================================================

// -----------------------------------------------------------
// QUESTION 1: Closures & Encapsulation
// -----------------------------------------------------------
// A full stack app needs a request counter per API route.
// Use a closure to create a counter factory that tracks
// how many times each route has been called.

function createRouteCounter(routeName) {
    // TODO: Use closure to maintain a private count
  // Return an object with increment() and getCount() methods
}

const userRouteCounter = createRouteCounter("/api/users");
userRouteCounter.increment();
userRouteCounter.increment();
console.log(userRouteCounter.getCount()); // Expected: 2

const postRouteCounter = createRouteCounter("/api/posts");
postRouteCounter.increment();
console.log(postRouteCounter.getCount()); // Expected: 1

// -----------------------------------------------------------
// QUESTION 2: Promises & Async/Await
// -----------------------------------------------------------
// Simulate fetching user data and their posts from a backend.
// fetchUser returns a Promise that resolves with a user object.
// fetchPostsByUser returns a Promise that resolves with posts array.
// Chain them using async/await and handle errors gracefully.

function fetchUser(userId) {
    return new Promise((resolve, reject) => {
          setTimeout(() => {
                  if (userId === 1) {
                            resolve({ id: 1, name: "Alice", role: "admin" });
                  } else {
                            reject(new Error("User not found"));
                  }
          }, 500);
    });
}

function fetchPostsByUser(userId) {
    return new Promise((resolve) => {
          setTimeout(() => {
                  resolve([
                    { id: 101, title: "Intro to Node.js", userId },
                    { id: 102, title: "REST API Design", userId },
                          ]);
          }, 300);
    });
}

// TODO: Write an async function getUserWithPosts(userId)
// that fetches the user and their posts, returns combined object,
// and catches errors by returning { error: error.message }

async function getUserWithPosts(userId) {
    // Your implementation here
}

getUserWithPosts(1).then(console.log);
// Expected: { user: { id: 1, name: "Alice", role: "admin" }, posts: [...] }
getUserWithPosts(99).then(console.log);
// Expected: { error: "User not found" }

// -----------------------------------------------------------
// QUESTION 3: Array Methods & Data Transformation
// -----------------------------------------------------------
// You receive a raw response from a REST API with user records.
// Transform the data to return only active admin users,
// with their name in uppercase and a formatted joinedDate.

const apiResponse = [
  { id: 1, name: "alice",  role: "admin",  active: true,  joinedDate: "2022-03-15" },
  { id: 2, name: "bob",    role: "viewer", active: true,  joinedDate: "2021-07-22" },
  { id: 3, name: "carol",  role: "admin",  active: false, joinedDate: "2023-01-10" },
  { id: 4, name: "dave",   role: "admin",  active: true,  joinedDate: "2020-11-05" },
  { id: 5, name: "eve",    role: "editor", active: true,  joinedDate: "2024-06-30" },
  ];

// TODO: Using filter(), map() and other array methods,
// produce an array of active admins like:
// [{ id, name: "ALICE", role, joinedYear: 2022 }, ...]

const activeAdmins = apiResponse; // Replace this with your solution

console.log(activeAdmins);
// Expected: [{ id: 1, name: "ALICE", role: "admin", joinedYear: 2022 },
//            { id: 4, name: "DAVE",  role: "admin", joinedYear: 2020 }]

// -----------------------------------------------------------
// QUESTION 4: Event Loop & Asynchronous Execution Order
// -----------------------------------------------------------
// Predict and explain the output of the following code.
// This pattern is common when mixing sync, setTimeout, and Promises
// in a Node.js or browser full stack environment.

console.log("1: Server starting...");

setTimeout(() => {
    console.log("2: DB connection timeout check");
}, 0);

Promise.resolve().then(() => {
    console.log("3: Auth middleware resolved");
});

console.log("4: Routes registered");

// TODO: Write the expected output order and explain WHY
// (Hint: Understand the call stack, microtask queue, macrotask queue)

// Expected output order:
// ?
// ?
// ?
// ?

// -----------------------------------------------------------
// QUESTION 5: Prototypal Inheritance & ES6 Classes
// -----------------------------------------------------------
// Model a simple authentication system where a User class
// can be extended to an AdminUser with extra privileges.

class User {
    constructor(name, email) {
          this.name = name;
          this.email = email;
    }

  getProfile() {
        return `Name: ${this.name}, Email: ${this.email}`;
  }

  hasPermission(action) {
        const allowedActions = ["read"];
        return allowedActions.includes(action);
  }
}

// TODO: Create an AdminUser class that extends User.
// AdminUser should also allow "write" and "delete" actions.
// Override hasPermission() to check both user and admin permissions.
// Add a method deleteUser(targetUser) that logs an admin action.

class AdminUser extends User {
    // Your implementation here
}

const admin = new AdminUser("Bob", "bob@example.com");
console.log(admin.getProfile());       // Name: Bob, Email: bob@example.com
console.log(admin.hasPermission("delete")); // true
console.log(admin.hasPermission("read"));   // true

// -----------------------------------------------------------
// QUESTION 6: Debounce (Frontend Performance)
// -----------------------------------------------------------
// In a full stack app, the search bar should NOT fire an API
// call on every keystroke. Implement a debounce function that
// delays execution until the user stops typing for `delay` ms.

function debounce(fn, delay) {
    // TODO: Return a debounced version of fn
}

// Simulate a search API call
function searchAPI(query) {
    console.log(`Calling API with query: "${query}"`);
}

const debouncedSearch = debounce(searchAPI, 300);

// Simulate user typing rapidly
debouncedSearch("j");
debouncedSearch("ja");
debouncedSearch("jav");
debouncedSearch("java");
debouncedSearch("javascript");
// Expected: Only one API call after 300ms with "javascript"

// -----------------------------------------------------------
// QUESTION 7: Fetch API & Error Handling
// -----------------------------------------------------------
// Write a generic fetchData utility used in full stack frontends.
// It should: fetch from a given URL, parse JSON, handle HTTP errors
// (non-2xx status codes), and retry once on network failure.

async function fetchData(url, retries = 1) {
    // TODO: Implement fetch with:
  // 1. HTTP error detection (response.ok check)
  // 2. JSON parsing
  // 3. One retry on network/fetch failure
  // 4. Throw descriptive error if all retries fail
}

// Usage example (would run in browser or Node with fetch):
// fetchData("https://jsonplaceholder.typicode.com/posts/1")
//   .then(data => console.log(data))
//   .catch(err => console.error(err.message));

// -----------------------------------------------------------
// QUESTION 8: Destructuring & Spread in API Responses
// -----------------------------------------------------------
// You receive a response from a REST endpoint for updating a user.
// Use destructuring and spread to merge old data with partial updates.

const existingUser = {
    id: 42,
    name: "Charlie",
    email: "charlie@example.com",
    role: "editor",
    createdAt: "2021-05-10",
    preferences: { theme: "dark", notifications: true },
};

const updatePayload = {
    email: "charlie.new@example.com",
    preferences: { theme: "light" },
};

// TODO: Merge existingUser with updatePayload so that:
// - Top-level fields are replaced if provided
// - preferences object is merged (not replaced entirely)
// - id and createdAt are preserved from existingUser

const updatedUser = {}; // Replace with your solution

console.log(updatedUser);
// Expected:
// {
//   id: 42, name: "Charlie", email: "charlie.new@example.com",
//   role: "editor", createdAt: "2021-05-10",
//   preferences: { theme: "light", notifications: true }
// }

// -----------------------------------------------------------
// QUESTION 9: Currying & Reusable API Helpers
// -----------------------------------------------------------
// In a full stack codebase, you often call the same base URL
// with different endpoints and methods. Use currying to build
// a flexible API caller.

function createApiCaller(baseUrl) {
    return function (endpoint) {
          return function (method) {
                  return async function (body = null) {
                            // TODO: Use the Fetch API to make the request
                            // with the given method, and body (if provided as JSON)
                            // Return parsed JSON response or throw on error
                  };
          };
    };
}

// Usage:
const api = createApiCaller("https://jsonplaceholder.typicode.com");
const createPost = api("/posts")("POST");
// createPost({ title: "Hello", body: "World", userId: 1 }).then(console.log);

// -----------------------------------------------------------
// QUESTION 10: LocalStorage & State Persistence (Frontend)
// -----------------------------------------------------------
// Build a simple sessionManager using localStorage to store
// and retrieve a JWT token in a single-page application.
// Handle cases where localStorage is unavailable (e.g., SSR).

const sessionManager = {
    setToken(token) {
          // TODO: Safely store token in localStorage
      // Key: "auth_token"
    },

    getToken() {
          // TODO: Retrieve token; return null if not found or unavailable
    },

    clearToken() {
          // TODO: Remove token from localStorage
    },

    isLoggedIn() {
          // TODO: Return true if a token exists and is non-empty
    },
};

// Example usage:
sessionManager.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...");
console.log(sessionManager.isLoggedIn()); // true
console.log(sessionManager.getToken());   // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
sessionManager.clearToken();
console.log(sessionManager.isLoggedIn()); // false
