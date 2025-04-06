import { Doctor, Medicine } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialization: 'General Physician',
    experience: 12,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialization: 'Pulmonologist',
    experience: 15,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialization: 'Cardiologist',
    experience: 10,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300'
  },
    {
    id: '4',
    name: 'Dr. Karan Singh ',
    specialization: 'General Physician',
    experience: 12,
    image: 'https://i.postimg.cc/8C2JzPWm/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-cro.jpg'
  },
  {
    id: '5',
    name: 'Dr. Raunak Panday',
    specialization: 'Pulmonologist',
    experience: 15,
    image: 'https://i.postimg.cc/4x3h80sV/istockphoto-177373093-612x612.jpg'
  },
  {
    id: '6',
    name: 'Dr. Yash Kumar',
    specialization: 'Cardiologist',
    experience: 10,
    image: 'https://i.postimg.cc/DwY4RcwD/istockphoto-1124684854-612x612.jpg'
  }
];

export const medicines: Medicine[] = [
  {
    id: '1',
    name: 'Paracetamol',
    type: 'Pain Reliever',
    description: 'For fever and mild pain'
  },
  {
    id: '2',
    name: 'Ibuprofen',
    type: 'Anti-inflammatory',
    description: 'For inflammation and pain'
  },
  {
    id: '3',
    name: 'Antacids',
    type: 'Give relief from acidity',
    description: 'For bloatinng,headburn,indigestion and acidity'
  },
  {
    id: '4',
    name: 'Isabgol',
    type: 'Give relief from constipation',
    description: 'For hard stool and constipationn'
  },
  {
    id: '5',
    name: 'ORS,Loperamide,probiotics',
    type: 'Give relief from diarrhea',
    description: 'For diarrhea,loose stools,dehydration'
  },
  {
    id: '6',
    name: 'Lozenges(strepsils) and warm salt water gargel',
    type: 'Give relief from sore throat',
    description: 'For sore throat,difficulty swallowing and irritation in the throat'
  },
  {
    id: '7',
    name: 'Cetrizine',
    type: 'Give relief from allergic  reactions',
    description: 'For allergic reactions,sneezing,rashes and itching'
  },
  {
    id: '8',
    name: 'Ibuprofen ',
    type: 'Give relief from muscle pain',
    description: 'For muscle pain,body pain soreness in muscles'
  },
  {
    id: '9',
    name: 'Mefenamic acid',
    type: 'Give relief from menstrual cramps',
    description: 'For menstrual cramps'
  },
  {
    id: '10',
    name: 'Burnol',
    type: 'give relief from minor burns',
    description: 'for minor burns'
  },
  {
    id: '11',
    name: 'Calamine lotiion',
    type: 'Give relief from Itching',
    description: 'For skin rashes and itching'
  },
  {
    id: '12',
    name: 'Naproxen,rest in dark room',
    type: 'Give relief from migrane',
    description: 'For migrane,severe headache'
  },
    {
    id: '13',
    name: 'Losartan',
    type: 'Give relief from hypertenion',
    description: 'For hypertension,dizziness'
  },
    {
    id: '14',
    name: 'electrolyte suppliments',
    type: 'Give relief from muscles cramps',
    description: 'For muscles cramps'
  },
    {
    id: '15',
    name: 'Physical therapy',
    type: 'Give relief from back pain',
    description: 'For physical  therapy'
  },
    {
    id: '16',
    name: 'Beta-blockers',
    type: 'give relief from palpilation',
    description: 'For palpiplation'
  },
    {
    id: '17',
    name: 'Physiotherapy',
    type: 'Give relief from arthritis',
    description: 'For arthritis'
  },
    {
    id: '18',
    name: 'Alprazolam',
    type: 'Give relief from anxiety',
    description: 'For anxiety'
  },
    {
    id: '19',
    name: 'Zolpidem,have good sleep',
    type: 'Give relief from insomnia',
    description: 'For insomnia'
  },
    {
    id: '20',
    name: 'Betahistine',
    type: 'Give relief from vertigo',
    description: 'For vertigo'
  },
  {
    id: '21',
    name: 'Cetirizine',
    type: 'Antihistamine',
    description: 'For allergies and cold symptoms'
  }
];

export const symptomRules = {
  'fever': {
    doctors: ['1'],
    medicines: ['1'],
    advice: 'Rest well and stay hydrated'
  },
  'cough': {
    doctors: ['2'],
    medicines: ['3'],
    advice: 'Use steam inhalation and stay warm'
  },
  'chest pain': {
    doctors: ['1'],
    medicines: ['2'],
    advice: 'Seek immediate medical attention'
  },
  'allergies': {
    doctors: ['2'],
    medicines: ['2'],
    advice: 'Keep Skincare'
  },
    'anxiety': {
    doctors: ['3'],
    medicines: ['18'],
    advice: 'use calmming breatthing exercise'
  },
    'vertigo': {
    doctors: ['4'],
    medicines: ['20'],
    advice: 'move your head carefully and slowly during daily  activities'
  },
    'insomnia': {
    doctors: ['5'],
    medicines: ['19'],
    advice: 'avoid nap in afternoon'
  },
  'menstrual cramps': {
    doctors: ['4'],
    medicines: ['9'],
    advice: 'have warm bath and shower'
  },
    'hypertension': {
    doctors: ['3'],
    medicines: ['13'],
    advice: 'regular physical activities and exercises'
  },
        'acidity': {
    doctors: ['2'],
    medicines: ['3'],
    advice: 'avoid oily and spicy food'
  },
  'vertigo': {
    doctors: ['1'],
    medicines: ['21'],
    advice: 'Keep Skincare'
  }
};