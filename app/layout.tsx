import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme-provider";

export const metadata: Metadata = {
  title: {
    template: "%s | My Weather App",
    default: "My Weather App",
  },
  description: "Welcome to the Weather Platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={""}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
