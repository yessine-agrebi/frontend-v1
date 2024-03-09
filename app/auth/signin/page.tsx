"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SignInFormInputs } from "@/types";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const data  = useRef<SignInFormInputs>({ email: "", password: "" });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      email: data.current.email,
      password: data.current.password,
      redirect: true,
      callbackUrl: "/tutors",
    });
    setLoading(false);
  };
  return (
    <div className="flex items-center justify-center mt-5">
      <Card className="md:w-1/3 w-full">
        <CardHeader className="flex flex-col gap-4">
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            <Link className="underline" href="/auth/signup">
              Sign up as a Student
            </Link>{" "}
            or{" "}
            <Link className="underline" href="/auth/signup/tutor">
              Signup as a Tutor
            </Link>
          </CardDescription>
          <Button variant="outline" className="mt-4 py-5">
            <FcGoogle className="mr-2" size={20} />
            Continue with Google
          </Button>
          <Button variant="outline" className="mt-4 py-5">
            <SiFacebook className="mr-2" size={20} />
            Continue with Facebook
          </Button>
          <div className="flex items-center justify-center gap-4 mx-7">
            <Separator className="my-4 w-1/2" />
            Or
            <Separator className="my-4 w-1/2" />
          </div>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => (data.current.email = e.target.value)}
            />
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => (data.current.password = e.target.value)}
            />
            <Button type="submit">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
