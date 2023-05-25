import SearchHeader from "@/components/SearchHeader";

export const metadata = {
  title: "Chiki Google ",
  description: "Built by Nerdkidchiki",
  icons: {
    icon: "/app/favicon.ico",
  },
};

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
