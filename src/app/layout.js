import "./globals.css";
import Navbar from "@/components/Navbar";

const SITE_URL = "https://www.iatsolutions.co";
const HOME_TITLE =
  "Custom Software & AI Development Company in Chennai | IAT Solutions";
const HOME_DESC =
  "IAT Solutions is a custom software development company in Chennai building web apps, mobile apps, and AI solutions for businesses that have outgrown off-the-shelf tools.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s — IAT Solutions",
  },
  description: HOME_DESC,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "IAT Solutions",
    url: SITE_URL,
    title: HOME_TITLE,
    description: HOME_DESC,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IAT Solutions — Custom Software & AI Development in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESC,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Globally shared, persists across routes (no re-animation on nav) */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}