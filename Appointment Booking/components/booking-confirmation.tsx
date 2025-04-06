import { format } from "date-fns"
import { Check, Calendar, Clock, User, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Mock data for doctors (same as in doctor-selection.tsx)
const doctors = [
  {
    id: "dr-smith",
    name: "Dr. Sarah Smith",
    specialty: "Family Medicine",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "dr-patel",
    name: "Dr. Raj Patel",
    specialty: "Internal Medicine",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "dr-johnson",
    name: "Dr. Michael Johnson",
    specialty: "Pediatrics",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "dr-chen",
    name: "Dr. Lisa Chen",
    specialty: "Dermatology",
    image: "/placeholder.svg?height=200&width=200",
  },
]

interface BookingConfirmationProps {
  doctor: string | null
  date: Date | null
  time: string | null
  patientInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: string
    reason: string
    insurance: string
  }
}

export default function BookingConfirmation({ doctor, date, time, patientInfo }: BookingConfirmationProps) {
  const selectedDoctor = doctors.find((d) => d.id === doctor)

  const formatInsurance = (insurance: string) => {
    if (!insurance) return "None / Self-pay"

    const insuranceMap: Record<string, string> = {
      none: "None / Self-pay",
      aetna: "Aetna",
      bluecross: "Blue Cross Blue Shield",
      cigna: "Cigna",
      humana: "Humana",
      medicare: "Medicare",
      unitedhealth: "UnitedHealthcare",
      other: "Other",
    }

    return insuranceMap[insurance] || insurance
  }

  return (
    <div>
      <div className="flex items-center justify-center mb-6">
        <div className="bg-green-100 text-green-700 rounded-full p-3">
          <Check className="h-8 w-8" />
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-2">Appointment Summary</h2>
      <p className="text-center text-gray-600 mb-6">Please review your appointment details before confirming</p>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 text-blue-700 rounded-full p-2">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">Appointment Details</h3>
              <p className="text-gray-600">
                {date ? format(date, "EEEE, MMMM d, yyyy") : "Date not selected"} at {time || "Time not selected"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-100 text-purple-700 rounded-full p-2">
              <User className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">Doctor</h3>
              <p className="text-gray-600">
                {selectedDoctor ? `${selectedDoctor.name} (${selectedDoctor.specialty})` : "No doctor selected"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-amber-100 text-amber-700 rounded-full p-2">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">Appointment Type</h3>
              <p className="text-gray-600">Telemedicine Video Visit (30 minutes)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-4">Patient Information</h3>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p>
                  {patientInfo.firstName} {patientInfo.lastName}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>{patientInfo.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p>{patientInfo.phone || "Not provided"}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p>
                  {patientInfo.dateOfBirth ? format(new Date(patientInfo.dateOfBirth), "MMMM d, yyyy") : "Not provided"}
                </p>
              </div>
            </div>

            <Separator />

            <div>
              <p className="text-sm text-gray-500">Insurance Provider</p>
              <p>{formatInsurance(patientInfo.insurance)}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <FileText className="h-4 w-4 text-gray-500" />
                <p className="text-sm text-gray-500">Reason for Visit</p>
              </div>
              <p className="text-gray-700">{patientInfo.reason}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-sm text-gray-500">
        <p className="mb-2">
          <strong>What happens next?</strong>
        </p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>You'll receive a confirmation email with appointment details and instructions.</li>
          <li>15 minutes before your appointment, you'll receive a link to join the video call.</li>
          <li>Make sure your device has a working camera and microphone.</li>
          <li>Find a quiet, private space for your appointment.</li>
        </ol>
      </div>
    </div>
  )
}

