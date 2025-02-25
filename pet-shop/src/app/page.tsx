import { Feedback } from "./_components/Feedback";
import { Hero } from "./_components/Hero";
import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Services } from "./_components/services";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Feedback />
      <Footer />
    </main>
  )
}