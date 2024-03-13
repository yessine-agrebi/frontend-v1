export type Tutor = {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  role: Role;
  speciality: Speciality;
  availabilities: Availability[];
  description: string;
  experience: number;
  country: string;
  profilePicture: string;
  price: number;
  rating: number;
};

export enum Role {
    TUTOR = "TUTOR",
    STUDENT = "STUDENT",
    ADMIN = "ADMIN",
}

export type Availability = {
  availabilityId: number;
  tutorId: number;
  day: string;
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
};

export type Speciality = {
  specialityId: number;
  name: string;
};

export type SignInFormInputs = {
  email: string;
  password: string;
};

export type SignUpFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};