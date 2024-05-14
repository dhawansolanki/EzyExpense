import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata = {
  title: "EzyExpense || Manage Your Expenses Easily With EzyExpense",
  description:
    "We are providing easiest way to to manage expenses, Get a full view so you know where to save.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <script src="https://cdn.tailwindcss.com"></script>
      </body>
    </html>
  );
}
