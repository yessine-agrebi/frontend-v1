"use client";
import React from "react";
import isAuth from "@/components/isAuth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import profileImage from "@/public/images/img2.jpg";
import { Heart, MessageSquareText, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
const Tutors = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-3">
      <Card className="overflow-hidden shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              {/* <Image src={profileImage} width={35} height={35} alt='profile' className='rounded-full' /> */}
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>YA</AvatarFallback>
              </Avatar>
              <p className="md:text-lg text-sm">Yessine Agrebi</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-justify">
              <p className="md:font-extrabold md:text-lg text-sm">TND 25</p>
              <span className="text-gray-300 font-light text-sm">1h lesson</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p>Speciality: Programming</p>
            <p>Experience: 2 Years</p>
            <p>Full Stack Developer with 2 years experience in web development</p>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center gap-3 justify-center">
            <Button>
              <MessageSquareText />
            </Button>
            <Button>Schedule</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default isAuth(Tutors);
