import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { NavItem, MobileNavItem } from "@/components/NavItem";
import ClientEnhancement from "@/components/ClientEnhancement";
import NavbarScroll from "@/components/NavbarScroll";
import { MobileMenu } from "@/components/MobileMenu";
import AdBanners from "@/components/AdBanners";

const Layout = async ({ children }: { children: ReactNode }) => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const navigation = [
    { name: "Home", href: "/", iconName: "Home" },
    { name: "Dashboard", href: "/dashboard", iconName: "BarChart" },
    { name: "Rituals", href: "/rituals", iconName: "Sparkles" },
    { name: "Check-In", href: "/check-in", iconName: "Heart" },
    { name: "Journal", href: "/journal", iconName: "BookOpen" },
    { name: "Affirmations", href: "/affirmations", iconName: "Calendar" },
    { name: "AI Companion", href: "/healing-companion", iconName: "Bot" },
  ];

  return (
    <div className="root-layout min-h-screen bg-[#F8F9FA] border-4 border-gray-200">
      {/* Client-side enhancement that runs after hydration */}
      <ClientEnhancement />
      <NavbarScroll />

      {/* Ad Banners */}
      <AdBanners />

      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-0 flex justify-center">
        <nav className="bg-white/95 backdrop-blur-md shadow-lg border border-gray-100 navbar-gradient rounded-lg w-11/12 max-w-6xl">
          <div className="w-full mx-auto px-2 md:px-4">
            <div className="flex items-center justify-between h-14">
              {/* Logo Section */}
              <Link href="/" className="flex items-center group shrink-0">
                <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105 rounded-full p-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm logo-entrance">
                  <div className="relative">
                    <Image
                      src="/logo.svg"
                      alt="Mirani Well Logo"
                      width={45}
                      height={45}
                      className="object-contain relative z-10"
                      style={{ height: "auto" }}
                      priority
                    />
                  </div>
                </div>
                <div className="ml-3 hidden sm:flex flex-col shrink-0">
                  <div className="flex flex-col items-start">
                    <Image
                      src="/1.mirani-well-text-logo.png"
                      alt="Mirani Well"
                      width={170}
                      height={40}
                      className="object-contain relative z-10"
                    />
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-center space-x-1 lg:space-x-2 mx-2 md:mx-3 lg:mx-4 overflow-x-auto flex-1">
                {navigation.map((item) => (
                  <NavItem
                    key={item.name}
                    name={item.name}
                    href={item.href}
                    iconName={item.iconName}
                  />
                ))}
              </div>

              {/* User Button and Mobile Menu */}
              <div className="flex items-center gap-2">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-9 h-9", // Regular size
                      userButtonBox:
                        "transition-transform duration-300 hover:scale-105",
                      userButtonOuterIdentifier: "hover:shadow-md",
                    },
                  }}
                  afterSignOutUrl="/sign-in"
                />
                <MobileMenu navigation={navigation} />
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Bottom Navigation - show on smallest screens only */}
      <div className="sm:hidden bg-white/95 backdrop-blur-sm border border-gray-100 fixed bottom-0 left-0 right-0 z-50 shadow-lg navbar-gradient mx-2 mb-2 rounded-2xl">
        <div className="grid grid-cols-3 gap-1 px-2 py-2">
          {/* Show only 3 primary navigation items */}
          {navigation.slice(0, 3).map((item) => (
            <MobileNavItem
              key={item.name}
              name={item.name}
              href={item.href}
              iconName={item.iconName}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="pb-20 sm:pb-12 md:pb-0 px-3 sm:px-6 md:px-8 page-content pt-16 max-w-5xl mx-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
