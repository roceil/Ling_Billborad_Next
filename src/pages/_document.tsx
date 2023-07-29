import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1.0,user-scalable=no,minimum-scale=1,maximum-scale=1'
      />
      <link
        rel='preconnect'
        href='https://fonts.googleapis.com'
      />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Handjet&family=Noto+Sans+TC:wght@400;700&display=swap'
        rel='stylesheet'
      ></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
