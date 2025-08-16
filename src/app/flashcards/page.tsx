import Link from "next/link";

export const metadata = {
  title: "Flashcards | Antidote Design",
  description: "Flashcards page",
};

export default function FlashcardsPage() {
  return (
    <main id="content" style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1rem" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <h1 style={{ margin: 0 }}>Flashcards</h1>
        <Link href="/" className="btn">← Back</Link>
      </header>

      <section style={{ opacity: .85 }}>
        <p>Flashcards feature placeholder. Add your cards here.</p>
      </section>
    </main>
  );
}


