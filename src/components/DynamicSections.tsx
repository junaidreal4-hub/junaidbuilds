'use client'
import dynamic from 'next/dynamic'

const Approach       = dynamic(() => import('@/components/Approach'),       { ssr: false })
const PlusTransition = dynamic(() => import('@/components/PlusTransition'), { ssr: false })

export default function DynamicSections() {
  return (
    <>
      <Approach />
      <PlusTransition />
    </>
  )
}
