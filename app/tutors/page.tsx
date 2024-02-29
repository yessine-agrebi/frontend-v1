"use client";
import Api from "@/API/Api";
import React, { useEffect, useState } from "react";
import profileImg from "../../public/images/img2.jpg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import Calendar from "@/components/Calendar";
import { Tutor } from "@/types";
import Link from "next/link";
const Tutors = () => {
  const [tutors, setTutors] = useState<Tutor[]>();

  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inllc3NpbmUzQGdtYWlsLmNvbSIsInN1YiI6NCwiaWF0IjoxNzA5MTk0NTM0LCJleHAiOjE3MDk3OTkzMzR9.5QFIU2GC_emXZVfsA44vr3xDoRR0c4FAlcT_SJ_YejM",
  };
  const fetchTutors = async () => {
    const response = await Api.get("/tutors", { headers: headers });
    const data = await response.data;
    console.log(data);
    setTutors(data);
  };

  useEffect(() => {
    fetchTutors();
  }, []);

  return (
    <div className="container mx-auto md:flex flex-row w-full mt-5">
      {tutors?.map((tutor) => (
        <div
          key={tutor.userId}
          className="bg-white shadow-md rounded-lg overflow-hidden md:max-w-xl md:mx-2 flex flex-col justify-between border-2 border-black "
        >
          <div className="flex">
            <div className="flex-shrink-0 p-4">
              <Image src={profileImg} alt="TutorZone" width={150} height={50} />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="">
                <h2 className="text-xl font-semibold">{`${tutor.firstName} ${tutor.lastName}`}</h2>
                <p className="text-gray-600 flex items-center justify-center gap-1">
                  Speciality: <span>{tutor.speciality?.name}</span>
                </p>
                <p className="text-gray-600">Country: {tutor.country}</p>
                <p className="text-gray-600">Experience: 5 years</p>
              </div>
              <div className="flex gap-2 items-center font-semibold">
                <Link 
                className="bg-yellow-300 md:w-[100px] text-black py-3 rounded-xl text-sm  hover:bg-yellow-200 border-2 border-black text-center"
                href={`/tutors/${tutor.userId}`}
                >
                  Book Lesson
                </Link>
                <button className="md:w-[100px] text-black py-3 rounded-xl text-sm hover:bg-gray-200 border-2 border-gray-300">
                  Send Message
                </button>
              </div>
            </div>
            <div className="flex flex-col py-4 justify-between items-center">
              <div className="flex flex-col justify-center items-center gap-3 mb-2 text-lg font-semibold">
                {/* <button>
                  <FaRegHeart size={22} />
                </button>
                <h1 className="flex justify-center items-center gap-1">
                  <FaStar size={22} />
                  <span>{tutor.rating}</span>
                </h1> */}
                <p className="mr-4">
                  {tutor.price}{" "}
                  <span className="text-md font-normal">TND/h</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tutors;
