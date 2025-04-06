"use client"

import { useState } from "react"
import { format, addDays, isSameDay } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

interface AppointmentCalendarProps {
  selectedDate: Date | null
  selectedTime: string | null
  onSelectDate: (date: Date) => void
  onSelectTime: (time: string) => void
}

// Generate available time slots
const generateTimeSlots = (date: Date | null) => {
  if (!date) return []

  // In a real app, these would come from your backend based on doctor availability
  const today = new Date()
  const isToday = date && isSameDay(date, today)

  // Start times later in the day if the selected date is today
  const startHour = isToday ? Math.max(9, today.getHours() + 1) : 9
  const endHour = 17 // 5 PM

  const timeSlots = []
  for (let hour = startHour; hour < endHour; hour++) {
    for (const minute of [0, 30]) {
      // Skip times that have already passed today
      if (isToday && hour === today.getHours() && minute <= today.getMinutes()) continue

      const formattedHour = hour % 12 === 0 ? 12 : hour % 12
      const period = hour >= 12 ? "PM" : "AM"
      const formattedMinute = minute === 0 ? "00" : minute

      timeSlots.push(`${formattedHour}:${formattedMinute} ${period}`)
    }
  }

  return timeSlots
}

export default function AppointmentCalendar({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}: AppointmentCalendarProps) {
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>(generateTimeSlots(selectedDate))

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      onSelectDate(date)
      setAvailableTimeSlots(generateTimeSlots(date))
      onSelectTime(null) // Reset time when date changes
    }
  }

  // Calculate date range for the next 30 days
  const today = new Date()
  const thirtyDaysFromNow = addDays(today, 30)

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Select Date & Time</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-3">Select a Date</h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            disabled={
              (date) =>
                date < today ||
                date > thirtyDaysFromNow ||
                date.getDay() === 0 || // Sunday
                date.getDay() === 6 // Saturday
            }
            className="rounded-md border"
          />
          <p className="text-sm text-gray-500 mt-2">Appointments available Monday-Friday for the next 30 days</p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Select a Time</h3>
          {selectedDate ? (
            <>
              <p className="mb-3 text-gray-600">Available times for {format(selectedDate, "EEEE, MMMM d, yyyy")}:</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {availableTimeSlots.length > 0 ? (
                  availableTimeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      className="justify-start"
                      onClick={() => onSelectTime(time)}
                    >
                      <Clock className="mr-2 h-4 w-4" />
                      {time}
                    </Button>
                  ))
                ) : (
                  <p className="col-span-full text-gray-500">No available appointments for this date.</p>
                )}
              </div>
            </>
          ) : (
            <Card>
              <CardContent className="p-6 text-center text-gray-500">
                Please select a date first to see available times
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

