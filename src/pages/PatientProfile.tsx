import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import {
  CalendarIcon,
  MapPinIcon,
  MarsIcon,
  PhoneIcon,
  UserIcon,
  VenusIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface PatientProfileProps {
  patient: any;
}

export default function PatientProfile({ patient }: PatientProfileProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {/* Left Panel (Patient Info) */}
      <div className="col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Patient Information</CardTitle>
            <CardDescription>Basic details about the patient</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <UserIcon size={20} />
              <span>{patient?.user?.name}</span>
            </div>
            <div className="flex items-center gap-2">
              {patient?.gender === "male" ? (
                <MarsIcon size={20} />
              ) : (
                <VenusIcon size={20} />
              )}
              <span>
                {patient?.gender?.charAt(0).toUpperCase() +
                  patient?.gender.slice(1)}
              </span>
            </div>
            {patient.birthdate && (
              <div className="flex items-center gap-2">
                <CalendarIcon size={20} />
                <span>{format(patient.birthdate)}</span>
              </div>
            )}
            {patient.user?.phone && (
              <div className="flex items-center gap-2">
                <PhoneIcon size={20} />
                <span>{patient.user?.phone}</span>
              </div>
            )}
            {patient.user?.address && (
              <div className="flex items-center gap-2">
                <MapPinIcon size={20} />
                <span>{patient.user?.address}</span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Right Panel (Consultations History) */}
      <div className="col-span-1 md:col-span-2 lg:col-span-4">
        <Card>
          <CardHeader>
            <CardTitle>Consultation History</CardTitle>
            <CardDescription>
              Recent consultations in chronological order
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {patient.consultations?.map((consultation) => (
              <div key={consultation.id} className="border p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{consultation.date}</span>
                  <Button variant="outline" size="sm">
                    View Prescription
                  </Button>
                </div>
                <div className="space-y-2">
                  <div>
                    <strong>Symptoms:</strong>{" "}
                    {consultation.symptoms.join(", ")}
                  </div>
                  <div>
                    <strong>Diseases:</strong>{" "}
                    {consultation.diseases.join(", ")}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
