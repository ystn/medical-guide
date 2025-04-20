import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiTwitterXFill,
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
} from "@remixicon/react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/apple-icon.png"
                alt="Medical Guide Logo"
                width={32}
                height={32}
              />
              <span className="font-bold">Medical Guide</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Advanced AI-powered medical assistance and patient management
              platform for healthcare professionals.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://twitter.com"
                className="text-muted-foreground hover:text-foreground"
              >
                <RiTwitterXFill size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://facebook.com"
                className="text-muted-foreground hover:text-foreground"
              >
                <RiFacebookFill size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                className="text-muted-foreground hover:text-foreground"
              >
                <RiInstagramLine size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-foreground"
              >
                <RiLinkedinBoxFill size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#features"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-muted-foreground hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/licenses"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Licenses
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="border-t mt-12 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Medical Guide. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
