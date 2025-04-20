import LoginForm from "@/components/forms/login-form";
import Image from "next/image";
import React, { Suspense } from "react";

const LoginPage = () => {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-200 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={128}
              height={128}
              className="h-12 w-12 rounded-full"
            />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
};

export default LoginPage;
