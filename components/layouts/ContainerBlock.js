import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container } from "@nextui-org/react";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Laroybafi Ahmad - Software Engineer",
    description: `A 23-year-old software engineer based in Surabaya, Indonesia.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="google-site-verification" content="GPht8NK2bfNlSiWaQwNg-_feRA_eSzUbA9pHrRmUpiE" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://laroybafi.my.id/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://laroybafi.my.id/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Laroybafi" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@laroybafia_" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gradient-to-l dark:from-[#0f0f0f] w-full">
        <Container md>
        <Navbar />
        <div>{children}</div>
        <Footer />
        </Container>
      </main>
    </div>
  );
}
