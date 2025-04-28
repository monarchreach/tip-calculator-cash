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
import { Menu, Calculator, Map, BookOpen, Search } from "lucide-react"
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
          <span className="hidden font-semibold sm:inline-block">Tip Calculator Tool</span>
        </Link>

        <div className="hidden md:flex md:gap-3 md:items-center">
          <DesktopNav pathname={pathname} />
          <ThemeToggle />
          <CtaButton />
        </div>

        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <MobileNav pathname={pathname} />
          <MobileCtaButton />
        </div>
      </div>
    </header>
  )
}

function CtaButton() {
  return (
    <Button className="font-medium ml-1 bg-primary hover:bg-primary/90 transition-all scale-100 hover:scale-105 duration-200">
      <Link href="/calculators" className="flex items-center">
        <Search className="mr-2 h-4 w-4" />
        Find Your Tip
      </Link>
    </Button>
  )
}

function MobileCtaButton() {
  return (
    <Button className="fixed bottom-6 right-6 z-40 shadow-lg font-medium bg-primary hover:bg-primary/90 transition-all scale-100 active:scale-95 duration-200 rounded-full">
      <Link href="/calculators" className="flex items-center">
        <Search className="mr-2 h-4 w-4" />
        Find Your Tip
      </Link>
    </Button>
  )
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <span className="flex items-center">
              <Calculator className="mr-1 h-4 w-4" />
              Calculate Tips
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                    href="/calculators"
                  >
                    <div className="mb-2 text-lg font-medium text-white">All Calculators</div>
                    <p className="text-sm leading-tight text-white/90">
                      Find the perfect tip calculator for any service
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <h4 className="mb-2 text-sm font-semibold">Popular Calculators</h4>
                <ul className="grid gap-2">
                  <ListItem href="/calculators/restaurant-tip-calculator" title="Restaurant">
                    For dining and food service
                  </ListItem>
                  <ListItem href="/calculators/hotel-staff-tip-calculator" title="Hotel">
                    For hospitality services
                  </ListItem>
                  <ListItem href="/calculators/taxi-tip-calculator" title="Transportation">
                    For taxis, rideshares, and shuttles
                  </ListItem>
                  <ListItem href="/calculators/hair-salon-tip-calculator" title="Personal Services">
                    For salons, spas, and care
                  </ListItem>
                </ul>
              </li>
              <li className="mt-3">
                <h4 className="mb-2 text-sm font-semibold">Special Use Cases</h4>
                <ul className="grid gap-2">
                  <ListItem href="/calculators/group-dining-tip-calculator" title="Group Dining">
                    Split bills and calculate tips fairly
                  </ListItem>
                  <ListItem href="/calculators/international-tip-calculator" title="International Travel">
                    Adjust for local tipping customs
                  </ListItem>
                </ul>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <span className="flex items-center">
              <Map className="mr-1 h-4 w-4" />
              Tipping Guides
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
              <ListItem href="/global-tipping-etiquette" title="Global Tipping Map">
                Learn tipping customs around the world
              </ListItem>
              <ListItem href="/us-vs-europe-vs-asia-tipping-culture" title="Compare Regions">
                Understand differences across continents
              </ListItem>
              <ListItem href="/how-to-calculate-a-tip" title="How to Calculate Tips">
                Step-by-step guides for accurate tipping
              </ListItem>
              <ListItem href="/digital-tipping-qr-code-guide" title="Digital Tipping Guide">
                Modern ways to tip using technology
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <span className="flex items-center">
              <BookOpen className="mr-1 h-4 w-4" />
              Resources
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px]">
              <ListItem href="/blog" title="Blog">
                Tips, stories, and industry insights
              </ListItem>
              <ListItem href="/about-us" title="About Us">
                Our mission and expertise
              </ListItem>
              <ListItem href="/contact-us" title="Contact">
                Get in touch with our team
              </ListItem>
              <ListItem href="/faq" title="FAQ">
                Answers to your tipping questions
              </ListItem>
            </ul>
          </NavigationMenuContent>
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
            <span className="font-semibold">Tip Calculator Tool</span>
          </Link>
          
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Calculate Tips</h3>
            </div>
            <div className="ml-7 grid gap-4">
              <div>
                <h4 className="mb-2 text-sm font-medium text-muted-foreground">Popular Calculators</h4>
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
              
              <div>
                <h4 className="mb-2 text-sm font-medium text-muted-foreground">Special Use Cases</h4>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    href="/calculators/group-dining-tip-calculator"
                    className={cn(
                      "flex items-center gap-2 text-sm font-medium",
                      pathname === "/calculators/group-dining-tip-calculator" && "text-primary",
                    )}
                  >
                    Group Dining
                  </Link>
                  <Link
                    href="/calculators/international-tip-calculator"
                    className={cn(
                      "flex items-center gap-2 text-sm font-medium",
                      pathname === "/calculators/international-tip-calculator" && "text-primary",
                    )}
                  >
                    International Travel
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <Map className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Tipping Guides</h3>
            </div>
            <div className="ml-7 grid grid-cols-1 gap-2">
              <Link
                href="/global-tipping-etiquette"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  pathname === "/global-tipping-etiquette" && "text-primary",
                )}
              >
                Global Tipping Map
              </Link>
              <Link
                href="/us-vs-europe-vs-asia-tipping-culture"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  pathname === "/us-vs-europe-vs-asia-tipping-culture" && "text-primary",
                )}
              >
                Compare Regions
              </Link>
              <Link
                href="/how-to-calculate-a-tip"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  pathname === "/how-to-calculate-a-tip" && "text-primary",
                )}
              >
                How to Calculate Tips
              </Link>
              <Link
                href="/digital-tipping-qr-code-guide"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  pathname === "/digital-tipping-qr-code-guide" && "text-primary",
                )}
              >
                Digital Tipping Guide
              </Link>
            </div>
          </div>
          
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Resources</h3>
            </div>
            <div className="ml-7 grid grid-cols-1 gap-2">
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
                About Us
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
              <Link
                href="/faq"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  pathname === "/faq" && "text-primary",
                )}
              >
                FAQ
              </Link>
            </div>
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
