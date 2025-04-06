"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PatientInfoFormProps {
  patientInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: string
    reason: string
    insurance: string
  }
  onUpdatePatientInfo: (info: any) => void
}

export default function PatientInfoForm({ patientInfo, onUpdatePatientInfo }: PatientInfoFormProps) {
  const [date, setDate] = useState<Date | undefined>(
    patientInfo.dateOfBirth ? new Date(patientInfo.dateOfBirth) : undefined,
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    onUpdatePatientInfo({
      ...patientInfo,
      [name]: value,
    })
  }

  const handleDateChange = (date: Date | undefined) => {
    setDate(date)
    if (date) {
      onUpdatePatientInfo({
        ...patientInfo,
        dateOfBirth: format(date, "yyyy-MM-dd"),
      })
    }
  }

  const handleInsuranceChange = (value: string) => {
    onUpdatePatientInfo({
      ...patientInfo,
      insurance: value,
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Patient Information</h2>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={patientInfo.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={patientInfo.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={patientInfo.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={patientInfo.phone}
              onChange={handleInputChange}
              placeholder="(123) 456-7890"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="dateOfBirth"
                  variant={"outline"}
                  className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Select your date of birth</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateChange}
                  initialFocus
                  disabled={(date) => date > new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="insurance">Insurance Provider</Label>
            <Select value={patientInfo.insurance} onValueChange={handleInsuranceChange}>
              <SelectTrigger id="insurance">
                <SelectValue placeholder="Select your insurance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None / Self-pay</SelectItem>
                <SelectItem value="aetna">Aetna</SelectItem>
                <SelectItem value="bluecross">Blue Cross Blue Shield</SelectItem>
                <SelectItem value="cigna">Cigna</SelectItem>
                <SelectItem value="humana">Humana</SelectItem>
                <SelectItem value="medicare">Medicare</SelectItem>
                <SelectItem value="unitedhealth">UnitedHealthcare</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="reason">
            Reason for Visit <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="reason"
            name="reason"
            value={patientInfo.reason}
            onChange={handleInputChange}
            placeholder="Please briefly describe your symptoms or reason for the appointment"
            className="min-h-[100px]"
            required
          />
        </div>

        <div className="text-sm text-gray-500">
          <p>
            Fields marked with <span className="text-red-500">*</span> are required
          </p>
        </div>
      </div>
    </div>
  )
}

