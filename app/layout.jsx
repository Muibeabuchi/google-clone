import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Chiki Google ",
  description: "Built by Nerdkidchiki",
  icons: {
    icon: "/app/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="relative min-h-screen pb-[120px]">
      <body className="pb-[90px]">
        <main>{children}</main>
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
// className="relative min-h-screen pb-[120px]"
// className="pb-[90px]"
