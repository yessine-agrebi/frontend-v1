'use client'
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
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
const SignIn = () => {
  const [loading, setLoading] = React.useState(true);
  return (
    <div className="flex items-center justify-center mt-5">
      <Card className="md:w-1/4 w-full">
        <CardHeader className="flex flex-col gap-4">
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            <Link className="underline" href="/signup">
              Sign up as a Student
            </Link>{" "}
            or{" "}
            <Link className="underline" href="/signup">
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
          <Separator className="my-4 w-1/2" />Or<Separator className="my-4 w-1/2" />
          </div>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
          <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Email" />
            <Label htmlFor="password">Password</Label>
            <Input type="password" placeholder="Password" />
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
