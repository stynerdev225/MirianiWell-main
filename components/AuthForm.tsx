"use client";

import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import { useState } from "react";
import type { FormType } from "@/types";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormField from "./FormField";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const { signIn, setActive } = useSignIn();
  const { signUp, setActive: setActiveSignUp } = useSignUp();
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      if (type === "sign-up") {
        const { name, email, password } = data;

        if (!signUp) {
          toast.error("Sign up is not available");
          return;
        }

        console.log("🔍 Starting signup process for:", email);

        // Create the user account with email and password
        const result = await signUp.create({
          emailAddress: email,
          password,
          // Include first name if provided
          ...(name && { firstName: name }),
        });

        console.log("📋 Signup result:", {
          status: result.status,
          verifications: result.verifications,
          missingFields: result.missingFields,
          unverifiedFields: result.unverifiedFields,
        });

        // Handle the signup based on status
        if (result.status === "missing_requirements") {
          console.log("⚠️ Missing requirements detected");

          // Email verification is typically required
          if (result.unverifiedFields?.includes("email_address")) {
            console.log("📧 Email verification required");
            await signUp.prepareEmailAddressVerification({
              strategy: "email_code",
            });
            toast.success(
              "Account created! Please check your email for verification code."
            );
            router.push(`/verify-email?email=${encodeURIComponent(email)}`);
            return;
          }

          // Check for other missing requirements
          toast.error("Additional information required to complete signup");
          return;
        }

        // If account creation is complete (rare case)
        if (result.status === "complete") {
          console.log("✅ Account creation complete immediately");
          await setActiveSignUp({ session: result.createdSessionId });
          toast.success("Account created successfully! Welcome!");
          router.push("/");
        } else {
          // Default case - assume email verification is needed
          console.log("📧 Defaulting to email verification flow");
          try {
            await signUp.prepareEmailAddressVerification({
              strategy: "email_code",
            });
            toast.success(
              "Account created! Please check your email for verification code."
            );
            router.push(`/verify-email?email=${encodeURIComponent(email)}`);
          } catch (prepareError) {
            console.error(
              "❌ Failed to prepare email verification:",
              prepareError
            );
            toast.error("Failed to send verification email. Please try again.");
          }
        }
      } else {
        // Sign In Process
        const { email, password } = data;

        if (!signIn) {
          toast.error("Sign in is not available");
          return;
        }

        console.log("🔍 Starting signin process for:", email);

        const result = await signIn.create({
          identifier: email,
          password,
        });

        console.log("📋 Signin result:", result);

        if (result.status === "complete") {
          await setActive({ session: result.createdSessionId });
          toast.success("Signed in successfully!");
          router.push("/");
        } else {
          console.log("❌ Signin incomplete, status:", result.status);
          toast.error("Sign in failed. Please check your credentials.");
        }
      }
    } catch (error: unknown) {
      console.error("❌ Authentication error:", error);

      // Handle specific Clerk errors
      if (
        error &&
        typeof error === "object" &&
        "errors" in error &&
        Array.isArray(error.errors) &&
        error.errors.length > 0
      ) {
        const errorMessage = (error.errors[0] as { message: string }).message;
        const errorCode = (error.errors[0] as { code: string }).code;

        console.error("Clerk error details:", {
          code: errorCode,
          message: errorMessage,
          longMessage: error.errors[0].longMessage,
          meta: error.errors[0].meta,
        });

        // Special handling for common Clerk errors
        if (errorCode === "form_identifier_not_found") {
          toast.error(
            "Account not found. Please check your email or create a new account."
          );
        } else if (errorCode === "form_password_incorrect") {
          toast.error("Incorrect password. Please try again.");
        } else if (errorCode === "captcha_required") {
          toast.error("CAPTCHA verification failed. Please try again.");
        } else if (errorCode === "identifier_already_exists") {
          toast.error(
            "An account with this email already exists. Please sign in instead."
          );
        } else {
          toast.error(errorMessage);
        }
      } else {
        // Handle non-structured errors
        const errorObj = error instanceof Error ? error : new Error(String(error));
        console.error("Detailed error:", {
          name: errorObj.name,
          message: errorObj.message,
          stack: errorObj.stack,
        });

        toast.error(
          `Authentication failed: ${errorObj.message || "Unknown error"}`
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={38}
            height={32}
            style={{ height: "auto" }}
          />
          <h2 className="text-primary-100">Miriani Well</h2>
        </div>

        <h3>Practice job interviews with AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your Name"
                type="text"
              />
            )}

            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Your email address"
              type="email"
            />

            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            {/* Add clerk-captcha div for Smart CAPTCHA widget */}
            {type === "sign-up" && (
              <div id="clerk-captcha" className="mt-4"></div>
            )}

            <Button className="btn" type="submit" disabled={isLoading}>
              {isLoading
                ? "Loading..."
                : isSignIn
                ? "Sign In"
                : "Create an Account"}
            </Button>
          </form>
        </Form>

        <p className="text-center">
          {isSignIn ? "No account yet?" : "Have an account already?"}
          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? "Sign In" : "Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
