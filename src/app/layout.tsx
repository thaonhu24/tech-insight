import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { AppProviders } from "@/providers/AppProviders";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <AppProviders>
          <Navbar />
          <main className="mx-auto px-6 py-10">{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
