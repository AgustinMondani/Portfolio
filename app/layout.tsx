import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Perfil from "@/components/perfil";
import Proyectos from "@/components/proyectos"
import ParticlesBackground from "@/components/cover-particles";
import SocialLinks from "@/components/links-contacto";
import LanguageExperience from "@/components/habilidades";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agustin Mondani💻",
  description: "Portfolio agustin mondani tecnico en programacion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-{100vh} bg-no-repeat gradient-cover">
        <Navbar />
        <Perfil />
        <Proyectos />
        <LanguageExperience/>
        <SocialLinks/>
        {children}
      </body>
    </html>
  );
}

