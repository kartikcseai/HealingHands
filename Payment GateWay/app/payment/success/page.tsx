import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const amount = searchParams.amount || "500"
  const name = searchParams.name || "Patient"
  const method = searchParams.method || "card"
  const transactionId = `TXN${Math.floor(Math.random() * 1000000)}`
  const date = new Date().toLocaleDateString("en-IN")
  const time = new Date().toLocaleTimeString("en-IN")

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <Card className="max-w-md w-full shadow-lg">
        <CardHeader className="bg-green-600 text-white rounded-t-lg text-center">
          <CheckCircle className="mx-auto h-16 w-16 mb-2" />
          <CardTitle className="text-2xl">Payment Successful!</CardTitle>
          <CardDescription className="text-green-100">Your telemedicine appointment is confirmed</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="border-b pb-2">
              <p className="text-sm text-gray-500">Amount Paid</p>
              <p className="text-xl font-bold">₹{amount}</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-sm text-gray-500">Patient Name</p>
              <p className="font-medium">{name}</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-sm text-gray-500">Payment Method</p>
              <p className="font-medium capitalize">{method}</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-sm text-gray-500">Transaction ID</p>
              <p className="font-medium">{transactionId}</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-sm text-gray-500">Date & Time</p>
              <p className="font-medium">
                {date} at {time}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-full bg-blue-700 hover:bg-blue-800">Download Receipt</Button>
          <Link href="/" className="w-full">
            <Button variant="outline" className="w-full">
              Return to Home
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  )
}

