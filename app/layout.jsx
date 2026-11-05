import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "TechnoSky Solutions | Turning Ideas Into Powerful Digital Experiences",
    template: "%s | TechnoSky Solutions",
  },
  description:
    "We transform ambitious ideas into powerful digital solutions. From custom software and modern websites to mobile applications and business automation.",
  keywords: "web development, mobile apps, custom software, UI/UX design, cloud solutions, digital marketing, TechnoSky",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Nunito:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
