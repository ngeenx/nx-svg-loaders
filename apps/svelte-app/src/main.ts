import App from "./App.svelte";

const target = document.getElementById("app");

let app;

if (target) {
  app = new App({
    target: target,
  });
} else {
  console.error("The target element '#app' was not found in the document.");
}

export default app;
