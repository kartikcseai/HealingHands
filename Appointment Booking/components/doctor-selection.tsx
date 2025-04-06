"use client"

import { useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for doctors
const doctors = [
  {
    id: "dr-smith",
    name: "Dr. Sarah Smith",
    specialty: "Family Medicine",
    experience: "15 years",
    rating: 4.9,
    reviewCount: 243,
    availability: "Today",
    image: "https://i.postimg.cc/m2HmH2gn/istockphoto-1390000431-612x612.jpg",
    languages: ["English", "Spanish"],
  },
  {
    id: "dr-patel",
    name: "Dr. Raj Patel",
    specialty: "Internal Medicine",
    experience: "12 years",
    rating: 4.8,
    reviewCount: 187,
    availability: "Tomorrow",
    image: "https://i.postimg.cc/tgWbvHkv/doctors-visit-1200x900.jpg",
    languages: ["English", "Hindi"],
  },
  {
    id: "dr-johnson",
    name: "Dr. Michael Johnson",
    specialty: "Pediatrics",
    experience: "20 years",
    rating: 4.7,
    reviewCount: 312,
    availability: "Today",
    image: "https://i.postimg.cc/V6wJDgqM/360-F-260040900-o-O6-YW1s-HTn-Kxby4-Gcj-Cvtyp-UCWjn-QRg5.jpg",
    languages: ["English"],
  },
  {
    id: "dr-chen",
    name: "Dr. Lisa Chen",
    specialty: "Dermatology",
    experience: "8 years",
    rating: 4.9,
    reviewCount: 156,
    availability: "In 2 days",
    image: "https://i.postimg.cc/nLJVJzXf/360-F-305690038-kio1-DI7qtf1k-MPT4z6ke-I3-Gw-B0z-P6-Sch.jpg",
    languages: ["English", "Mandarin"],
  },
]

interface DoctorSelectionProps {
  selectedDoctor: string | null
  onSelectDoctor: (doctorId: string) => void
}

export default function DoctorSelection({ selectedDoctor, onSelectDoctor }: DoctorSelectionProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null)

  const specialties = Array.from(new Set(doctors.map((doctor) => doctor.specialty)))

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty ? doctor.specialty === selectedSpecialty : true

    return matchesSearch && matchesSpecialty
  })

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Select Your Doctor</h2>

      <div className="mb-6">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search by name or specialty"
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge
            variant={selectedSpecialty === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedSpecialty(null)}
          >
            All Specialties
          </Badge>
          {specialties.map((specialty) => (
            <Badge
              key={specialty}
              variant={selectedSpecialty === specialty ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedSpecialty(specialty)}
            >
              {specialty}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDoctors.map((doctor) => (
          <Card
            key={doctor.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedDoctor === doctor.id ? "ring-2 ring-blue-600" : ""
            }`}
            onClick={() => onSelectDoctor(doctor.id)}
          >
            <CardContent className="p-4 flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-lg">{doctor.name}</h3>
                <p className="text-blue-600">{doctor.specialty}</p>
                <div className="flex items-center mt-1 text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    {doctor.rating} ({doctor.reviewCount} reviews)
                  </span>
                  <span className="mx-2">•</span>
                  <span>{doctor.experience}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {doctor.languages.map((language) => (
                    <span key={language} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {language}
                    </span>
                  ))}
                </div>
                <div className="mt-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Available {doctor.availability}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No doctors found matching your criteria. Please try a different search.
        </div>
      )}
    </div>
  )
}

