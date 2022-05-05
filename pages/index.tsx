import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import ImageNext from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import { Farm } from '../components/farm'

const Index: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Evermoon</title>
        <meta name="description" content="Evermoon's NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="relative bg">
          <Header />
          <Farm />
          <div className="h-16" />
        </div>
      </main>

      <Footer />
    </Layout>
  )
}

export default Index
