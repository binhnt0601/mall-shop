import Head from "next/head";

type SeoHeadProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  children?: React.ReactNode;
};

export default function SeoHead({
  title = "English Class",
  description = "English Class",
  url = "https://bee-domain.site/",
  image = "/logo.png",
  children,
}: SeoHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicon and icon */}
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <meta name="theme-color" content="#ffffff" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Language */}
      <meta httpEquiv="Content-Language" content="en" />

      {children}
    </Head>
  );
}
