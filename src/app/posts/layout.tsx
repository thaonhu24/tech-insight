export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mx-auto max-w-6xl">{children}</div>
    </div>
  );
}
