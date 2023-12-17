import { lazy } from "react";

const Header = lazy(() => import("./components/Header"));
const About = lazy(() => import("./components/About"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Blog = lazy(() => import("./components/Blog"));
const Contact = lazy(() => import("./components/Contact"));
const Cursor = lazy(() => import("./components/Cursor"));

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.ts")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}

function App() {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
      <Cursor />
    </>
  );
}

export default App;
