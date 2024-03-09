import { Hero } from '@/components/Hero'
import { Roadmap } from '@/components/Roadmap'
import { HowToGet } from '@/components/HowToGet'
import { Tokenomics } from '@/components/Tokenomics'

export default function Home() {
  return (
    <>
      <Hero />
      <HowToGet />
      <Tokenomics />
      <Roadmap />
    </>
  )
}
