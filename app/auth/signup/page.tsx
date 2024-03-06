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
import { Loader2 } from "lucide-react";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSignUp = async (e: any) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <Card className="md:w-1/3 w-full">
        <CardHeader className="flex flex-col gap-4">
          <CardTitle>Sign Up</CardTitle>
          <CardDescription className="flex items-center gap-3">
            Already have an account?
            <Link className="underline" href="/signup">
              Sign In
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
          <form className="flex flex-col gap-4">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              value={user.firstName}
              placeholder="First Name"
              required
              onChange={handleChange}
            />
            <Label htmlFor="lestName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              value={user.lastName}
              placeholder="Last Name"
              required
              onChange={handleChange}
            />
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              value={user.email}
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <Button
              type="submit"
              disabled={
                user.firstName.length > 0 &&
                user.lastName &&
                user.email.length > 0 &&
                user.password.length > 0
                  ? false
                  : true
              }
              onClick={onSignUp}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
