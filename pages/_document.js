import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    const GA_MEASUREMENT_ID = "G-GSEGKZ4FYK";
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          <link
            href="/fonts/Uthmanic/KFGQPC.otf"
            as="font"
            type="font/otf"
            crossOrigin="true"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Mirza&family=Scheherazade&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-libre">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
