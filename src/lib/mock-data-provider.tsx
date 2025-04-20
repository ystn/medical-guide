"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define types for our data models
export interface Patient {
  id: string;
  image: string;
  name: string;
  status: string;
  patientType: string;
  insurance: boolean;
  doctor: {
    name: string;
    image: string;
  };
  vitalSigns: number;
  appointmentDate: string;
  // Additional fields for patient details
  email: string;
  phone: string;
  birthDate: string;
  address: string;
  medicalHistory: string[];
  allergies: string[];
}

export interface Medicament {
  id: string;
  code: string;
  name: string;
  description: string;
  sideEffects: string[];
  contraindications: string[];
  interactions: string[];
  quantityPerPack: number;
  unit: string;
}

export interface Consultation {
  id: string;
  patientId: string;
  patientName: string;
  patientImage: string;
  doctorId: string;
  doctorName: string;
  date: string;
  symptoms: string[];
  diseases: string[];
  status: "completed" | "in-progress" | "scheduled";
  notes: string;
}

export interface PrescriptionLine {
  id: string;
  prescriptionId: string;
  medicamentId: string;
  medicamentName: string;
  dosage: number;
  duration: string;
  morning: boolean;
  afternoon: boolean;
  evening: boolean;
  night: boolean;
  foodOrder: "before" | "after" | "with" | "none";
}

export interface Prescription {
  id: string;
  doctorId: string;
  doctorName: string;
  patientId: string;
  patientName: string;
  date: string;
  dosage: string;
  duration: string;
  consultationId: string;
  lines: PrescriptionLine[];
}

export interface Reminder {
  id: string;
  date: string;
  time: string;
  reminderData: {
    id: string;
    reminderId: string;
    prescriptionLineId: string;
    medicamentName: string;
    taken: boolean;
  }[];
}

interface MockDataContextType {
  patients: Patient[];
  medicaments: Medicament[];
  consultations: Consultation[];
  prescriptions: Prescription[];
  reminders: Reminder[];
  addPatient: (patient: Patient) => void;
  updatePatient: (patient: Patient) => void;
  removePatient: (id: string) => void;
  addConsultation: (consultation: Consultation) => void;
  updateConsultation: (consultation: Consultation) => void;
  removeConsultation: (id: string) => void;
  addPrescription: (prescription: Prescription) => void;
  updatePrescription: (prescription: Prescription) => void;
  removePrescription: (id: string) => void;
  addReminder: (reminder: Reminder) => void;
  updateReminder: (reminder: Reminder) => void;
  removeReminder: (id: string) => void;
  updateReminderData: (
    reminderId: string,
    reminderDataId: string,
    taken: boolean
  ) => void;
  getPatientConsultations: (patientId: string) => Consultation[];
  getPatientPrescriptions: (patientId: string) => Prescription[];
  getPatientReminders: (patientId: string) => Reminder[];
}

// Create default mock data
const defaultPatients: Patient[] = [
  {
    id: "PT-4521",
    image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=EAECF0",
    name: "Sarah Johnson",
    status: "Stable",
    patientType: "Outpatient",
    insurance: true,
    doctor: {
      name: "Dr. Williams",
      image: "https://ui-avatars.com/api/?name=Dr+Williams&background=E3F2FD",
    },
    vitalSigns: 92,
    appointmentDate: "Apr 21, 2025",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    birthDate: "1985-06-12",
    address: "123 Main St, Anytown, CA 91234",
    medicalHistory: ["Asthma", "Type 2 Diabetes"],
    allergies: ["Penicillin", "Pollen"],
  },
  {
    id: "PT-3782",
    image: "https://ui-avatars.com/api/?name=Michael+Chen&background=EAECF0",
    name: "Michael Chen",
    status: "Critical",
    patientType: "Inpatient",
    insurance: true,
    doctor: {
      name: "Dr. Roberts",
      image: "https://ui-avatars.com/api/?name=Dr+Roberts&background=E3F2FD",
    },
    vitalSigns: 35,
    appointmentDate: "Apr 20, 2025",
    email: "michael.chen@example.com",
    phone: "+1 (555) 234-5678",
    birthDate: "1978-09-23",
    address: "456 Oak Ave, Springfield, IL 62704",
    medicalHistory: ["Heart Disease", "Hypertension"],
    allergies: ["Sulfa drugs", "Shellfish"],
  },
  {
    id: "PT-2193",
    image: "https://ui-avatars.com/api/?name=Emily+Garcia&background=EAECF0",
    name: "Emily Garcia",
    status: "Stable",
    patientType: "Outpatient",
    insurance: true,
    doctor: {
      name: "Dr. Roberts",
      image: "https://ui-avatars.com/api/?name=Dr+Roberts&background=E3F2FD",
    },
    vitalSigns: 87,
    appointmentDate: "Apr 22, 2025",
    email: "emily.garcia@example.com",
    phone: "+1 (555) 345-6789",
    birthDate: "1990-03-15",
    address: "789 Pine St, Portland, OR 97201",
    medicalHistory: ["Migraine", "Anxiety"],
    allergies: ["Ibuprofen"],
  },
  {
    id: "PT-6254",
    image: "https://ui-avatars.com/api/?name=James+Wilson&background=EAECF0",
    name: "James Wilson",
    status: "Pending",
    patientType: "Outpatient",
    insurance: false,
    doctor: {
      name: "Dr. Thompson",
      image: "https://ui-avatars.com/api/?name=Dr+Thompson&background=E3F2FD",
    },
    vitalSigns: 68,
    appointmentDate: "Apr 20, 2025",
    email: "james.wilson@example.com",
    phone: "+1 (555) 456-7890",
    birthDate: "1965-11-30",
    address: "101 Maple Dr, Boston, MA 02108",
    medicalHistory: ["COPD", "Arthritis"],
    allergies: ["Aspirin", "Latex"],
  },
  {
    id: "PT-7832",
    image: "https://ui-avatars.com/api/?name=Maria+Rodriguez&background=EAECF0",
    name: "Maria Rodriguez",
    status: "Stable",
    patientType: "Outpatient",
    insurance: true,
    doctor: {
      name: "Dr. Roberts",
      image: "https://ui-avatars.com/api/?name=Dr+Roberts&background=E3F2FD",
    },
    vitalSigns: 95,
    appointmentDate: "Apr 23, 2025",
    email: "maria.rodriguez@example.com",
    phone: "+1 (555) 567-8901",
    birthDate: "1988-07-18",
    address: "202 Cedar Ave, Miami, FL 33101",
    medicalHistory: ["Eczema"],
    allergies: ["Dairy"],
  },
];

const defaultMedicaments: Medicament[] = [
  {
    id: "MED-1001",
    code: "AMOX-500",
    name: "Amoxicillin",
    description:
      "Broad-spectrum antibiotic effective against many bacterial infections",
    sideEffects: ["Diarrhea", "Nausea", "Rash"],
    contraindications: ["Previous allergic reaction to penicillins"],
    interactions: ["Probenecid", "Allopurinol"],
    quantityPerPack: 20,
    unit: "capsule",
  },
  {
    id: "MED-1002",
    code: "IBUP-200",
    name: "Ibuprofen",
    description: "Non-steroidal anti-inflammatory drug used for pain relief",
    sideEffects: ["Stomach pain", "Heartburn", "Dizziness"],
    contraindications: ["Heart problems", "History of stomach bleeding"],
    interactions: ["Aspirin", "Blood thinners", "ACE inhibitors"],
    quantityPerPack: 30,
    unit: "tablet",
  },
  {
    id: "MED-1003",
    code: "LISIN-10",
    name: "Lisinopril",
    description: "ACE inhibitor used to treat high blood pressure",
    sideEffects: ["Dry cough", "Dizziness", "Headache"],
    contraindications: ["Pregnancy", "History of angioedema"],
    interactions: ["Potassium supplements", "NSAIDs", "Diuretics"],
    quantityPerPack: 28,
    unit: "tablet",
  },
  {
    id: "MED-1004",
    code: "SALBU-100",
    name: "Salbutamol",
    description: "Bronchodilator used to treat asthma and COPD",
    sideEffects: ["Tremor", "Headache", "Rapid heartbeat"],
    contraindications: ["Severe heart disease"],
    interactions: ["Beta blockers", "Diuretics"],
    quantityPerPack: 1,
    unit: "inhaler",
  },
  {
    id: "MED-1005",
    code: "METF-500",
    name: "Metformin",
    description: "Oral medication for type 2 diabetes",
    sideEffects: ["Nausea", "Diarrhea", "Abdominal discomfort"],
    contraindications: ["Kidney disease", "Liver disease"],
    interactions: ["Cimetidine", "Certain contrast dyes"],
    quantityPerPack: 56,
    unit: "tablet",
  },
];

const defaultConsultations: Consultation[] = [
  {
    id: "CONS-001",
    patientId: "PT-4521",
    patientName: "Sarah Johnson",
    patientImage:
      "https://ui-avatars.com/api/?name=Sarah+Johnson&background=EAECF0",
    doctorId: "DR-001",
    doctorName: "Dr. Williams",
    date: "2025-04-18",
    symptoms: ["Wheezing", "Shortness of breath", "Chest tightness"],
    diseases: ["Asthma exacerbation"],
    status: "completed",
    notes:
      "Patient presents with moderate asthma symptoms. Advised to continue current medications with adjusted dosage.",
  },
  {
    id: "CONS-002",
    patientId: "PT-3782",
    patientName: "Michael Chen",
    patientImage:
      "https://ui-avatars.com/api/?name=Michael+Chen&background=EAECF0",
    doctorId: "DR-002",
    doctorName: "Dr. Roberts",
    date: "2025-04-15",
    symptoms: ["Chest pain", "Shortness of breath", "Fatigue"],
    diseases: ["Acute coronary syndrome"],
    status: "completed",
    notes:
      "Patient admitted to ICU with suspected myocardial infarction. Immediate intervention required.",
  },
  {
    id: "CONS-003",
    patientId: "PT-2193",
    patientName: "Emily Garcia",
    patientImage:
      "https://ui-avatars.com/api/?name=Emily+Garcia&background=EAECF0",
    doctorId: "DR-002",
    doctorName: "Dr. Roberts",
    date: "2025-04-12",
    symptoms: ["Severe headache", "Nausea", "Light sensitivity"],
    diseases: ["Migraine"],
    status: "completed",
    notes:
      "Patient experiencing recurring migraine episode. Adjusted prophylactic medication and provided acute pain relief.",
  },
];

const defaultPrescriptions: Prescription[] = [
  {
    id: "PRESC-001",
    doctorId: "DR-001",
    doctorName: "Dr. Williams",
    patientId: "PT-4521",
    patientName: "Sarah Johnson",
    date: "2025-04-18",
    dosage: "As directed",
    duration: "14 days",
    consultationId: "CONS-001",
    lines: [
      {
        id: "PRESC-001-LINE-1",
        prescriptionId: "PRESC-001",
        medicamentId: "MED-1004",
        medicamentName: "Salbutamol",
        dosage: 2,
        duration: "14 days",
        morning: true,
        afternoon: true,
        evening: true,
        night: false,
        foodOrder: "after",
      },
      {
        id: "PRESC-001-LINE-2",
        prescriptionId: "PRESC-001",
        medicamentId: "MED-1001",
        medicamentName: "Amoxicillin",
        dosage: 1,
        duration: "7 days",
        morning: true,
        afternoon: false,
        evening: true,
        night: false,
        foodOrder: "with",
      },
    ],
  },
  {
    id: "PRESC-002",
    doctorId: "DR-002",
    doctorName: "Dr. Roberts",
    patientId: "PT-3782",
    patientName: "Michael Chen",
    date: "2025-04-15",
    dosage: "As directed",
    duration: "30 days",
    consultationId: "CONS-002",
    lines: [
      {
        id: "PRESC-002-LINE-1",
        prescriptionId: "PRESC-002",
        medicamentId: "MED-1003",
        medicamentName: "Lisinopril",
        dosage: 1,
        duration: "30 days",
        morning: true,
        afternoon: false,
        evening: false,
        night: false,
        foodOrder: "before",
      },
    ],
  },
];

const defaultReminders: Reminder[] = [
  {
    id: "REM-001",
    date: "2025-04-20",
    time: "08:00",
    reminderData: [
      {
        id: "REM-001-DATA-1",
        reminderId: "REM-001",
        prescriptionLineId: "PRESC-001-LINE-1",
        medicamentName: "Salbutamol",
        taken: false,
      },
    ],
  },
  {
    id: "REM-002",
    date: "2025-04-20",
    time: "12:00",
    reminderData: [
      {
        id: "REM-002-DATA-1",
        reminderId: "REM-002",
        prescriptionLineId: "PRESC-001-LINE-1",
        medicamentName: "Salbutamol",
        taken: false,
      },
    ],
  },
  {
    id: "REM-003",
    date: "2025-04-20",
    time: "18:00",
    reminderData: [
      {
        id: "REM-003-DATA-1",
        reminderId: "REM-003",
        prescriptionLineId: "PRESC-001-LINE-1",
        medicamentName: "Salbutamol",
        taken: false,
      },
      {
        id: "REM-003-DATA-2",
        reminderId: "REM-003",
        prescriptionLineId: "PRESC-001-LINE-2",
        medicamentName: "Amoxicillin",
        taken: false,
      },
    ],
  },
];

// Create the context
export const MockDataContext = createContext<MockDataContextType>({
  patients: [],
  medicaments: [],
  consultations: [],
  prescriptions: [],
  reminders: [],
  addPatient: () => {},
  updatePatient: () => {},
  removePatient: () => {},
  addConsultation: () => {},
  updateConsultation: () => {},
  removeConsultation: () => {},
  addPrescription: () => {},
  updatePrescription: () => {},
  removePrescription: () => {},
  addReminder: () => {},
  updateReminder: () => {},
  removeReminder: () => {},
  updateReminderData: () => {},
  getPatientConsultations: () => [],
  getPatientPrescriptions: () => [],
  getPatientReminders: () => [],
});

// Helper function to generate a random ID
const generateId = (prefix: string) => {
  return `${prefix}-${Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0")}`;
};

// Provider component
export const MockDataProvider = ({ children }: { children: ReactNode }) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [medicaments, setMedicaments] = useState<Medicament[]>([]);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const storedPatients = localStorage.getItem("medical-guide-patients");
    const storedMedicaments = localStorage.getItem("medical-guide-medicaments");
    const storedConsultations = localStorage.getItem(
      "medical-guide-consultations"
    );
    const storedPrescriptions = localStorage.getItem(
      "medical-guide-prescriptions"
    );
    const storedReminders = localStorage.getItem("medical-guide-reminders");

    setPatients(storedPatients ? JSON.parse(storedPatients) : defaultPatients);
    setMedicaments(
      storedMedicaments ? JSON.parse(storedMedicaments) : defaultMedicaments
    );
    setConsultations(
      storedConsultations
        ? JSON.parse(storedConsultations)
        : defaultConsultations
    );
    setPrescriptions(
      storedPrescriptions
        ? JSON.parse(storedPrescriptions)
        : defaultPrescriptions
    );
    setReminders(
      storedReminders ? JSON.parse(storedReminders) : defaultReminders
    );
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    if (patients.length > 0) {
      localStorage.setItem("medical-guide-patients", JSON.stringify(patients));
    }
  }, [patients]);

  useEffect(() => {
    if (medicaments.length > 0) {
      localStorage.setItem(
        "medical-guide-medicaments",
        JSON.stringify(medicaments)
      );
    }
  }, [medicaments]);

  useEffect(() => {
    if (consultations.length > 0) {
      localStorage.setItem(
        "medical-guide-consultations",
        JSON.stringify(consultations)
      );
    }
  }, [consultations]);

  useEffect(() => {
    if (prescriptions.length > 0) {
      localStorage.setItem(
        "medical-guide-prescriptions",
        JSON.stringify(prescriptions)
      );
    }
  }, [prescriptions]);

  useEffect(() => {
    if (reminders.length > 0) {
      localStorage.setItem(
        "medical-guide-reminders",
        JSON.stringify(reminders)
      );
    }
  }, [reminders]);

  // Define functions for managing patients
  const addPatient = (patient: Patient) => {
    if (!patient.id) {
      patient.id = generateId("PT");
    }
    setPatients([...patients, patient]);
  };

  const updatePatient = (updatedPatient: Patient) => {
    setPatients(
      patients.map((patient) =>
        patient.id === updatedPatient.id ? updatedPatient : patient
      )
    );
  };

  const removePatient = (id: string) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  // Define functions for managing consultations
  const addConsultation = (consultation: Consultation) => {
    if (!consultation.id) {
      consultation.id = generateId("CONS");
    }
    setConsultations([...consultations, consultation]);
  };

  const updateConsultation = (updatedConsultation: Consultation) => {
    setConsultations(
      consultations.map((consultation) =>
        consultation.id === updatedConsultation.id
          ? updatedConsultation
          : consultation
      )
    );
  };

  const removeConsultation = (id: string) => {
    setConsultations(
      consultations.filter((consultation) => consultation.id !== id)
    );
  };

  // Define functions for managing prescriptions
  const addPrescription = (prescription: Prescription) => {
    if (!prescription.id) {
      prescription.id = generateId("PRESC");
    }
    setPrescriptions([...prescriptions, prescription]);
  };

  const updatePrescription = (updatedPrescription: Prescription) => {
    setPrescriptions(
      prescriptions.map((prescription) =>
        prescription.id === updatedPrescription.id
          ? updatedPrescription
          : prescription
      )
    );
  };

  const removePrescription = (id: string) => {
    setPrescriptions(
      prescriptions.filter((prescription) => prescription.id !== id)
    );
  };

  // Define functions for managing reminders
  const addReminder = (reminder: Reminder) => {
    if (!reminder.id) {
      reminder.id = generateId("REM");
    }
    setReminders([...reminders, reminder]);
  };

  const updateReminder = (updatedReminder: Reminder) => {
    setReminders(
      reminders.map((reminder) =>
        reminder.id === updatedReminder.id ? updatedReminder : reminder
      )
    );
  };

  const removeReminder = (id: string) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const updateReminderData = (
    reminderId: string,
    reminderDataId: string,
    taken: boolean
  ) => {
    setReminders(
      reminders.map((reminder) => {
        if (reminder.id === reminderId) {
          return {
            ...reminder,
            reminderData: reminder.reminderData.map((data) => {
              if (data.id === reminderDataId) {
                return { ...data, taken };
              }
              return data;
            }),
          };
        }
        return reminder;
      })
    );
  };

  // Helper functions
  const getPatientConsultations = (patientId: string) => {
    return consultations.filter(
      (consultation) => consultation.patientId === patientId
    );
  };

  const getPatientPrescriptions = (patientId: string) => {
    return prescriptions.filter(
      (prescription) => prescription.patientId === patientId
    );
  };

  const getPatientReminders = (patientId: string) => {
    // Get all prescription IDs for this patient
    const patientPrescriptionIds = prescriptions
      .filter((prescription) => prescription.patientId === patientId)
      .map((prescription) => prescription.id);

    // Get all prescription line IDs for these prescriptions
    const prescriptionLineIds = prescriptions
      .filter((prescription) =>
        patientPrescriptionIds.includes(prescription.id)
      )
      .flatMap((prescription) => prescription.lines.map((line) => line.id));

    // Find reminders that have reminderData referencing these prescription lines
    return reminders.filter((reminder) =>
      reminder.reminderData.some((data) =>
        prescriptionLineIds.includes(data.prescriptionLineId)
      )
    );
  };

  return (
    <MockDataContext.Provider
      value={{
        patients,
        medicaments,
        consultations,
        prescriptions,
        reminders,
        addPatient,
        updatePatient,
        removePatient,
        addConsultation,
        updateConsultation,
        removeConsultation,
        addPrescription,
        updatePrescription,
        removePrescription,
        addReminder,
        updateReminder,
        removeReminder,
        updateReminderData,
        getPatientConsultations,
        getPatientPrescriptions,
        getPatientReminders,
      }}
    >
      {children}
    </MockDataContext.Provider>
  );
};

// Custom hook for using the context
export const useMockData = () => {
  const context = useContext(MockDataContext);
  if (!context) {
    throw new Error("useMockData must be used within a MockDataProvider");
  }
  return context;
};
