import Hero from '../components/Hero'
import Features from '../components/Features'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-green-900 scroll-smooth">
      <Hero />
      <Features />
      <Contact />
    </main>
  )
}

