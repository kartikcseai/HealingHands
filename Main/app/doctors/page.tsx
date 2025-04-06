import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star } from "lucide-react"
import Link from "next/link"

export default function DoctorsPage() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      rating: 4.9,
      reviews: 124,
      experience: "15 years",
      education: "Harvard Medical School",
      image: "https://i.postimg.cc/L8gNj447/shutterstock-2173377961-1000x667.jpg",
      available: true,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatology",
      rating: 4.8,
      reviews: 98,
      experience: "12 years",
      education: "Johns Hopkins University",
      image: "https://i.postimg.cc/tgWbvHkv/doctors-visit-1200x900.jpg",
      available: true,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      rating: 4.9,
      reviews: 156,
      experience: "10 years",
      education: "Stanford University",
      image: "https://i.postimg.cc/m2HmH2gn/istockphoto-1390000431-612x612.jpg",
      available: true,
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Neurology",
      rating: 4.7,
      reviews: 87,
      experience: "20 years",
      education: "Yale University",
      image: "https://i.postimg.cc/V6wJDgqM/360-F-260040900-o-O6-YW1s-HTn-Kxby4-Gcj-Cvtyp-UCWjn-QRg5.jpg",
      available: false,
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      specialty: "Psychiatry",
      rating: 4.8,
      reviews: 112,
      experience: "14 years",
      education: "Columbia University",
      image: "https://i.postimg.cc/nLJVJzXf/360-F-305690038-kio1-DI7qtf1k-MPT4z6ke-I3-Gw-B0z-P6-Sch.jpg",
      available: true,
    },
    {
      id: 6,
      name: "Dr. Robert Kim",
      specialty: "Orthopedics",
      rating: 4.9,
      reviews: 143,
      experience: "18 years",
      education: "University of California",
      image: "https://i.postimg.cc/6qyt04mn/premium-photo-1658506671316-0b293df7c72b.jpg",
      available: true,
    },
  ]

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center p-2">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <Link href="https://v0-telemedicine-booking-page-dcnmeb.vercel.app/">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white mb-4 cursor-pointer flex items-center justify-center">
              Book Appointment
            </h2>
          </Link>
          <p className="text-sm flex items-center justify-center">You can book appointment easily here.</p>
        </div>
      </div>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-6">Find a Doctor</h1>

        <div className="grid gap-6 md:grid-cols-4 mb-10">
          <div className="md:col-span-3">
            <Input placeholder="Search by name, specialty, or condition" className="w-full" />
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="dermatology">Dermatology</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
                <SelectItem value="orthopedics">Orthopedics</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                <SelectItem value="psychiatry">Psychiatry</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden">
              <div className="aspect-square relative">
                <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{doctor.name}</CardTitle>
                <CardDescription>{doctor.specialty}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                  </div>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{doctor.reviews} reviews</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Education:</span>
                    <span>{doctor.education}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${doctor.available ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 hover:bg-gray-500 cursor-not-allowed"}`}
                  disabled={!doctor.available}
                >
                  {doctor.available ? "Book Appointment" : "Currently Unavailable"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

