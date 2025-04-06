import { Recommendation } from '../types';
import { doctors, medicines, symptomRules } from '../data/mockData';

export const getRecommendations = (symptoms: string[]): Recommendation => {
  const recommendedDoctorIds = new Set<string>();
  const recommendedMedicineIds = new Set<string>();
  const advices: string[] = [];

  symptoms.forEach(symptom => {
    const rule = symptomRules[symptom as keyof typeof symptomRules];
    if (rule) {
      rule.doctors.forEach(id => recommendedDoctorIds.add(id));
      rule.medicines.forEach(id => recommendedMedicineIds.add(id));
      advices.push(rule.advice);
    }
  });

  return {
    doctors: doctors.filter(doctor => recommendedDoctorIds.has(doctor.id)),
    medicines: medicines.filter(medicine => recommendedMedicineIds.has(medicine.id)),
    generalAdvice: advices.join('. ')
  };
};