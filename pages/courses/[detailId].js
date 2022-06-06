import React from 'react'
import { useRouter } from 'next/router'

export default function detail() {

  const router = useRouter()
  console.log(router.query);

  return (
    <div>test route</div>
  )
}
