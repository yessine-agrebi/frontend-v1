import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 text-center">
        Connect with Knowledgeable{" "}
        <span className="text-yellow-300">Tutors</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 text-center">
        Elevate your learning experience with expert tutors in various subjects.
      </p>
      <Button>
        <Link href="/user/login">Get Started</Link>
      </Button>
    </div>
  );
};

export default Hero;
