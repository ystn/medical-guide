"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiErrorWarningLine,
  RiCloseCircleLine,
  RiDeleteBinLine,
  RiFilter3Line,
  RiSearch2Line,
  RiHeartPulseLine,
  RiCheckLine,
  RiMoreLine,
  RiFileListLine,
  RiCalendarEventLine,
  RiUserAddLine,
  RiEye2Line,
} from "@remixicon/react";
import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const statusFilterFn: FilterFn<Patient> = (
  row,
  columnId,
  filterValue: string[]
) => {
  if (!filterValue?.length) return true;
  const status = row.getValue(columnId) as string;
  return filterValue.includes(status);
};

interface GetColumnsProps {
  openPatientDetails: (patient: Patient) => void;
}

const getColumns = ({
  openPatientDetails,
}: GetColumnsProps): ColumnDef<Patient>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    size: 28,
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: "Patient Name",
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Image
          className="rounded-full"
          src={row.original.image}
          width={32}
          height={32}
          alt={row.getValue("name")}
        />
        <div className="font-medium">{row.getValue("name")}</div>
      </div>
    ),
    size: 180,
    enableHiding: false,
  },
  {
    header: "Patient ID",
    accessorKey: "id",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.getValue("id")}</span>
    ),
    size: 110,
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => (
      <div className="flex items-center h-full">
        <Badge
          variant="outline"
          className={cn(
            "gap-1 py-0.5 px-2 text-sm",
            row.original.status === "Pending"
              ? "text-amber-600"
              : row.original.status === "Critical"
              ? "text-red-600"
              : row.original.status === "Stable"
              ? "text-emerald-600"
              : "text-muted-foreground"
          )}
        >
          {row.original.status === "Stable" && (
            <RiCheckLine
              className="text-emerald-500"
              size={14}
              aria-hidden="true"
            />
          )}
          {row.original.status === "Critical" && "! "}
          {row.original.status === "Pending" && "- "}
          {row.original.status}
        </Badge>
      </div>
    ),
    size: 110,
    filterFn: statusFilterFn,
  },
  {
    header: "Patient Type",
    accessorKey: "patientType",
    cell: ({ row }) => (
      <span className="text-muted-foreground">
        {row.getValue("patientType")}
      </span>
    ),
    size: 140,
  },
  {
    header: "Insurance",
    accessorKey: "insurance",
    cell: ({ row }) => (
      <div>
        <span className="sr-only">
          {row.original.insurance ? "Insured" : "Uninsured"}
        </span>
        <RiFileListLine
          size={20}
          className={cn(
            row.original.insurance
              ? "fill-emerald-600"
              : "fill-muted-foreground/50"
          )}
          aria-hidden="true"
        />
      </div>
    ),
    size: 90,
  },
  {
    header: "Primary Doctor",
    accessorKey: "doctor",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Image
          className="rounded-full"
          src={row.original.doctor.image}
          width={20}
          height={20}
          alt={row.original.doctor.name}
        />
        <div className="text-muted-foreground">{row.original.doctor.name}</div>
      </div>
    ),
    size: 140,
  },
  {
    header: "Vital Signs",
    accessorKey: "vitalSigns",
    cell: ({ row }) => {
      const value = row.getValue("vitalSigns") as number;
      return (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex h-full w-full items-center">
                <Progress
                  className={cn(
                    "h-1 max-w-14",
                    value < 40
                      ? "text-red-500"
                      : value < 70
                      ? "text-amber-500"
                      : "text-emerald-500"
                  )}
                  value={value}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent align="start" sideOffset={-8}>
              <p>{value}% normal</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
    size: 80,
  },
  {
    header: "Next Appointment",
    accessorKey: "appointmentDate",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <RiCalendarEventLine size={16} className="text-muted-foreground" />
        <span className="text-muted-foreground">
          {row.getValue("appointmentDate")}
        </span>
      </div>
    ),
    size: 140,
  },
  {
    id: "actions",
    header: () => <span className="sr-only">Actions</span>,
    cell: ({ row }) => (
      <div className="flex justify-end">
        <Button
          size="icon"
          variant="ghost"
          className="shadow-none text-muted-foreground/60"
          onClick={() => openPatientDetails(row.original)}
          aria-label="View patient details"
        >
          <RiEye2Line className="size-5" size={20} aria-hidden="true" />
        </Button>
      </div>
    ),
    size: 60,
    enableHiding: false,
  },
];

export default function PatientsTable() {
  const {
    patients,
    updatePatient,
    removePatient,
    medicaments,
    addPrescription,
    getPatientPrescriptions,
  } = useMockData();
  const router = useRouter();
  const id = useId();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [showPatientDialog, setShowPatientDialog] = useState(false);
  const [showPrescriptionDialog, setShowPrescriptionDialog] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isUpdatePending, startUpdateTransition] = useTransition();

  // State for prescription creation
  const [newPrescription, setNewPrescription] = useState<{
    medicamentId: string;
    dosage: number;
    duration: string;
    morning: boolean;
    afternoon: boolean;
    evening: boolean;
    night: boolean;
    foodOrder: "before" | "after" | "with" | "none";
  }>({
    medicamentId: "",
    dosage: 1,
    duration: "7 days",
    morning: true,
    afternoon: false,
    evening: false,
    night: false,
    foodOrder: "after",
  });

  const [patientPrescriptions, setPatientPrescriptions] = useState<any[]>([]);

  // Load patient prescriptions when patient changes
  useEffect(() => {
    if (selectedPatient) {
      const prescriptions = getPatientPrescriptions(selectedPatient.id);
      setPatientPrescriptions(prescriptions);
    }
  }, [selectedPatient, getPatientPrescriptions]);

  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "name",
      desc: false,
    },
  ]);

  const openPatientDetails = (patient: Patient) => {
    setSelectedPatient(patient);
    setShowPatientDialog(true);
  };

  const handleCreatePrescription = () => {
    if (!selectedPatient || !newPrescription.medicamentId) return;

    // Find the medicament name
    const selectedMedicament = medicaments.find(
      (med) => med.id === newPrescription.medicamentId
    );
    if (!selectedMedicament) return;

    // Create a prescription line
    const prescriptionLine = {
      id: `PRESC-LINE-${Math.random().toString(36).substr(2, 9)}`,
      prescriptionId: "",
      medicamentId: newPrescription.medicamentId,
      medicamentName: selectedMedicament.name,
      dosage: newPrescription.dosage,
      duration: newPrescription.duration,
      morning: newPrescription.morning,
      afternoon: newPrescription.afternoon,
      evening: newPrescription.evening,
      night: newPrescription.night,
      foodOrder: newPrescription.foodOrder,
    };

    // Create a prescription
    const prescription = {
      id: `PRESC-${Math.random().toString(36).substr(2, 9)}`,
      doctorId: "DR-001", // Mock doctor ID
      doctorName: "Dr. Williams", // Mock doctor name
      patientId: selectedPatient.id,
      patientName: selectedPatient.name,
      date: new Date().toISOString().split("T")[0],
      dosage: "As directed",
      duration: newPrescription.duration,
      consultationId: "",
      lines: [prescriptionLine],
    };

    // Update the prescription line's prescriptionId
    prescription.lines[0].prescriptionId = prescription.id;

    // Add the prescription to the mock data
    addPrescription(prescription);

    // Update local state
    setPatientPrescriptions([...patientPrescriptions, prescription]);

    // Reset form and close dialog
    setNewPrescription({
      medicamentId: "",
      dosage: 1,
      duration: "7 days",
      morning: true,
      afternoon: false,
      evening: false,
      night: false,
      foodOrder: "after",
    });
    setShowPrescriptionDialog(false);
  };

  const handleDeleteRows = () => {
    const selectedRows = table.getSelectedRowModel().rows;
    selectedRows.forEach((row) => {
      removePatient(row.original.id);
    });
    table.resetRowSelection();
  };

  const handleStatusUpdate = (patient: Patient, newStatus: string) => {
    startUpdateTransition(() => {
      updatePatient({
        ...patient,
        status: newStatus,
      });
    });
  };

  const handleInsuranceToggle = (patient: Patient) => {
    startUpdateTransition(() => {
      updatePatient({
        ...patient,
        insurance: !patient.insurance,
      });
    });
  };

  const columns = useMemo(
    () =>
      getColumns({
        openPatientDetails,
      }),
    []
  );

  const table = useReactTable({
    data: patients,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    enableSortingRemoval: false,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    state: {
      sorting,
      pagination,
      columnFilters,
      columnVisibility,
    },
  });

  // Extract complex expressions into separate variables
  const statusColumn = table.getColumn("status");
  const statusFacetedValues = statusColumn?.getFacetedUniqueValues();
  const statusFilterValue = statusColumn?.getFilterValue();

  // Update useMemo hooks with simplified dependencies
  const uniqueStatusValues = useMemo(() => {
    if (!statusColumn) return [];
    const values = Array.from(statusFacetedValues?.keys() ?? []);
    return values.sort();
  }, [statusColumn, statusFacetedValues]);

  const statusCounts = useMemo(() => {
    if (!statusColumn) return new Map();
    return statusFacetedValues ?? new Map();
  }, [statusColumn, statusFacetedValues]);

  const selectedStatuses = useMemo(() => {
    return (statusFilterValue as string[]) ?? [];
  }, [statusFilterValue]);

  const handleStatusChange = (checked: boolean, value: string) => {
    const filterValue = table.getColumn("status")?.getFilterValue() as string[];
    const newFilterValue = filterValue ? [...filterValue] : [];

    if (checked) {
      newFilterValue.push(value);
    } else {
      const index = newFilterValue.indexOf(value);
      if (index > -1) {
        newFilterValue.splice(index, 1);
      }
    }

    table
      .getColumn("status")
      ?.setFilterValue(newFilterValue.length ? newFilterValue : undefined);
  };

  return (
    <div className="space-y-4">
      {/* Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Left side */}
        <div className="flex items-center gap-3">
          {/* Filter by name */}
          <div className="relative">
            <Input
              id={`${id}-input`}
              ref={inputRef}
              className={cn(
                "peer min-w-60 ps-9 bg-background bg-gradient-to-br from-accent/60 to-accent",
                Boolean(table.getColumn("name")?.getFilterValue()) && "pe-9"
              )}
              value={
                (table.getColumn("name")?.getFilterValue() ?? "") as string
              }
              onChange={(e) =>
                table.getColumn("name")?.setFilterValue(e.target.value)
              }
              placeholder="Search by patient name"
              type="text"
              aria-label="Search by patient name"
            />
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 text-muted-foreground/60 peer-disabled:opacity-50">
              <RiSearch2Line size={20} aria-hidden="true" />
            </div>
            {Boolean(table.getColumn("name")?.getFilterValue()) && (
              <button
                className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/60 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Clear filter"
                onClick={() => {
                  table.getColumn("name")?.setFilterValue("");
                  if (inputRef.current) {
                    inputRef.current.focus();
                  }
                }}
              >
                <RiCloseCircleLine size={16} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Delete button */}
          {table.getSelectedRowModel().rows.length > 0 && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="ml-auto" variant="outline">
                  <RiDeleteBinLine
                    className="-ms-1 opacity-60"
                    size={16}
                    aria-hidden="true"
                  />
                  Delete
                  <span className="-me-1 ms-1 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
                    {table.getSelectedRowModel().rows.length}
                  </span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
                  <div
                    className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border"
                    aria-hidden="true"
                  >
                    <RiErrorWarningLine className="opacity-80" size={16} />
                  </div>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete{" "}
                      {table.getSelectedRowModel().rows.length} selected{" "}
                      {table.getSelectedRowModel().rows.length === 1
                        ? "patient record"
                        : "patient records"}
                      .
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteRows}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
          {/* Filter by status */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <RiFilter3Line
                  className="size-5 -ms-1.5 text-muted-foreground/60"
                  size={20}
                  aria-hidden="true"
                />
                Filter
                {selectedStatuses.length > 0 && (
                  <span className="-me-1 ms-3 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
                    {selectedStatuses.length}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto min-w-36 p-3" align="end">
              <div className="space-y-3">
                <div className="text-xs font-medium uppercase text-muted-foreground/60">
                  Patient Status
                </div>
                <div className="space-y-3">
                  {uniqueStatusValues.map((value, i) => (
                    <div key={value} className="flex items-center gap-2">
                      <Checkbox
                        id={`${id}-${i}`}
                        checked={selectedStatuses.includes(value)}
                        onCheckedChange={(checked: boolean) =>
                          handleStatusChange(checked, value)
                        }
                      />
                      <Label
                        htmlFor={`${id}-${i}`}
                        className="flex grow justify-between gap-2 font-normal"
                      >
                        {value}{" "}
                        <span className="ms-2 text-xs text-muted-foreground">
                          {statusCounts.get(value)}
                        </span>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
          {/* New patient button */}
          <Button
            variant="outline"
            onClick={() =>
              window.document.getElementById("add-patient-btn")?.click()
            }
          >
            <RiUserAddLine
              className="size-5 -ms-1.5 text-muted-foreground/60"
              size={20}
              aria-hidden="true"
            />
            Add Patient
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table className="table-fixed border-separate border-spacing-0 [&_tr:not(:last-child)_td]:border-b">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="hover:bg-transparent">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    style={{ width: `${header.getSize()}px` }}
                    className="relative h-9 select-none bg-sidebar border-y border-border first:border-l first:rounded-l-lg last:border-r last:rounded-r-lg"
                  >
                    {header.isPlaceholder ? null : header.column.getCanSort() ? (
                      <div
                        className={cn(
                          header.column.getCanSort() &&
                            "flex h-full cursor-pointer select-none items-center gap-2"
                        )}
                        onClick={header.column.getToggleSortingHandler()}
                        onKeyDown={(e) => {
                          // Enhanced keyboard handling for sorting
                          if (
                            header.column.getCanSort() &&
                            (e.key === "Enter" || e.key === " ")
                          ) {
                            e.preventDefault();
                            header.column.getToggleSortingHandler()?.(e);
                          }
                        }}
                        tabIndex={header.column.getCanSort() ? 0 : undefined}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: (
                            <RiArrowUpSLine
                              className="shrink-0 opacity-60"
                              size={16}
                              aria-hidden="true"
                            />
                          ),
                          desc: (
                            <RiArrowDownSLine
                              className="shrink-0 opacity-60"
                              size={16}
                              aria-hidden="true"
                            />
                          ),
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    ) : (
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <tbody aria-hidden="true" className="table-row h-1"></tbody>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="border-0 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg h-px hover:bg-accent/50"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="last:py-0 h-[inherit]">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className="hover:bg-transparent [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No patient records found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <tbody aria-hidden="true" className="table-row h-1"></tbody>
      </Table>

      {/* Pagination */}
      {table.getRowModel().rows.length > 0 && (
        <div className="flex items-center justify-between gap-3">
          <p
            className="flex-1 whitespace-nowrap text-sm text-muted-foreground"
            aria-live="polite"
          >
            Page{" "}
            <span className="text-foreground">
              {table.getState().pagination.pageIndex + 1}
            </span>{" "}
            of <span className="text-foreground">{table.getPageCount()}</span>
          </p>
          <Pagination className="w-auto">
            <PaginationContent className="gap-3">
              <PaginationItem>
                <Button
                  variant="outline"
                  className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  aria-label="Go to previous page"
                >
                  Previous
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button
                  variant="outline"
                  className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  aria-label="Go to next page"
                >
                  Next
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

      {/* Patient Details Dialog */}
      <Dialog open={showPatientDialog} onOpenChange={setShowPatientDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Patient Details</DialogTitle>
            <DialogDescription>
              View and manage patient information
            </DialogDescription>
          </DialogHeader>

          {selectedPatient && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Image
                  src={selectedPatient.image}
                  alt={selectedPatient.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-2xl font-bold">{selectedPatient.name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      variant="outline"
                      className={cn(
                        "gap-1 py-0.5 px-2 text-sm",
                        selectedPatient.status === "Pending"
                          ? "text-amber-600"
                          : selectedPatient.status === "Critical"
                          ? "text-red-600"
                          : selectedPatient.status === "Stable"
                          ? "text-emerald-600"
                          : "text-muted-foreground"
                      )}
                    >
                      {selectedPatient.status === "Stable" && (
                        <RiCheckLine
                          className="text-emerald-500"
                          size={14}
                          aria-hidden="true"
                        />
                      )}
                      {selectedPatient.status === "Critical" && "! "}
                      {selectedPatient.status === "Pending" && "- "}
                      {selectedPatient.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {selectedPatient.patientType}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ID: {selectedPatient.id}
                    </span>
                  </div>
                </div>

                <div className="ml-auto flex gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Update Status
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onClick={() =>
                            handleStatusUpdate(selectedPatient, "Stable")
                          }
                          disabled={selectedPatient.status === "Stable"}
                        >
                          Mark as Stable
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleStatusUpdate(selectedPatient, "Critical")
                          }
                          disabled={selectedPatient.status === "Critical"}
                        >
                          Mark as Critical
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleStatusUpdate(selectedPatient, "Pending")
                          }
                          disabled={selectedPatient.status === "Pending"}
                        >
                          Mark as Pending
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    variant={selectedPatient.insurance ? "outline" : "default"}
                    size="sm"
                    onClick={() => handleInsuranceToggle(selectedPatient)}
                  >
                    {selectedPatient.insurance ? "Insured" : "Mark as Insured"}
                  </Button>
                </div>
              </div>

              <Separator />

              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="medical-history">
                    Medical History
                  </TabsTrigger>
                  <TabsTrigger value="consultations">Consultations</TabsTrigger>
                  <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Email
                            </p>
                            <p>{selectedPatient.email}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Phone
                            </p>
                            <p>{selectedPatient.phone}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Address
                          </p>
                          <p>{selectedPatient.address}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Date of Birth
                          </p>
                          <p>
                            {new Date(
                              selectedPatient.birthDate
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Medical Stats</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Vital Signs
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Progress
                              className={cn(
                                "h-2 flex-1",
                                selectedPatient.vitalSigns < 40
                                  ? "text-red-500"
                                  : selectedPatient.vitalSigns < 70
                                  ? "text-amber-500"
                                  : "text-emerald-500"
                              )}
                              value={selectedPatient.vitalSigns}
                            />
                            <span className="text-sm font-medium">
                              {selectedPatient.vitalSigns}%
                            </span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Next Appointment
                          </p>
                          <p>{selectedPatient.appointmentDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Primary Doctor
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Image
                              className="rounded-full"
                              src={selectedPatient.doctor.image}
                              width={24}
                              height={24}
                              alt={selectedPatient.doctor.name}
                            />
                            <p>{selectedPatient.doctor.name}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Allergies</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {selectedPatient.allergies &&
                        selectedPatient.allergies.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {selectedPatient.allergies.map((allergy, index) => (
                              <Badge key={index} variant="secondary">
                                {allergy}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            No known allergies
                          </p>
                        )}
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Actions</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <Button className="w-full" variant="outline">
                          Schedule Appointment
                        </Button>
                        <Button className="w-full" variant="outline">
                          Send Message
                        </Button>
                        <Button className="w-full" variant="outline">
                          Update Records
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="medical-history">
                  <Card>
                    <CardHeader>
                      <CardTitle>Medical History</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {selectedPatient.medicalHistory &&
                      selectedPatient.medicalHistory.length > 0 ? (
                        <div className="space-y-4">
                          {selectedPatient.medicalHistory.map(
                            (condition, index) => (
                              <div
                                key={index}
                                className="border p-3 rounded-md"
                              >
                                <p className="font-medium">{condition}</p>
                              </div>
                            )
                          )}
                        </div>
                      ) : (
                        <p className="text-center text-muted-foreground py-8">
                          No medical history records found
                        </p>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Add Medical History
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="consultations">
                  <Card>
                    <CardHeader>
                      <CardTitle>Consultations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center text-muted-foreground py-8">
                        <p>
                          View patient consultations in the Consultations tab
                        </p>
                        <Button
                          className="mt-4"
                          onClick={() =>
                            router.push(
                              `/dashboard/consultation?patientId=${selectedPatient.id}`
                            )
                          }
                        >
                          Go to Consultations
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="prescriptions">
                  <Card>
                    <CardHeader>
                      <CardTitle>Prescriptions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {patientPrescriptions.length > 0 ? (
                        <div className="space-y-4">
                          {patientPrescriptions.map((prescription) => (
                            <div
                              key={prescription.id}
                              className="border p-3 rounded-md"
                            >
                              <div className="flex justify-between items-center mb-2">
                                <h3 className="font-medium">
                                  {prescription.date}
                                </h3>
                                <Badge variant="outline">
                                  {prescription.duration}
                                </Badge>
                              </div>
                              <div className="space-y-2">
                                {prescription.lines.map((line: any) => (
                                  <div
                                    key={line.id}
                                    className="bg-accent/40 p-2 rounded flex justify-between items-center"
                                  >
                                    <div>
                                      <p className="font-medium">
                                        {line.medicamentName}
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        {line.dosage} {line.morning && "AM"}{" "}
                                        {line.afternoon && "Noon"}{" "}
                                        {line.evening && "PM"}{" "}
                                        {line.night && "Night"} -{" "}
                                        {line.foodOrder} food
                                      </p>
                                    </div>
                                    <Badge>{line.duration}</Badge>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center text-muted-foreground py-8">
                          <p>No prescriptions available for this patient</p>
                          <Button
                            className="mt-4"
                            onClick={() => setShowPrescriptionDialog(true)}
                          >
                            Create Prescription
                          </Button>
                        </div>
                      )}

                      {patientPrescriptions.length > 0 && (
                        <Button
                          className="w-full"
                          onClick={() => setShowPrescriptionDialog(true)}
                        >
                          Create New Prescription
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowPatientDialog(false)}
            >
              Close
            </Button>
            <Button>Edit Patient</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Prescription Creation Dialog */}
      {selectedPatient && (
        <Dialog
          open={showPrescriptionDialog}
          onOpenChange={setShowPrescriptionDialog}
        >
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create Prescription</DialogTitle>
              <DialogDescription>
                Create a new prescription for {selectedPatient?.name}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="medicament">Medication</Label>
                <select
                  id="medicament"
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={newPrescription.medicamentId}
                  onChange={(e) =>
                    setNewPrescription({
                      ...newPrescription,
                      medicamentId: e.target.value,
                    })
                  }
                >
                  <option value="">Select a medication</option>
                  {medicaments.map((med) => (
                    <option key={med.id} value={med.id}>
                      {med.name} - {med.description}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dosage">Dosage</Label>
                  <Input
                    id="dosage"
                    type="number"
                    min="1"
                    value={newPrescription.dosage}
                    onChange={(e) =>
                      setNewPrescription({
                        ...newPrescription,
                        dosage: parseInt(e.target.value, 10),
                      })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    value={newPrescription.duration}
                    onChange={(e) =>
                      setNewPrescription({
                        ...newPrescription,
                        duration: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Time of day</Label>
                <div className="grid grid-cols-4 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="morning"
                      checked={newPrescription.morning}
                      onCheckedChange={(checked) =>
                        setNewPrescription({
                          ...newPrescription,
                          morning: checked === true,
                        })
                      }
                    />
                    <Label htmlFor="morning">Morning</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="afternoon"
                      checked={newPrescription.afternoon}
                      onCheckedChange={(checked) =>
                        setNewPrescription({
                          ...newPrescription,
                          afternoon: checked === true,
                        })
                      }
                    />
                    <Label htmlFor="afternoon">Afternoon</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="evening"
                      checked={newPrescription.evening}
                      onCheckedChange={(checked) =>
                        setNewPrescription({
                          ...newPrescription,
                          evening: checked === true,
                        })
                      }
                    />
                    <Label htmlFor="evening">Evening</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="night"
                      checked={newPrescription.night}
                      onCheckedChange={(checked) =>
                        setNewPrescription({
                          ...newPrescription,
                          night: checked === true,
                        })
                      }
                    />
                    <Label htmlFor="night">Night</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="foodOrder">Food Relation</Label>
                <select
                  id="foodOrder"
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={newPrescription.foodOrder}
                  onChange={(e) =>
                    setNewPrescription({
                      ...newPrescription,
                      foodOrder: e.target.value as any,
                    })
                  }
                >
                  <option value="before">Before food</option>
                  <option value="with">With food</option>
                  <option value="after">After food</option>
                  <option value="none">No food relation</option>
                </select>
              </div>
            </div>

            <DialogFooter className="mt-4">
              <Button
                variant="outline"
                onClick={() => setShowPrescriptionDialog(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleCreatePrescription}>
                Save Prescription
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
