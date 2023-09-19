import { Navbar } from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { SafeUser } from "@/types";
import Client from "@/components/ClientComponent/Client";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Book Your Dream Home",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser: SafeUser | null = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="w-full pb-4 px-4 md:px-8 xl:px-16 max-w-[2500px]">
          <Client>
            <Navbar currentUser={currentUser} />
          </Client>
          {children}
        </div>
      </body>
    </html>
  );
}
