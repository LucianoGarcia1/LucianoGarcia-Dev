import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Luciano Garcia - Frontend Developer",
  description:
    "Luciano Garcia - Desenvolvedor Frontend apaixonado por criar experiências web incríveis. Explore meu portfólio e descubra como posso transformar suas ideias em realidade.",
  keywords:
    "Luciano Garcia, Desenvolvedor Frontend, Web Development, HTML, CSS, JavaScript, React, Portfólio, Experiência do Usuário, UI/UX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${ubuntu.className}`}>
        <div className="2xl:container w-full my-0 mx-auto">
          <Header />
          <main className="w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
