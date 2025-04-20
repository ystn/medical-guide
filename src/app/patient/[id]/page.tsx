import prisma from "@/lib/prisma";
import PatientProfile from "@/pages/PatientProfile";
import React from "react";

interface PatientPageProps {
  params: Promise<{
    id: string;
  }>;
}

const PatientPage = async ({ params }: PatientPageProps) => {
  const { id } = await params;
  console.log(id);
  const patient = await prisma.patient.findUnique({
    where: { id },
    include: {
      user: true,
    },
  });
  if (!patient) {
    return <div>Patient not found</div>;
  }

  return <PatientProfile patient={patient} />;
};

export default PatientPage;
