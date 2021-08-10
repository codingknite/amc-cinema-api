import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const meta = {
      title: 'Joel P. Mugalu',
      description: 'Developer, Writer, Open Sourcerer',
      twitterDescription: 'Developer, Writer, Open Source',
      image: '/public/images/media-preview.png'
    }

    return (
      <Html lang="en">
        <Head>
          <meta title={meta.title} />
          <meta name="keywords" content="joel mugalu, joel p mugalu, joel p. mugalu, codingknite, coding knite" />
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@codingknite" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.twitterDescription} />
          <meta name="twitter:image" content={meta.image} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async defer src="https://beampipe.io/js/tracker.js" data-beampipe-domain="codingknite.com"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
