import React from 'react'
import { useRouter } from 'next/router'

export default function Detail() {

  const router = useRouter()
  console.log(router.query);

  return (
    <div>test route</div>
  )
}
