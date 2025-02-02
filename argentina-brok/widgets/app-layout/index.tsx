import { Footer } from "./ui/footer";
import { Header } from "./ui/header";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
