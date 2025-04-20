"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function RegsiterPage() {
  const [role, setRole] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleRoleChange = (selectedRole: string) => {
    setRole(selectedRole);
    setDialogOpen(true);
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-2xl text-center font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to Medical Guide
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Login Medical Guide if you can because we don&apos;t have a login flow
        yet
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            placeholder="123 Paper Street, Wilmington, DE"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="(555) 123-4567" type="tel" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Repeat password">Repeat password</Label>
          <Input id="repeatpassword" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <div className="mb-8 flex items-center space-x-4">
          <Label htmlFor="doctor">Doctor</Label>
          <Input
            id="doctor"
            name="role"
            type="radio"
            value="doctor"
            onChange={() => handleRoleChange("doctor")}
          />
          <Label htmlFor="patient">Patient</Label>
          <Input
            id="patient"
            name="role"
            type="radio"
            value="patient"
            onChange={() => handleRoleChange("patient")}
          />
        </div>
        <div>
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Register Now &rarr;
            <BottomGradient />
          </button>
          <div className="text-center text-smv mt-2 text-neutral-600 dark:text-neutral-300">
            <Link href="/login">You already have an account please ?</Link>
          </div>
        </div>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>

      {/* Doctor Dialog */}
      <Dialog
        open={dialogOpen && role === "doctor"}
        onOpenChange={(open) => !open && setDialogOpen(false)}
      >
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Doctor Information</DialogTitle>
            <DialogDescription>
              Please provide additional information required for doctor
              registration.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="license" className="text-right">
                License Number
              </Label>
              <Input
                id="license"
                placeholder="MD12345678"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap">
              <Label htmlFor="experience" className="text-right">
                Specialty
              </Label>
              <Input
                id="experience"
                type="text"
                placeholder="Cardiology"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setDialogOpen(false)}>
              Save Information
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Patient Dialog */}
      <Dialog
        open={dialogOpen && role === "patient"}
        onOpenChange={(open) => !open && setDialogOpen(false)}
      >
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Patient Information</DialogTitle>
            <DialogDescription>
              Please provide additional information for your patient profile.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dob" className="text-right">
                Date of Birth
              </Label>
              <Input id="dob" type="date" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setDialogOpen(false)}>
              Save Information
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
