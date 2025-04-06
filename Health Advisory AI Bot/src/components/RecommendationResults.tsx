import React from 'react';
import { Recommendation, Doctor, Medicine } from '../types';
import { Stethoscope, Pill } from 'lucide-react';

interface RecommendationResultsProps {
  recommendation: Recommendation | null;
}

export const RecommendationResults: React.FC<RecommendationResultsProps> = ({ recommendation }) => {
  if (!recommendation) return null;

  return (
    <div className="w-full max-w-4xl space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Stethoscope className="text-blue-500" />
          Recommended Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendation.doctors.map((doctor: Doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialization}</p>
                <p className="text-sm text-gray-500">{doctor.experience} years experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Pill className="text-green-500" />
          Recommended Medicines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendation.medicines.map((medicine: Medicine) => (
            <div key={medicine.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold">{medicine.name}</h3>
              <p className="text-sm text-gray-600">{medicine.type}</p>
              <p className="text-sm text-gray-500 mt-2">{medicine.description}</p>
            </div>
          ))}
        </div>
      </div>

      {recommendation.generalAdvice && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">General Advice</h2>
          <p className="text-gray-700">{recommendation.generalAdvice}</p>
        </div>
      )}
    </div>
  );
};