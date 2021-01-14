import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Uthmanic/KFGQPC.otf"
            as="font"
          />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Mirza&family=Scheherazade&display=swap" rel="stylesheet" />
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
