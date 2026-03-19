import "./globals.css";
import MusicPlayer from "./MusicPlayer";

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
        <MusicPlayer />
        {children}
      </body>
    </html>
  );
}
