"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ArrowRight, CreditCard, IndianRupee, QrCode, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { generatePaymentQR } from "@/lib/payment-utils"
import QRCodeDisplay from "@/components/qr-code-display"

const formSchema = z.object({
  amount: z
    .string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, { message: "Amount must be a positive number" }),
  patientName: z.string().min(2, "Patient name is required"),
  patientEmail: z.string().email("Invalid email address"),
  patientPhone: z.string().min(10, "Phone number must be at least 10 digits"),
  paymentMethod: z.enum(["upi", "card", "netbanking"]),
})

export default function PaymentGateway() {
  const router = useRouter()
  const [qrData, setQrData] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("details")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      patientName: "",
      patientEmail: "",
      patientPhone: "",
      paymentMethod: "upi",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.paymentMethod === "upi") {
      const qrString = await generatePaymentQR(values.amount)
      setQrData(qrString)
      setActiveTab("payment")
    } else {
      // For card and netbanking, we would typically redirect to a payment gateway
      // For demo purposes, we'll just show a success message
      router.push(`/payment/success?amount=${values.amount}&name=${values.patientName}`)
    }
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="bg-blue-700 text-white rounded-t-lg">
        <CardTitle className="text-2xl">Payment Gateway</CardTitle>
        <CardDescription className="text-blue-100">Secure payment for your HealingHands consultation</CardDescription>
      </CardHeader>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="details">Patient Details</TabsTrigger>
          <TabsTrigger value="payment" disabled={!qrData && activeTab !== "payment"}>
            Payment
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <CardContent className="space-y-4 pt-6">
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Consultation Fee (₹)</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                          <Input className="pl-10" placeholder="500" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="patientName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Patient Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="patientEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="patientPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="9876543210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Payment Method</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                          <FormItem className="flex flex-col items-center space-y-0 space-x-0 rounded-md border p-4">
                            <FormControl>
                              <RadioGroupItem value="upi" className="sr-only" />
                            </FormControl>
                            <FormLabel className="flex flex-col items-center space-y-2 cursor-pointer">
                              <QrCode className="h-6 w-6 text-blue-600" />
                              <span>UPI / QR Code</span>
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex flex-col items-center space-y-0 space-x-0 rounded-md border p-4">
                            <FormControl>
                              <RadioGroupItem value="card" className="sr-only" />
                            </FormControl>
                            <FormLabel className="flex flex-col items-center space-y-2 cursor-pointer">
                              <CreditCard className="h-6 w-6 text-blue-600" />
                              <span>Credit / Debit Card</span>
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex flex-col items-center space-y-0 space-x-0 rounded-md border p-4">
                            <FormControl>
                              <RadioGroupItem value="netbanking" className="sr-only" />
                            </FormControl>
                            <FormLabel className="flex flex-col items-center space-y-2 cursor-pointer">
                              <Smartphone className="h-6 w-6 text-blue-600" />
                              <span>Net Banking</span>
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
                  Proceed to Payment <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </form>
          </Form>
        </TabsContent>
        <TabsContent value="payment">
          <CardContent className="pt-6 flex flex-col items-center">
            {qrData && (
              <div className="text-center">
                <h3 className="text-xl font-medium mb-4">Scan QR Code to Pay</h3>
                <div className="bg-white p-4 rounded-lg shadow-md inline-block mb-4">
                  <QRCodeDisplay value={qrData} size={200} />
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  Open any UPI app (Google Pay, PhonePe, Paytm, etc.) and scan this QR code to complete your payment
                </p>
                <div className="flex justify-center space-x-4">
                  <img src="/placeholder.svg?height=40&width=40" alt="Google Pay" className="h-10" />
                  <img src="/placeholder.svg?height=40&width=40" alt="PhonePe" className="h-10" />
                  <img src="/placeholder.svg?height=40&width=40" alt="Paytm" className="h-10" />
                  <img src="/placeholder.svg?height=40&width=40" alt="BHIM" className="h-10" />
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button
              onClick={() => router.push("/payment/success?method=upi")}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              I've Completed the Payment
            </Button>
            <Button variant="outline" onClick={() => setActiveTab("details")} className="w-full">
              Go Back
            </Button>
          </CardFooter>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

