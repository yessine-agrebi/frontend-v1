"use client";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import { Menu } from "lucide-react";
import { DropdownMenu} from "./ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const Navbar = () => {

  return (
    <nav className="flex py-4 justify-between md:shadow-sm">
      <div className="flex items-center gap-4">
        <h1 className="font-extrabold text-2xl">9arrini</h1>

        <ul className="md:flex hidden items-start justify-center gap-3 ">
          <li>Find Tutors</li>
          <li>Become a Tutor</li>
        </ul>
      </div>
      <div className="md:flex hidden items-center gap-4">
        <ModeToggle />
        <Button>Login</Button>
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-50 mx-3 flex-col items-center justify-center">
            <DropdownMenuLabel>Login</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-300 my-1 h-[0.5px]" />
            <DropdownMenuGroup>
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>Find Tutors</DropdownMenuItem>
              <DropdownMenuItem>Become a Tutor</DropdownMenuItem>
              <DropdownMenuItem>Messages</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
