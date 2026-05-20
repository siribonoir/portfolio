import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "İbrahim Talıbov — Developer & Designer",
  description: "SDU Kompüter Mühəndisliyi tələbəsi. AI botlar, avtomatlaşdırma, UI/UX, Next.js.",
  keywords: ["developer", "designer", "AI", "Next.js", "portfolio", "Azerbaycan"],
  authors: [{ name: "İbrahim Talıbov", url: "https://github.com/siribonoir" }],
  openGraph: {
    title: "İbrahim Talıbov — Developer & Designer",
    description: "SDU Kompüter Mühəndisliyi tələbəsi. AI botlar, avtomatlaşdırma, UI/UX.",
    type: "website",
    locale: "az_AZ",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&family=DM+Mono:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
