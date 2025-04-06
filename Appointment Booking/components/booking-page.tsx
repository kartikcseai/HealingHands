"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import DoctorSelection from "@/components/doctor-selection"
import AppointmentCalendar from "@/components/appointment-calendar"
import PatientInfoForm from "@/components/patient-info-form"
import BookingConfirmation from "@/components/booking-confirmation"

const steps = [
  { id: 1, name: "Select Doctor" },
  { id: 2, name: "Choose Date & Time" },
  { id: 3, name: "Patient Information" },
  { id: 4, name: "Confirmation" },
]

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [patientInfo, setPatientInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    reason: "",
    insurance: "",
  })

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isNextDisabled = () => {
    switch (currentStep) {
      case 1:
        return !selectedDoctor
      case 2:
        return !selectedDate || !selectedTime
      case 3:
        return !patientInfo.firstName || !patientInfo.lastName || !patientInfo.email || !patientInfo.reason
      default:
        return false
    }
  }

  return (
    <div className="container max-w-5xl py-8 md:py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Book Your Telemedicine Appointment</h1>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                  ${currentStep >= step.id ? "bg-blue-600 border-blue-600 text-white" : "border-gray-300 text-gray-400"}`}
              >
                {step.id}
              </div>
              <span
                className={`mt-2 text-sm ${currentStep >= step.id ? "text-blue-600 font-medium" : "text-gray-500"}`}
              >
                {step.name}
              </span>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
          <div
            className="absolute top-0 left-0 h-1 bg-blue-600 transition-all duration-300"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      <Card className="shadow-lg">
        <CardContent className="p-6 md:p-8">
          {currentStep === 1 && <DoctorSelection selectedDoctor={selectedDoctor} onSelectDoctor={setSelectedDoctor} />}

          {currentStep === 2 && (
            <AppointmentCalendar
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onSelectDate={setSelectedDate}
              onSelectTime={setSelectedTime}
            />
          )}

          {currentStep === 3 && <PatientInfoForm patientInfo={patientInfo} onUpdatePatientInfo={setPatientInfo} />}

          {currentStep === 4 && (
            <BookingConfirmation
              doctor={selectedDoctor}
              date={selectedDate}
              time={selectedTime}
              patientInfo={patientInfo}
            />
          )}

          <div className="flex justify-between mt-8">
            {currentStep > 1 ? (
              <Button variant="outline" onClick={handleBack} className="flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>
            ) : (
              <div></div>
            )}

            {currentStep < steps.length ? (
              <Button onClick={handleNext} disabled={isNextDisabled()} className="flex items-center gap-1">
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={() => alert("Appointment booked! In a real application, this would submit to your backend.")}
                className="bg-green-600 hover:bg-green-700"
              >
                Confirm Booking
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

