import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dhikr.life - Adhkar</title>
        <meta
          name="Description"
          content="Dhikr.life, Adhkar morning and evening, Dhikr, Supplications in islam, Sunnah adhkar, Adhkar Salafi"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <meta charSet="UTF-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="application-name" content="Dhikr life" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dhikr life" />
        <meta name="description" content="Adhkar morning and evening" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="msapplication-TileColor" content="#f5f5f5" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#f5f5f5" />

        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/images/icons/icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href="/images/icons/icon-72x72.png"
        />
        <link rel="manifest" href="/manifest.json" />

        <link
          rel="shortcut icon"
          href="/images/icons/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="/images/icons/favicon.ico" type="image/x-icon" />
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
