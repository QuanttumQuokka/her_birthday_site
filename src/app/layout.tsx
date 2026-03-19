import "./globals.css";

export const metadata = {
  title: "For You ❤️",
  description: "Birthday Surprise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
