'use client'
import Shark from '@/components/Sharks/Shark.jsx'
import { SharksData } from '@/components/Sharks/SharksData.jsx'

export default function Page({ params }) {
  return (
    <section>
      <Shark type={params.id} />
    </section>
  )
}
