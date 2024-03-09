"use client";
import React from "react";
import isAuth from "@/components/isAuth";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, MessageSquareText } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import Api from "@/API/Api";
import { Tutor } from "@/types";
const Tutors = () => {
  const { data: session, status } = useSession();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["tutors"],
    queryFn: async () => {
      if (status === "authenticated") {
        const { data } = await Api.get("/tutors", {
          headers: {
            Authorization: `Bearer ${session?.backendTokens.accessToken}`,
          },
        });
        return data;
      } else {
        return { message: "Not authenticated" };
      }
    },
    enabled: status === "authenticated",
  });
  return (
    <div className="mt-4">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error...</p>}
      <h1 className="font-bold text-lg">
        {data ? `${Object.keys(data).length} Tutors available` : ""}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-3 gap-4">
        {data?.map((tutor: Tutor) => (
          <Card
            className="overflow-hidden shadow-md rounded-lg"
            key={tutor.userId}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>YA</AvatarFallback>
                  </Avatar>
                  <p className="md:text-lg text-sm">{`${tutor.firstName} ${tutor.lastName}`}</p>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <div className="flex flex-col items-center gap-1 text-justify">
                    <p className="md:font-extrabold md:text-lg text-sm">
                      <FaStar size={25} /> {tutor.rating}
                    </p>
                    <span className="text-gray-400 font-light text-sm">
                      9 reviews
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-justify">
                    <p className="md:font-extrabold md:text-lg text-sm">
                      TND {tutor.price}
                    </p>
                    <span className="text-gray-400 font-light text-sm">
                      1h lesson
                    </span>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="">
                <p><span className="font-semibold">Speciality:</span> {tutor.speciality.name}</p>
                <p><span className="font-semibold">Experience:</span> {tutor.experience} Years</p>
                <p>{tutor.description}</p>
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
        ))}
      </div>
    </div>
  );
};

export default isAuth(Tutors);
