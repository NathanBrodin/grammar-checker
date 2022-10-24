import Layout from "../components/Layout";
import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grammar Checker</title>
        <meta name="description" content="Nathan Brodin's Grammar checker" />
        <meta name="keywords" content="grammar checker" />
        <meta name="author" content="Nathan Brodin" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      </Head>

      <Layout>
          <Main />
      </Layout>
    </div>
  )
}
