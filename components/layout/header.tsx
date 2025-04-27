"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Logo } from "@/components/brand/logo"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-background",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-auto" />
          <span className="hidden font-semibold sm:inline-block">Tip Calculator Hub</span>
        </Link>

        <div className="hidden md:flex md:gap-2">
          <DesktopNav pathname={pathname} />
          <ThemeToggle />
        </div>

        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <MobileNav pathname={pathname} />
        </div>
      </div>
    </header>
  )
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Calculators</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                    href="/calculators"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium text-white">All Calculators</div>
                    <p className="text-sm leading-tight text-white/90">
                      Browse our complete collection of tip calculators for any service
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/calculators/restaurant-tip-calculator" title="Restaurant">
                Calculate tips for dining out
              </ListItem>
              <ListItem href="/calculators/hotel-staff-tip-calculator" title="Hotel">
                Tips for hotel staff and services
              </ListItem>
              <ListItem href="/calculators/taxi-tip-calculator" title="Transportation">
                Taxi, rideshare, and shuttle tips
              </ListItem>
              <ListItem href="/calculators/hair-salon-tip-calculator" title="Personal Services">
                Salon, spa, and personal care
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Guides</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
              <ListItem href="/global-tipping-etiquette" title="Global Tipping Etiquette">
                Learn tipping customs around the world
              </ListItem>
              <ListItem href="/us-vs-europe-vs-asia-tipping-culture" title="Regional Comparisons">
                Compare tipping practices across continents
              </ListItem>
              <ListItem href="/how-to-calculate-a-tip" title="How to Calculate a Tip">
                Step-by-step guide to calculating tips
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-2">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="grid gap-6 py-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-auto" />
            <span className="font-semibold">Tip Calculator Hub</span>
          </Link>
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Calculators</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link
                href="/calculators"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  pathname === "/calculators" && "text-primary",
                )}
              >
                All Calculators
              </Link>
              <Link
                href="/calculators/restaurant-tip-calculator"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  pathname === "/calculators/restaurant-tip-calculator" && "text-primary",
                )}
              >
                Restaurant
              </Link>
              <Link
                href="/calculators/hotel-staff-tip-calculator"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  pathname === "/calculators/hotel-staff-tip-calculator" && "text-primary",
                )}
              >
                Hotel
              </Link>
              <Link
                href="/calculators/taxi-tip-calculator"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  pathname === "/calculators/taxi-tip-calculator" && "text-primary",
                )}
              >
                Transportation
              </Link>
              <Link
                href="/calculators/hair-salon-tip-calculator"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  pathname === "/calculators/hair-salon-tip-calculator" && "text-primary",
                )}
              >
                Personal Services
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Guides</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link
                href="/global-tipping-etiquette"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  pathname === "/global-tipping-etiquette" && "text-primary",
                )}
              >
                Global Tipping Etiquette
              </Link>
              <Link
                href="/us-vs-europe-vs-asia-tipping-culture"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  pathname === "/us-vs-europe-vs-asia-tipping-culture" && "text-primary",
                )}
              >
                Regional Comparisons
              </Link>
              <Link
                href="/how-to-calculate-a-tip"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  pathname === "/how-to-calculate-a-tip" && "text-primary",
                )}
              >
                How to Calculate a Tip
              </Link>
            </div>
          </div>
          <div className="grid gap-2">
            <Link
              href="/blog"
              className={cn("flex items-center gap-2 text-sm font-medium", pathname === "/blog" && "text-primary")}
            >
              Blog
            </Link>
            <Link
              href="/about-us"
              className={cn("flex items-center gap-2 text-sm font-medium", pathname === "/about-us" && "text-primary")}
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className={cn(
                "flex items-center gap-2 text-sm font-medium",
                pathname === "/contact-us" && "text-primary",
              )}
            >
              Contact
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
