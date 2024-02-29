"use client";
import Api from "@/API/Api";
import { Tutor } from "@/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const Tutor = (props: Props) => {
  const params = useParams<{ tutorId: string }>();
  const [tutor, setTutor] = useState<Tutor | null>(null);
  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inllc3NpbmUzQGdtYWlsLmNvbSIsInN1YiI6NCwiaWF0IjoxNzA5MTk0NTM0LCJleHAiOjE3MDk3OTkzMzR9.5QFIU2GC_emXZVfsA44vr3xDoRR0c4FAlcT_SJ_YejM",
  };
  const fetchTutor = async () => {
    const response = await Api.get(`/tutors/${params.tutorId}`, {
      headers: headers,
    });
    const data = await response.data;
    console.log(data);
    setTutor(data);
  };

  useEffect(() => {
    fetchTutor();
  }, []);
  return (
    tutor && (
      <div className="container mx-auto">
        
      </div>
    )
  );
};

export default Tutor;
