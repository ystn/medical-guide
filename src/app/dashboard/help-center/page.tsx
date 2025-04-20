import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Guide - Help Center",
};

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import UserDropdown from "@/components/user-dropdown";
import FeedbackDialog from "@/components/feedback-dialog";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RiLeafLine, RiSearchLine } from "@remixicon/react";

export default function HelpCenterPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-hidden px-4 md:px-6 lg:px-8">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger className="-ms-4" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">
                    <RiLeafLine size={22} aria-hidden="true" />
                    <span className="sr-only">Dashboard</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Help Center</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-3 ml-auto">
            <FeedbackDialog />
            <UserDropdown />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 lg:gap-6 py-4 lg:py-6">
          {/* Page intro */}
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold">Help Center</h1>
              <p className="text-sm text-muted-foreground">
                Find answers to common questions and get support
              </p>
            </div>
            <Button className="px-3">Contact Support</Button>
          </div>

          {/* Search */}
          <div className="relative">
            <RiSearchLine
              className="absolute left-4 top-3 text-muted-foreground"
              size={20}
            />
            <Input
              placeholder="Search for help topics..."
              className="pl-10 py-6"
            />
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: "Getting Started",
                description: "Learn the basics of using Medical Guide",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-500"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                ),
              },
              {
                title: "Account Settings",
                description: "Manage your profile and preferences",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                ),
              },
              {
                title: "AI Consultation",
                description: "Learn how to use the AI consultation feature",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <path d="M7 21h10a2 2 0 0 0 2-2V9.414a1 1 0 0 0-.293-.707l-5.414-5.414A1 1 0 0 0 12.586 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"></path>
                  </svg>
                ),
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="transition-all hover:shadow-md cursor-pointer"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="p-3 rounded-full bg-primary/10">
                      {category.icon}
                    </div>
                    <h3 className="font-medium">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                    <Button variant="outline" className="mt-2">
                      View Articles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How do I create a new patient record?
                  </AccordionTrigger>
                  <AccordionContent>
                    To create a new patient record, navigate to the Patients
                    section from the sidebar, then click on the "Add Patient"
                    button in the top right corner. Fill in the required
                    information in the form and click "Save" to create the
                    patient record.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How does the AI consultation work?
                  </AccordionTrigger>
                  <AccordionContent>
                    The AI consultation feature uses advanced machine learning
                    algorithms to analyze symptoms and provide preliminary
                    assessments. To use it, go to the Consultation section,
                    enter the patient's symptoms in the text area, and click
                    "Submit for AI Analysis". The AI will process the
                    information and provide insights that can help with your
                    diagnosis.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How do I update my profile information?
                  </AccordionTrigger>
                  <AccordionContent>
                    To update your profile information, go to the Profile
                    section via the sidebar menu. There you can edit your
                    personal details, update your professional information,
                    change your password, and manage notification preferences.
                    After making changes, be sure to click the "Save Changes"
                    button.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Is my patient data secure?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, patient data security is our top priority. All data is
                    encrypted both in transit and at rest. We comply with HIPAA
                    regulations and implement multiple layers of security to
                    protect sensitive medical information. Our system also
                    maintains detailed audit logs of all access to patient
                    records.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    How can I get technical support?
                  </AccordionTrigger>
                  <AccordionContent>
                    If you need technical support, you can click the "Contact
                    Support" button at the top of this page to submit a help
                    request. Our support team is available 24/7 to assist you
                    with any issues. You can also check our documentation for
                    detailed guides on using all features of the Medical Guide
                    platform.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Need help with technical issues? Our support team is available
                  24/7.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>(888) 555-0123</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>support@medicalguide.com</span>
                  </div>
                </div>
                <Button className="mt-4 w-full">Contact Support</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Training Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Access our comprehensive training materials to make the most
                  of Medical Guide.
                </p>
                <div className="space-y-3">
                  {[
                    "Video Tutorials",
                    "User Manuals",
                    "Webinars",
                    "Guided Walkthroughs",
                  ].map((resource, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>{resource}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  Access Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
