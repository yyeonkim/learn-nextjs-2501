import Navigation from "../components/Navigation";
import "../styles/global.css";

export const metadata = {
  title: "Next Movies",
  description: "Practice Next.js with movies",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
