// import Image from "next/image";
// import Header from "./navbar";

import Nav from "./nav";

export default function Home() {
  return (
    <>
    <a className="skip-link" href="#content">Skip to content</a>

<Nav />


<main id="content">
  <section className="hero">
    <h1>Randy Collier - </h1>
    <p className="muted">Resize the window to see the menu collapse into a hamburger. This example is <strong>HTML + CSS only</strong> using the checkbox technique—no JavaScript required.</p>
  </section>

  <section className="card-grid">
    <article className="card"><h2 id="work">Work</h2><p>Project highlights, case studies, and interactive UI work.</p></article>
    <article className="card"><h2 id="services">Services</h2><p>Design systems, performance tuning, accessibility, and React consulting.</p></article>
    <article className="card"><h2 id="about">About</h2><p>Antidote Design blends mod aesthetics with robust engineering.</p></article>
    <article className="card"><h2 id="blog">Blog</h2><p>Notes on front-end architecture, TypeScript, and CSS tricks.</p></article>
  </section>
</main>
</>
  );
}


