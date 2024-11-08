# How to handle asynchronous operations using async/await over callback/promise TypeScript.

In the world of JavaScript and TypeScript, handing asynchronous operation is essential to build dynamic and responsive web application. Previously `callback/promise` was used to do this job. Due some drawbacks of `callback/promise` modern JavaScript as well as TypeScript introduced `async/await` which makes code readable and manageable. In this blog we will deep dive into how `async/await` works better than `callback/promise`.

### Understanding Asynchronous Operations in TypeScript

In a synchronous operation, whole code is executed line by line one after another. However, asynchronous code allows certain operations to continue running in the background, so our application remains non-blocking. As a result, server can handle another requests in parallel while processing one asynchronous operation in the background

### Callbacks and Promises: The Old Approach

Before async/await, asynchronous operations were commonly managed using callbacks and promises.
Callbacks were passed as function to another function which will execute the callback after end of an asynchronous operation. This method, however, often leads to "callback hell," where multiple nested callbacks make the code hard to read and maintain.

> using callback

```ts
function fetchData(callback: (data: string) => void) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

> using promise

```ts
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

fetchData().then((data) => {
  console.log(data);
});
```

### The `async/await` Approach in TypeScript

`async/await` is built on top of promises but allows you to write asynchronous code that looks synchronous, making it more readable and reducing the chance of mistakes. Here’s how it works:

- `async` functions: Declaring a function with `async` tells TypeScript it will return a promise.

- `await` keyword: Used inside `async` functions, `await` pauses the function execution until the promise is resolved, making the asynchronous code appear synchronous.

> Let’s rewrite the above promise example using `async/await`:

```ts
async function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

async function displayData() {
  const data = await fetchData();
  console.log(data);
}

displayData();
```

### Error Handling with `async/await`

Handling errors in `async/await` is also simpler and more powerful. We can wrap asynchronous code in `try...catch` blocks, allowing us to manage errors in the same way as synchronous code.

```ts
async function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Failed to fetch data"));
    }, 1000);
  });
}

async function displayData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

displayData();
```

### Running Asynchronous Operations in Parallel with `Promise.all`

Sometimes we may want to run multiple asynchronous operations at the same time. With Promise.all, we can run them in parallel and wait for all of them to complete before moving on. Here’s how to do it with `async/await`:

```ts
async function fetchData1(): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve("Data 1"), 1000));
}

async function fetchData2(): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve("Data 2"), 1500));
}

async function displayData() {
  const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
  console.log(data1, data2);
}

displayData();
```
### Key Advantages of async/await over Callbacks and Promises

Using `async/await` offers multiple benefits:

- **Readability**: `async/await` makes code look synchronous, which simplifies reading and understanding the code flow, especially when dealing with multiple asynchronous operations.

- **Error Handling**: With `try...catch` blocks, error handling is straightforward, eliminating the need for nested `.catch()` statements.

- **Composability**: We can use `Promise.all` with `async/await` to run asynchronous functions concurrently, enhancing performance in situations where tasks can execute simultaneously.

- **Maintainability**: Cleaner code means it’s easier to spot and fix bugs, making `async/await` preferable in long-term projects.


Using `async/await` in TypeScript brings clarity and structure to asynchronous programming, making your code more readable, manageable, and maintainable. It allows us to eliminate callback hell and complex promise `.then()` chains, making it the go-to choice for most modern TypeScript projects.

