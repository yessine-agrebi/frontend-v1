"use client";
import Api from "@/API/Api";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React from "react";
import { Tutor } from "@/types";
import Calendar from "@/components/Calendar";
const Tutor = () => {
  const params = useParams<{ tutorId: string }>();
  const { data: session, status } = useSession();
  const { data, isLoading, isError } = useQuery<Tutor>({
    queryKey: ["tutors"],
    queryFn: async () => {
      if (status === "authenticated") {
        const res = await Api.get(`/tutors/${params?.tutorId}`, {
          headers: {
            Authorization: `Bearer ${session?.backendTokens.accessToken}`,
          },
        });
        return res.data;
      } else {
        return { message: "Not authenticated" };
      }
    },
    enabled: status === "authenticated",
  });
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error...</p>}
      {data && (
        <div>
          <h1>
            {data.firstName} {data.lastName}
          </h1>
          <p>{data.description}</p>
          <p>{data.speciality?.name}</p>
          {/* <Calendar availabilities={data.availabilities} /> */}
        </div>
      )}
    </div>
  );
};

export default Tutor;
