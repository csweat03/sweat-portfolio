import Head from 'next/head'
import IntroStart from './components/IntroStart'

const styles = {
  container: {
    "padding": "0"
  },
  main: {
    "min-height": "100vh",
    "padding": "0",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>

      <main className={styles.main}>
        <IntroStart />
      </main>
    </div>
  )
}
