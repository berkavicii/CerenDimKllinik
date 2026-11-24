import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-28 sm:py-36">
      <Container className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-5xl text-forest sm:text-6xl">Aradığınız sayfa bulunamadı.</h1>
        <p className="mx-auto mt-5 max-w-md text-ink-soft">Sayfa taşınmış ya da kaldırılmış olabilir.</p>
        <Button href="/" className="mt-9">
          Ana sayfaya dön
        </Button>
      </Container>
    </section>
  );
}
