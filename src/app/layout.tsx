import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import AppQueryClientProvider from "@/providers/Providers";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { AppHeader } from "@/components/layout/app-header";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tikety",
  description: "Gestion de ticket",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <AppQueryClientProvider>
          <SidebarProvider>
            <AppSidebar />
            <div className="flex min-w-0 flex-1 flex-col">
              <AppHeader />
              <main className="flex-1">{children}</main>
            </div>
          </SidebarProvider>
        </AppQueryClientProvider>
      </body>
    </html>
  );
}
