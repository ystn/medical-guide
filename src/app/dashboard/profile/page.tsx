"use client";

import type { Metadata } from "next";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiSettings3Line, RiPrinterLine } from "@remixicon/react";



export default function ProfilePage() {
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
                    <RiSettings3Line size={22} aria-hidden="true" />
                    <span className="sr-only">Dashboard</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Profile</BreadcrumbPage>
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
              <h1 className="text-2xl font-semibold">Your Profile</h1>
              <p className="text-sm text-muted-foreground">
                Manage your account settings and preferences
              </p>
            </div>
          </div>

          {/* Profile Content */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {/* Profile Sidebar */}
            <div className="md:col-span-4 lg:col-span-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-28 w-28 border-4 border-background">
                      <AvatarImage src="https://ui-avatars.com/api/?name=Dr.+Roberts&background=0D8ABC&color=fff" />
                      <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 text-center">
                      <h3 className="text-xl font-medium">Dr. Sarah Roberts</h3>
                      <p className="text-sm text-muted-foreground">
                        General Practitioner
                      </p>
                    </div>
                    <Button variant="outline" className="w-full">
                      Upload New Photo
                    </Button>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          License ID
                        </span>
                        <span className="font-medium">MD-12345-NY</span>
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Specialty</span>
                        <span className="font-medium">Family Medicine</span>
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          Member since
                        </span>
                        <span className="font-medium">January 2023</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Profile Main Content */}
            <div className="md:col-span-8 lg:col-span-9">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="account" className="flex-1">
                    Account
                  </TabsTrigger>
                  <TabsTrigger value="security" className="flex-1">
                    Security
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="flex-1">
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger value="qrcode" className="flex-1">
                    QR Code
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input
                            id="first-name"
                            placeholder="First name"
                            defaultValue="Sarah"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input
                            id="last-name"
                            placeholder="Last name"
                            defaultValue="Roberts"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Email address"
                            defaultValue="dr.roberts@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            placeholder="Phone number"
                            defaultValue="(555) 123-4567"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="medical-specialty">
                          Medical Specialty
                        </Label>
                        <Input
                          id="medical-specialty"
                          defaultValue="General Practitioner"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hospital">Primary Hospital</Label>
                        <Input
                          id="hospital"
                          defaultValue="Central Medical Center"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Professional Bio</Label>
                        <Input
                          id="bio"
                          defaultValue="Board-certified general practitioner with over 10 years experience in family medicine."
                        />
                      </div>
                      <Button>Save Changes</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="security">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">
                          Current Password
                        </Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">
                          Confirm New Password
                        </Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                      <Button>Update Password</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="notifications">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Email Notifications",
                            description:
                              "Receive email updates about your account activity",
                          },
                          {
                            title: "SMS Notifications",
                            description:
                              "Get text message alerts for urgent matters",
                          },
                          {
                            title: "Patient Updates",
                            description:
                              "Be notified when patients upload new documents",
                          },
                          {
                            title: "Appointment Reminders",
                            description:
                              "Get reminded about upcoming appointments",
                          },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-3 border rounded-lg"
                          >
                            <div>
                              <p className="font-medium">{item.title}</p>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                            <div>
                              <label className="relative inline-flex cursor-pointer items-center">
                                <input
                                  type="checkbox"
                                  className="peer sr-only"
                                  defaultChecked={i < 3}
                                />
                                <div className="h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full"></div>
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button className="mt-4">Save Preferences</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="qrcode">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Physician QR Code</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col items-center space-y-6">
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <img
                            src="/qr.svg"
                            alt="Physician QR Code"
                            width={200}
                            height={200}
                            className="mx-auto"
                          />
                        </div>
                        <div className="text-center space-y-2">
                          <p className="text-muted-foreground">
                            Share this QR code with your patients for quick
                            access to your profile and appointment booking.
                          </p>
                        </div>
                        <Button
                          className="flex items-center gap-2"
                          onClick={() => {
                            window.print();
                          }}
                        >
                          <RiPrinterLine size={18} />
                          Print QR Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
