import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    const GTM_MEASUREMENT_ID = "GTM-KZ79B24";
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${GTM_MEASUREMENT_ID}');`,
            }}
          ></script>
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
          <noscript>
            <iframe
              src={"https://www.googletagmanager.com/ns.html?id=GTM-KZ79B240"}
              height="0"
              width="0"
              style="display:none;visibility:hidden"
          />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
