import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const router = useRouter()
  useEffect(()=> {
    setTimeout(() => {
      router.push('/cart')
    }, 5000)
  },[router])
  return (
    <div className={styles.container}>
      <h2>This homepage is empty. You will be redirected to cart page in 5s.</h2>
    </div>
  )
}
