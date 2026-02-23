import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthSessionProvider from "@/components/providers/SessionProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/ModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kemlipur — A Village in Dhanusha, Nepal",
  description:
    "Explore Kemlipur, a vibrant village in Dhalkebar, Dhanusha, Nepal. Discover its temple, school, view tower, Pokharia, mango nursery and more.",
  keywords: ["Kemlipur", "Nepal", "Dhanusha", "Dhalkebar", "village", "interactive map"],
  openGraph: {
    title: "Kemlipur Village",
    description: "An interactive 3D experience of Kemlipur, Dhanusha, Nepal.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthSessionProvider>
            {children}
            <ModeToggle />
          </AuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}