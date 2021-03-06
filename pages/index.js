import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <button type="button" onClick={() => localStorage.setItem('zeit-theme', 'dark')}>dark</button>
     <button type="button" onClick={() => localStorage.setItem('zeit-theme', 'light')}>light</button>
    </div>
  )
}
