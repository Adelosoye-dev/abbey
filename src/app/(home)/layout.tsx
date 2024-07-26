
import Header from "@/components/Header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#ebebeb]">
       <Header />
       <main >
         {children}
       </main>
      </body>
    </html>
  );
}
