import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/Container";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <ClientOnly>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
      </main>
    </ClientOnly>
  );
}
