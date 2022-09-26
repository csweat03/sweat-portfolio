import Head from 'next/head'
import IntroText from './component/IntroText'
import LargeButton from './component/LargeButton'

const styles = {
  container: {
    "padding": "0 2rem"
  },
  main: {
    "min-height": "100vh",
    "padding": "4rem 0",
    "flex": "1",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center"
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christian Sweat</title>
        <meta name="description" content="Written for your viewing pleasure." />
        <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>

      <main className={styles.main}>
        <IntroText />
        <LargeButton x="100" y="200" scale="3" text="Text" link="https://www.google.com" />
      </main>
    </div>
  )
}
