import "./globals.css";

export const metadata = {
  title: "Chiki Google ",
  description: "Built by Nerdkidchiki",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
