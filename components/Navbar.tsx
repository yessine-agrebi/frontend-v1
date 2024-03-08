"use client";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import { Menu } from "lucide-react";
import { DropdownMenu } from "./ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="flex py-4 justify-between md:shadow-sm">
      <div className="flex items-center gap-4">
        <h1 className="font-extrabold text-2xl">
          <Link href="/">9arrini</Link>
        </h1>

        <ul className="md:flex hidden items-start justify-center gap-3 ">
          <li>
            <Link href="/tutors">Find Tutors</Link>
          </li>
          <li>
            <Link href="/auth/signup/tutor">Become a Tutor</Link>
          </li>
        </ul>
      </div>
      <div className="md:flex hidden items-center gap-4">
        <ModeToggle />
        {session && session.user ? (
          <Button className="" onClick={() => signOut()}>
            Sign Out
          </Button>
        ) : (
          <Button className="" onClick={() => signIn()}>
            Sign In
          </Button>
        )}
      </div>
      <div className="md:hidden flex items-center justify-center gap-3">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-50 mx-3 flex-col items-center justify-center">
            <DropdownMenuLabel>
              {session?.user ? (
                <Button className="" onClick={() => signOut()}>
                  Sign Out
                </Button>
              ) : (
                <Button className="" onClick={() => signIn()}>
                  Sign In
                </Button>
              )}
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-300 my-1 h-[0.5px]" />
            <DropdownMenuGroup>
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>Find Tutors</DropdownMenuItem>
              <DropdownMenuItem>Become a Tutor</DropdownMenuItem>
              {session?.user && <DropdownMenuItem>Messages</DropdownMenuItem>}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
