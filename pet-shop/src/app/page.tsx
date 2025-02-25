import { Hero } from "./_components/Hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  )
}