import ReduxProvider from "@/store/provider";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <ReduxProvider>
          <Navbar />
          <main className="mx-auto px-6 py-10">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
