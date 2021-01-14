import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Scheherazade/Scheherazade-Regular.ttf"
            as="font"
            crossOrigin=""
          />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Mirza&display=swap" rel="stylesheet" />
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
