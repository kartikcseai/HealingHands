import type { Metadata } from "next"
import BookingPage from "@/components/booking-page"

export const metadata: Metadata = {
  title: "HealingHands - Book Appointment",
  description: "Book your virtual healthcare appointment with our experienced doctors",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white-50 to-white">
      <BookingPage />
    </main>
  )
}

