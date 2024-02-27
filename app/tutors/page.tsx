"use client";
import Api from "@/API/Api";
import React, { useEffect, useState } from "react";
import profileImg from "../../public/images/img2.jpg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import Calendar from "@/components/Calendar";
import { Tutor } from "@/types";
const Tutors = () => {
  const [tutors, setTutors] = useState<Tutor[]>();

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5ZXNzaW5lLmFnQGdtYWlsLmNvbSIsImlhdCI6MTcwNzQwMjM1MiwiZXhwIjoxNzA3NDg4NzUyfQ.0nw_MiJ1LX0Xpr-WsUIcbpTkwmAbtmRdPtpAySt3gVI",

  };
  const fetchTutors = async () => {
    const response = await Api.get("/tutors", { headers: headers });
    const data = await response.data;
    setTutors(data);
  };

  useEffect(() => {
    if (tutors?.length === 0) {
      fetchTutors();
    }
  }, []);

  return (
    <div className="flex flex-row w-full gap-5">
    <div className="flex flex-col gap-5 mt-10">
      {tutors?.map((tutor) => (
        <div className="bg-white shadow-md rounded-lg overflow-hidden md:w-full md:max-w-3xl md:mx-24 flex justify-between border-2 border-black ">
          <div className="flex-shrink-0 p-4">
            <Image src={profileImg} alt="TutorZone" width={150} height={50} />
          </div>

          {/* Middle Column */}
          <div className="p-4">
            <h2 className="text-xl font-semibold">{`${tutor.firstName} ${tutor.lastName}`}</h2>
            <p className="text-gray-600">Speciality: Software Engineering</p>
            <p className="text-gray-600">Country: {tutor.country}</p>
            <p className="text-gray-600">Experience: 5 years</p>
          </div>

          {/* Right Column */}
          <div className="p-4 flex flex-col">
            <div className="flex items-center gap-5 mb-2">
              <h1 className="flex items-center justify-center text-lg md:text-2xl font-extrabold">
                <FaStar size={22} />5
              </h1>
              <p className="text-lg font-semibold mr-4">{tutor.price} TND</p>
              <FaRegHeart size={22} />
            </div>
            <div className="flex flex-col gap-5 items-start">
              <button className="bg-yellow-300 md:w-[200px] text-black py-3 rounded-xl text-lg md:text-xl hover:bg-yellow-200 border-2 border-black">
                Book Lesson
              </button>
              <button className="md:w-[200px] text-black py-3 rounded-xl text-lg md:text-xl hover:bg-gray-200 border-2 border-gray-300">
                Send Message
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-5">
      <Calendar />
    </div>
    </div>
  );
};

export default Tutors;
