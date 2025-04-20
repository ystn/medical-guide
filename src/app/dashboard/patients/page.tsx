"use client";

import { useState } from "react";
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
import PatientsTable from "@/components/patients-table";
import { Card } from "@/components/ui/card";
import {
  RiUserFollowLine,
  RiCalendarCheckLine,
  RiAlarmWarningLine,
  RiUserHeartLine,
} from "@remixicon/react";
import { useMockData, Patient } from "@/lib/mock-data-provider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";

export default function PatientsPage() {
  const { patients, addPatient } = useMockData();
  const [showAddPatientDialog, setShowAddPatientDialog] = useState(false);
  const [newPatient, setNewPatient] = useState<Partial<Patient>>({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    address: "",
    patientType: "Outpatient",
    insurance: true,
    status: "Stable",
    medicalHistory: [],
    allergies: [],
  });

  // Calculate stats from patients data
  const totalPatients = patients.length;
  const newThisMonth = patients.filter((patient) => {
    const today = new Date();
    const lastMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      today.getDate()
    );
    return new Date(patient.appointmentDate) > lastMonth;
  }).length;

  const followUpsDue = patients.filter((patient) => {
    return patient.status === "Pending";
  }).length;

  // Calculate average age
  const averageAge =
    patients.length > 0
      ? Math.round(
          patients.reduce((sum, patient) => {
            const birthYear = new Date(patient.birthDate).getFullYear();
            const currentYear = new Date().getFullYear();
            return sum + (currentYear - birthYear);
          }, 0) / patients.length
        )
      : 0;

  const handleAddPatient = () => {
    if (!newPatient.name || !newPatient.email) return;

    // Generate patient image from name
    const patientImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      newPatient.name
    )}&background=EAECF0`;

    // Create a full patient object
    const fullPatient: Patient = {
      id: `PT-${Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0")}`,
      image: patientImage,
      name: newPatient.name || "",
      email: newPatient.email || "",
      phone: newPatient.phone || "",
      birthDate: newPatient.birthDate || new Date().toISOString().split("T")[0],
      address: newPatient.address || "",
      status: newPatient.status || "Stable",
      patientType: newPatient.patientType || "Outpatient",
      insurance:
        newPatient.insurance !== undefined ? newPatient.insurance : true,
      doctor: {
        name: "Dr. Williams",
        image: "https://ui-avatars.com/api/?name=Dr+Williams&background=E3F2FD",
      },
      vitalSigns: 85, // Default value
      appointmentDate: format(
        new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        "MMM dd, yyyy"
      ), // One week from now
      medicalHistory: newPatient.medicalHistory || [],
      allergies: newPatient.allergies || [],
    };

    addPatient(fullPatient);

    // Reset form and close dialog
    setNewPatient({
      name: "",
      email: "",
      phone: "",
      birthDate: "",
      address: "",
      patientType: "Outpatient",
      insurance: true,
      status: "Stable",
      medicalHistory: [],
      allergies: [],
    });
    setShowAddPatientDialog(false);
  };

  const handleInputChange = (field: string, value: any) => {
    setNewPatient((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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
                    <RiUserFollowLine size={22} aria-hidden="true" />
                    <span className="sr-only">Dashboard</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Patients</BreadcrumbPage>
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
              <h1 className="text-2xl font-semibold">Patient Management</h1>
              <p className="text-sm text-muted-foreground">
                View and manage your patients and their medical records
              </p>
            </div>
            <Button
              className="px-3"
              onClick={() => setShowAddPatientDialog(true)}
            >
              Add New Patient
            </Button>
          </div>

          {/* Patient Stats */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Total Patients
                  </p>
                  <p className="text-2xl font-bold">{totalPatients}</p>
                </div>
                <div className="rounded-full p-2 bg-primary/10">
                  <RiUserFollowLine size={24} className="text-primary" />
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    New This Month
                  </p>
                  <p className="text-2xl font-bold">{newThisMonth}</p>
                </div>
                <div className="rounded-full p-2 bg-green-500/10">
                  <RiUserHeartLine size={24} className="text-green-500" />
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Follow-ups Due
                  </p>
                  <p className="text-2xl font-bold">{followUpsDue}</p>
                </div>
                <div className="rounded-full p-2 bg-orange-500/10">
                  <RiAlarmWarningLine size={24} className="text-orange-500" />
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Avg. Patient Age
                  </p>
                  <p className="text-2xl font-bold">{averageAge}</p>
                </div>
                <div className="rounded-full p-2 bg-blue-500/10">
                  <RiCalendarCheckLine size={24} className="text-blue-500" />
                </div>
              </div>
            </Card>
          </div>

          {/* Patient Table */}
          <div className="flex-1">
            <PatientsTable />
          </div>
        </div>
      </SidebarInset>

      {/* Add Patient Dialog */}
      <Dialog
        open={showAddPatientDialog}
        onOpenChange={setShowAddPatientDialog}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Patient</DialogTitle>
            <DialogDescription>
              Enter patient information to create a new patient record
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="basic">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="contact">Contact Details</TabsTrigger>
              <TabsTrigger value="medical">Medical Info</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4 mt-4">
              <div className="grid gap-4 py-2">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Patient's full name"
                    value={newPatient.name || ""}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="birthDate">Date of Birth</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={newPatient.birthDate || ""}
                    onChange={(e) =>
                      handleInputChange("birthDate", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="patientType">Patient Type</Label>
                  <Select
                    value={newPatient.patientType || "Outpatient"}
                    onValueChange={(value) =>
                      handleInputChange("patientType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select patient type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Outpatient">Outpatient</SelectItem>
                      <SelectItem value="Inpatient">Inpatient</SelectItem>
                      <SelectItem value="Emergency">Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="status">Current Status</Label>
                  <Select
                    value={newPatient.status || "Stable"}
                    onValueChange={(value) =>
                      handleInputChange("status", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Stable">Stable</SelectItem>
                      <SelectItem value="Critical">Critical</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="insurance">Insurance Status</Label>
                  <Select
                    value={newPatient.insurance ? "true" : "false"}
                    onValueChange={(value) =>
                      handleInputChange("insurance", value === "true")
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select insurance status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">Insured</SelectItem>
                      <SelectItem value="false">Uninsured</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-4 mt-4">
              <div className="grid gap-4 py-2">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="patient@example.com"
                    value={newPatient.email || ""}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    value={newPatient.phone || ""}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    placeholder="Patient's full address"
                    value={newPatient.address || ""}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="medical" className="space-y-4 mt-4">
              <div className="grid gap-4 py-2">
                <div>
                  <Label htmlFor="medicalHistory">Medical History</Label>
                  <Textarea
                    id="medicalHistory"
                    placeholder="Enter medical history (one per line)"
                    value={
                      newPatient.medicalHistory
                        ? newPatient.medicalHistory.join("\n")
                        : ""
                    }
                    onChange={(e) =>
                      handleInputChange(
                        "medicalHistory",
                        e.target.value
                          .split("\n")
                          .filter((line) => line.trim() !== "")
                      )
                    }
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Enter each condition on a new line
                  </p>
                </div>
                <div>
                  <Label htmlFor="allergies">Allergies</Label>
                  <Textarea
                    id="allergies"
                    placeholder="Enter allergies (one per line)"
                    value={
                      newPatient.allergies
                        ? newPatient.allergies.join("\n")
                        : ""
                    }
                    onChange={(e) =>
                      handleInputChange(
                        "allergies",
                        e.target.value
                          .split("\n")
                          .filter((line) => line.trim() !== "")
                      )
                    }
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Enter each allergy on a new line
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowAddPatientDialog(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddPatient}
              disabled={!newPatient.name || !newPatient.email}
            >
              Add Patient
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  );
}
