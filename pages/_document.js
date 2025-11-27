// pages/_document.js

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Shaswata Saha — Full Stack Engineer, Cybersecurity & Open Source"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Inter+Tight:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-glam">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
