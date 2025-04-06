export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  image: string;
}

export interface Medicine {
  id: string;
  name: string;
  type: string;
  description: string;
}

export interface Recommendation {
  doctors: Doctor[];
  medicines: Medicine[];
  generalAdvice: string;
}