import type { Metadata } from "next";
import { Playfair_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import "./alf.css";

const playfair = Playfair_Display({
  variable: "--font-alf-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-alf-ui",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const ibmPlex = IBM_Plex_Mono({
  variable: "--font-alf-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "African Legal Factory",
  description:
    "Services juridiques pour l'écosystème startup africain — structuration, marque, contrats, formations.",
};

export default function AlfSegmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`alf-root ${playfair.variable} ${inter.variable} ${ibmPlex.variable}`}
      style={{ fontFamily: "var(--font-alf-display)" }}
    >
      {children}
    </div>
  );
}
