"use client";

import { useState, useEffect, FormEvent, useMemo } from "react";
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
import { StatsGrid } from "@/components/stats-grid";
import {
  RiBardLine,
  RiCalendarCheckLine,
  RiPulseLine,
  RiFileListLine,
  RiArrowLeftLine,
} from "@remixicon/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useMockData, Consultation } from "@/lib/mock-data-provider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";

export default function ConsultationPage() {
  const { patients, consultations, addConsultation } = useMockData();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [symptoms, setSymptoms] = useState("");
  const [activeTab, setActiveTab] = useState("new");
  const [selectedPatientId, setSelectedPatientId] = useState("");
  const [isAiAnalyzing, setIsAiAnalyzing] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [showConsultationDialog, setShowConsultationDialog] = useState(false);
  const [selectedConsultation, setSelectedConsultation] =
    useState<Consultation | null>(null);
  const [filteredConsultations, setFilteredConsultations] = useState<
    Consultation[]
  >([]);
  const [isFiltered, setIsFiltered] = useState(false);

  // Check for patientId query parameter
  useEffect(() => {
    const patientId = searchParams.get("patientId");
    if (patientId) {
      setSelectedPatientId(patientId);
      setActiveTab("recent");

      // Filter consultations for this patient
      const patientConsultations = consultations.filter(
        (consultation) => consultation.patientId === patientId
      );
      setFilteredConsultations(patientConsultations);
      setIsFiltered(true);
    } else {
      // If no patient ID, show all consultations
      setFilteredConsultations([]);
      setIsFiltered(false);
    }
  }, [searchParams, consultations]);

  // Reset AI response when patient changes
  useEffect(() => {
    setAiResponse("");
  }, [selectedPatientId]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedPatientId || !symptoms.trim()) return;

    setIsAiAnalyzing(true);

    // Simulate AI analysis with a timeout
    setTimeout(() => {
      // Mock AI response based on the symptoms
      let mockResponse = "";
      const lowerSymptoms = symptoms.toLowerCase();

      if (lowerSymptoms.includes("head") && lowerSymptoms.includes("pain")) {
        mockResponse =
          "Based on your symptoms of headache, I recommend the following:\n\n" +
          "Possible diagnosis: Tension headache\n\n" +
          "Recommendations:\n" +
          "- Rest in a quiet, dark room\n" +
          "- Apply a cold compress to your forehead\n" +
          "- Take over-the-counter pain relievers like acetaminophen\n" +
          "- Stay hydrated\n\n" +
          "Seek immediate medical attention if:\n" +
          "- The headache is sudden and severe\n" +
          "- You have fever, stiff neck, confusion, seizures, double vision\n" +
          "- The headache follows a head injury";
      } else if (
        lowerSymptoms.includes("cough") ||
        lowerSymptoms.includes("fever") ||
        lowerSymptoms.includes("throat")
      ) {
        mockResponse =
          "Based on your symptoms of cough and fever, I recommend the following:\n\n" +
          "Possible diagnosis: Upper respiratory infection (common cold/flu)\n\n" +
          "Recommendations:\n" +
          "- Rest and ensure adequate hydration\n" +
          "- Take over-the-counter fever reducers like acetaminophen\n" +
          "- Use throat lozenges for sore throat\n" +
          "- Use a humidifier to ease congestion\n\n" +
          "Seek medical attention if:\n" +
          "- Fever persists over 102°F for more than 2 days\n" +
          "- You experience chest pain or difficulty breathing\n" +
          "- You have a severe headache or stiff neck";
      } else if (
        lowerSymptoms.includes("stomach") ||
        lowerSymptoms.includes("nausea") ||
        lowerSymptoms.includes("vomit")
      ) {
        mockResponse =
          "Based on your symptoms of stomach discomfort and nausea, I recommend the following:\n\n" +
          "Possible diagnosis: Gastroenteritis\n\n" +
          "Recommendations:\n" +
          "- Stay hydrated with clear fluids\n" +
          "- Eat bland foods when you can tolerate them\n" +
          "- Avoid dairy, caffeine, alcohol, and fatty foods\n" +
          "- Get plenty of rest\n\n" +
          "Seek medical attention if:\n" +
          "- You have severe abdominal pain\n" +
          "- You notice blood in your vomit or stool\n" +
          "- You show signs of dehydration (extreme thirst, dark urine)";
      } else {
        mockResponse =
          "Based on the symptoms you've described, I recommend scheduling a consultation with your healthcare provider for a proper diagnosis and treatment plan. While I can offer general health information, a medical professional will be able to provide personalized care based on your specific condition and medical history.";
      }

      setAiResponse(mockResponse);
      setIsAiAnalyzing(false);
    }, 2000);
  };

  const handleSaveConsultation = () => {
    if (!selectedPatientId || !symptoms.trim() || !aiResponse) return;

    const selectedPatient = patients.find((p) => p.id === selectedPatientId);
    if (!selectedPatient) return;

    // Extract potential diseases from AI response
    const diseasesMatch = aiResponse.match(/Possible diagnosis: (.*?)(\n|$)/);
    const diseases = diseasesMatch ? [diseasesMatch[1].trim()] : [];

    // Extract symptoms as array
    const symptomsList = symptoms
      .split(/[,.]/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const newConsultation: Consultation = {
      id: `CONS-${Math.random().toString(36).substr(2, 6)}`,
      patientId: selectedPatientId,
      patientName: selectedPatient.name,
      patientImage: selectedPatient.image,
      doctorId: "DR-001", // Mock doctor ID
      doctorName: "Dr. Williams", // Mock doctor name
      date: new Date().toISOString().split("T")[0],
      symptoms: symptomsList,
      diseases: diseases,
      status: "completed",
      notes: aiResponse,
    };

    addConsultation(newConsultation);

    // Reset form
    setSymptoms("");
    setAiResponse("");
    setSelectedPatientId("");
    setShowConsultationDialog(false);
    setActiveTab("recent");
  };

  const openConsultationDetails = (consultation: Consultation) => {
    setSelectedConsultation(consultation);
    setShowConsultationDialog(true);
  };

  // Calculate consultation stats
  const completedConsultations = consultations.filter(
    (c) => c.status === "completed"
  ).length;
  const inProgressConsultations = consultations.filter(
    (c) => c.status === "in-progress"
  ).length;
  const scheduledConsultations = consultations.filter(
    (c) => c.status === "scheduled"
  ).length;
  const totalConsultations = consultations.length;

  // Sort consultations by date (newest first)
  const recentConsultations = useMemo(() => {
    const consultationsToShow = isFiltered
      ? filteredConsultations
      : consultations;
    return [...consultationsToShow]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }, [isFiltered, filteredConsultations, consultations]);

  // Clear filters function
  const clearFilters = () => {
    router.push("/dashboard/consultation");
    setIsFiltered(false);
    setFilteredConsultations([]);
    setSelectedPatientId("");
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
                    <RiBardLine size={22} aria-hidden="true" />
                    <span className="sr-only">Dashboard</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Consultation</BreadcrumbPage>
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
              <h1 className="text-2xl font-semibold">
                AI Medical Consultation
              </h1>
              {isFiltered && selectedPatientId && (
                <div className="flex items-center gap-2">
                  <p className="text-sm text-muted-foreground">
                    Showing consultations for patient:{" "}
                    {patients.find((p) => p.id === selectedPatientId)?.name}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 gap-1"
                    onClick={clearFilters}
                  >
                    <RiArrowLeftLine size={14} />
                    Clear filter
                  </Button>
                </div>
              )}
              {!isFiltered && (
                <p className="text-sm text-muted-foreground">
                  Get AI-powered insights for your medical questions and
                  diagnoses
                </p>
              )}
            </div>
            <Button
              className="px-3"
              onClick={() => {
                setActiveTab("new");
                setSymptoms("");
                setAiResponse("");
                // If we're filtering by patient, keep the selected patient
                if (!isFiltered) {
                  setSelectedPatientId("");
                }
              }}
            >
              Start New Consultation
            </Button>
          </div>

          {/* Stats */}
          <StatsGrid
            stats={[
              {
                title: "Completed Consultations",
                value: completedConsultations.toString(),
                change: {
                  value: "+12%",
                  trend: "up",
                },
                icon: <RiCalendarCheckLine size={20} />,
              },
              {
                title: "In Progress",
                value: inProgressConsultations.toString(),
                change: {
                  value: "0",
                  trend: "neutral",
                },
                icon: <RiPulseLine size={20} />,
              },
              {
                title: "Total Consultations",
                value: totalConsultations.toString(),
                change: {
                  value: "+15%",
                  trend: "up",
                },
                icon: <RiFileListLine size={20} />,
              },
              {
                title: "AI Accuracy Rate",
                value: "94%",
                change: {
                  value: "+2%",
                  trend: "up",
                },
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                  >
                    <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.833 3.337a.596.596 0 0 1 .763.067.59.59 0 0 1 .063.76c-2.18 3.046-3.38 4.678-3.598 4.897a1.5 1.5 0 0 1-2.122-2.122c.374-.373 2.005-1.574 4.894-3.602ZM15.5 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-11 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm2.318-3.596a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414ZM10 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                  </svg>
                ),
              },
            ]}
          />

          {/* Consultation Area */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="new">New Consultation</TabsTrigger>
              <TabsTrigger value="recent">
                {isFiltered ? "Patient Consultations" : "Recent Consultations"}
              </TabsTrigger>
            </TabsList>
            <div className="mt-4">
              <TabsContent value="new">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>New Consultation</CardTitle>
                      <CardDescription>
                        Enter patient details and symptoms to start a
                        consultation
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                          <Label htmlFor="patient">Select Patient</Label>
                          <Select
                            value={selectedPatientId}
                            onValueChange={setSelectedPatientId}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a patient" />
                            </SelectTrigger>
                            <SelectContent>
                              {patients.map((patient) => (
                                <SelectItem key={patient.id} value={patient.id}>
                                  {patient.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="symptoms">
                            Describe symptoms or medical questions
                          </Label>
                          <Textarea
                            id="symptoms"
                            placeholder="Enter symptoms or medical questions here..."
                            className="min-h-[200px]"
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)}
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full"
                          disabled={
                            isAiAnalyzing ||
                            !selectedPatientId ||
                            !symptoms.trim()
                          }
                        >
                          {isAiAnalyzing
                            ? "Analyzing..."
                            : "Submit for AI Analysis"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>AI Analysis</CardTitle>
                      <CardDescription>
                        Results will appear here after analysis
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {isAiAnalyzing ? (
                          <div className="flex flex-col items-center justify-center min-h-[200px]">
                            <div className="animate-pulse flex space-x-2">
                              <div className="h-3 w-3 bg-primary rounded-full"></div>
                              <div className="h-3 w-3 bg-primary rounded-full"></div>
                              <div className="h-3 w-3 bg-primary rounded-full"></div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">
                              Analyzing symptoms...
                            </p>
                          </div>
                        ) : aiResponse ? (
                          <div className="min-h-[200px]">
                            <pre className="whitespace-pre-wrap font-sans">
                              {aiResponse}
                            </pre>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center text-muted-foreground min-h-[200px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mb-3"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 8v4M12 16h.01" />
                            </svg>
                            <p>Submit symptoms to get AI analysis</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    {aiResponse && (
                      <CardFooter>
                        <Button
                          className="w-full"
                          onClick={handleSaveConsultation}
                        >
                          Save Consultation
                        </Button>
                      </CardFooter>
                    )}
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="recent">
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-1">
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          {isFiltered
                            ? "Patient Consultations"
                            : "Recent Consultations"}
                        </CardTitle>
                        <CardDescription>
                          {isFiltered
                            ? "All consultations for the selected patient"
                            : "Click on a consultation to view details"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {recentConsultations.length > 0 ? (
                            recentConsultations.map((consultation) => (
                              <div
                                key={consultation.id}
                                className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 cursor-pointer"
                                onClick={() =>
                                  openConsultationDetails(consultation)
                                }
                              >
                                <div className="flex items-center space-x-3">
                                  <img
                                    src={consultation.patientImage}
                                    alt={consultation.patientName}
                                    className="w-10 h-10 rounded-full"
                                  />
                                  <div>
                                    <p className="font-medium">
                                      {consultation.patientName}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      {new Date(
                                        consultation.date
                                      ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                      })}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end">
                                  {consultation.diseases.length > 0 ? (
                                    <Badge variant="outline" className="mb-1">
                                      {consultation.diseases[0]}
                                    </Badge>
                                  ) : (
                                    <Badge variant="outline" className="mb-1">
                                      Consultation
                                    </Badge>
                                  )}
                                  <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-600">
                                    {consultation.status === "completed"
                                      ? "Completed"
                                      : consultation.status === "in-progress"
                                      ? "In Progress"
                                      : "Scheduled"}
                                  </span>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="text-center py-4 text-muted-foreground">
                              {isFiltered
                                ? "No consultations found for this patient."
                                : "No consultations found."}
                            </div>
                          )}

                          {!isFiltered && consultations.length > 5 && (
                            <Button variant="outline" className="w-full">
                              View All Consultations
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </SidebarInset>

      {/* Consultation Details Dialog */}
      <Dialog
        open={showConsultationDialog}
        onOpenChange={setShowConsultationDialog}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl">Consultation Details</DialogTitle>
            <DialogDescription>
              {selectedConsultation &&
                new Date(selectedConsultation.date).toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
            </DialogDescription>
          </DialogHeader>

          {selectedConsultation && (
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedConsultation.patientImage}
                  alt={selectedConsultation.patientName}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium text-lg">
                    {selectedConsultation.patientName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Patient ID: {selectedConsultation.patientId}
                  </p>
                </div>
              </div>

              <Separator />

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium mb-2">Symptoms</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedConsultation.symptoms.map((symptom, index) => (
                      <Badge key={index} variant="secondary">
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Diagnosis</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedConsultation.diseases.length > 0 ? (
                      selectedConsultation.diseases.map((disease, index) => (
                        <Badge key={index} variant="default">
                          {disease}
                        </Badge>
                      ))
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        No specific diagnosis recorded
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">
                  Notes & Recommendations
                </h3>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <pre className="whitespace-pre-wrap font-sans text-sm">
                      {selectedConsultation.notes}
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    Attending physician:
                  </span>
                  <span className="text-sm">
                    {selectedConsultation.doctorName}
                  </span>
                </div>

                <Badge variant="outline">
                  {selectedConsultation.status === "completed"
                    ? "Completed"
                    : selectedConsultation.status === "in-progress"
                    ? "In Progress"
                    : "Scheduled"}
                </Badge>
              </div>
            </div>
          )}

          <DialogFooter className="sm:justify-between">
            <Button variant="outline" asChild>
              <DialogClose>Close</DialogClose>
            </Button>
            <Button>View Full Medical Record</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  );
}
