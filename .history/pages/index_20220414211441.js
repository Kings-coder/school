import Head from 'next/head'
 MainBody from '../components/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Disney +</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <MainBody />
{/* <div className='relative min-h-[cal(100vh-72px]'>
</div> */}
    </div>
  )
}
