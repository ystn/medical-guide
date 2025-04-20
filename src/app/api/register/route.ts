// register api route
import prisma from "@/lib/prisma";
import { RegisterServerSchema } from "@/lib/schema";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { z } from "zod";

export async function POST(request: Request) {
  const saltRounds = 10;
  const body = await request.json();

  try {
    RegisterServerSchema.parse(body);
    const { password, ...user } = body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
    });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 } // Conflict
      );
    }
    const { pass, ...createdUser } = await prisma.user.create({
      data: { password: hashedPassword, ...user },
    });
    return NextResponse.json(
      { message: "User registered successfully", createdUser },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: error.errors }, { status: 422 });
    }
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
