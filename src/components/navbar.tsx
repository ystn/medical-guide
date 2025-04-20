"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { RiMenu2Line } from "@remixicon/react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const features = [
  {
    title: "AI Consultation",
    href: "#ai-consultation",
    description:
      "Get medical advice through our advanced AI consultation system.",
  },
  {
    title: "Patient Management",
    href: "#patient-management",
    description: "Securely manage patient records, history, and documentation.",
  },
  {
    title: "Medical Resources",
    href: "#resources",
    description: "Access a comprehensive database of medical information.",
  },
  {
    title: "Health Analytics",
    href: "#analytics",
    description: "Track health metrics and get personalized insights.",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/apple-icon.png"
              alt="Medical Guide Logo"
              width={32}
              height={32}
            />
            <span className="hidden font-bold sm:inline-block">
              Medical Guide
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {features.map((feature) => (
                        <ListItem
                          key={feature.title}
                          title={feature.title}
                          href={feature.href}
                        >
                          {feature.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="hidden md:flex items-center ml-auto space-x-4">
          <Link href="/dashboard" className="text-sm font-medium">
            Dashboard
          </Link>
          <Link href="/app/(auth)/login">
            <Button variant="outline" size="sm">
              Log in
            </Button>
          </Link>
          <Link href="/app/(auth)/register">
            <Button size="sm">Sign up</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <RiMenu2Line className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-4">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/apple-icon.png"
                    alt="Medical Guide Logo"
                    width={32}
                    height={32}
                  />
                  <span className="font-bold">Medical Guide</span>
                </Link>
                <div className="grid gap-2">
                  <Link href="/#features" className="text-sm font-medium">
                    Features
                  </Link>
                  <Link href="/pricing" className="text-sm font-medium">
                    Pricing
                  </Link>
                  <Link href="/about" className="text-sm font-medium">
                    About
                  </Link>
                  <Link href="/dashboard" className="text-sm font-medium">
                    Dashboard
                  </Link>
                </div>
                <div className="grid gap-2 mt-4">
                  <Link href="/app/(auth)/login">
                    <Button variant="outline" className="w-full" size="sm">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/app/(auth)/register">
                    <Button className="w-full" size="sm">
                      Sign up
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
