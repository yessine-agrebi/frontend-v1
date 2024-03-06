import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-wrap flex flex-col items-center justify-center gap-3">
        Connect with Knowledgeable{" "}
        <span>
          <span className="text-yellow-300">Tutors</span> and{" "}
          <span className="text-yellow-300">Teachers</span>
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 text-center">
        Elevate your learning experience with expert tutors and teachers in various subjects.
      </p>
      <Button className="">
        <Link href="/auth/signin">Get Started</Link>
      </Button>
    </div>
  );
};

export default Hero;
