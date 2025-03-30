import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function DisplayRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-dvh overflow-x-hidden overflow-y-auto'>
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
}
