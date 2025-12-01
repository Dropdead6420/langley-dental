import { Geist, Geist_Mono,Jost } from "next/font/google";
import "./globals.css";
import "./styles/andfold.css"
import "./styles/animate.css"
import { ContactModalProvider } from "@/components/ContactModal";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import AppointmentButton from "@/components/AppointmentButton";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['400', '500', '600', '700'], // optional weights
  display: 'swap',
})
export const metadata = {
  title: "Langly Care Dental | Expert Family Dentistry & Advanced Dental Care",
  description: "Langly Care Dental provides gentle, high-quality dental care for families and individuals. From routine checkups and cleanings to cosmetic dentistry and dental implants — experience trusted, comfortable, and personalized care. Book your appointment today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable}font-sans antialiased`}
        >
        <ContactModalProvider>
        <Header/>
        {children}
        <Footer/>
        <AppointmentButton/>
        </ContactModalProvider>
      </body>
    </html>
  );
}
