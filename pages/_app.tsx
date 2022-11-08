import "../styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  // if the browser is in light mode, change the favicon to the light mode favicon
  // if the browser is in dark mode, change the favicon to the dark mode favicon
  // const favicon =
  //   typeof window !== "undefined"
  //     ? (document.querySelector('link[rel="icon"]') as HTMLAnchorElement | null)
  //     : null;

  // const mediaQuery =
  //   typeof window !== "undefined"
  //     ? (window.matchMedia('(prefers-color-scheme: dark)'))
  //     : null;
  
  // mediaQuery?.addEventListener('change', themeChange)

  // function themeChange(event: { matches: any; }) {
  //   if (event.matches) {
  //     favicon?.setAttribute('href', 'logo-dark.svg')
  //   } else {
  //     favicon?.setAttribute('href', 'logo-light.svg')
  //   }
  // }
  
  return (
    <>
      <Head>
        <title>Imo UX</title>
        <meta name="description" content="Your friend in design" />
        <link
          rel="icon"
          href="/logo-light.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/logo-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"

        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
