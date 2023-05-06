import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import "@/styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { AnchorHTMLAttributes, ClassAttributes, HTMLAttributes, OlHTMLAttributes } from "react";
import mdxComponentsStyles from "@/styles/MdxComponents.module.css";
import Image from "next/image";
import {GoogleAnalytics} from "nextjs-google-analytics";
import { Heading2 } from "@/components/MdxComponents/Heading2/Heading2";
import { Heading3 } from "@/components/MdxComponents/Heading3/Heading3";

const components = {
  h1: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <h1 {...props} className={mdxComponentsStyles.h1}/>,
  h2: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <Heading2 {...props} className={mdxComponentsStyles.h2}/>,
  h3: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <Heading3 {...props} className={mdxComponentsStyles.h3}/>,
  p: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement>) => <p {...props} className={mdxComponentsStyles.text}/>,
  a: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} target="_blank" rel="noreferrer noopener" className={mdxComponentsStyles.a}/>,
  ol: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLOListElement> & OlHTMLAttributes<HTMLOListElement>) => <ol {...props} className={mdxComponentsStyles.ol} />,
  ul: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLUListElement> & HTMLAttributes<HTMLUListElement>) => <ul {...props} className={mdxComponentsStyles.ul} />,
  img: (props: any) => <Image {...props} loading="lazy" fill />,
};

export default function App({Component, pageProps}: AppProps) {
  return (
      <MDXProvider components={components}>
          <GoogleAnalytics trackPageViews />
          <ThemeProvider>
              <Navigation />
              <Component {...pageProps} />
              <Footer />
          </ThemeProvider>
      </MDXProvider>
  );
};