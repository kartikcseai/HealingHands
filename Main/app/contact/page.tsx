"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Mail, Phone } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="container py-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-700 mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          We're here to help. Reach out to our team with any questions or concerns.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-blue-600" />
              Phone Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-1">For immediate assistance:</p>
            <p className="font-medium">+91 9555832575</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-blue-600" />
              Email Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-1">Send us a message:</p>
            <p className="font-medium">support@mediconnect.com</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-blue-600" />
              Hours of Operation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-1">We're available:</p>
            <p className="font-medium">24/7, 365 days a year</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          {isSubmitted ? (
            <Card>
              <CardHeader>
                <CardTitle>Thank You!</CardTitle>
                <CardDescription>
                  Your message has been sent successfully. Our team will get back to you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => setIsSubmitted(false)} className="bg-blue-600 hover:bg-blue-700">
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="appointment">Appointment Issue</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} required />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">How does telemedicine work?</h3>
              <p className="text-muted-foreground">
                Telemedicine allows you to consult with healthcare providers remotely through secure video calls. You
                can discuss symptoms, receive diagnoses, and get prescriptions without leaving your home.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Is my information secure?</h3>
              <p className="text-muted-foreground">
                Yes, we take privacy and security seriously. Our platform is HIPAA-compliant and uses encryption to
                protect your personal and medical information.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">How much does it cost?</h3>
              <p className="text-muted-foreground">
                Our services have different pricing options depending on the type of care you need. We accept most major
                insurance plans, and we offer affordable self-pay rates for those without insurance.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Can I get prescriptions through telemedicine?</h3>
              <p className="text-muted-foreground">
                Yes, our licensed providers can prescribe medications when medically necessary. These prescriptions can
                be sent electronically to your preferred pharmacy for pickup or delivery.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">What if I need to see a doctor in person?</h3>
              <p className="text-muted-foreground">
                If your provider determines that you need in-person care, they will refer you to appropriate local
                healthcare facilities or specialists in your area.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/faq">
              <Button variant="outline">View All FAQs</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Location</h2>

        <Card>
          <CardContent className="p-0">
            <div className="aspect-video w-full bg-gray-200 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.242976962111!2d77.4863865753523!3d28.472228375752643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb193588358f%3A0x8274cec5a1321578!2sGL%20Bajaj%20Institute%20of%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1743882472244!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h3 className="font-medium mb-2">HealingHands Headquarters</h3>
              <p className="text-muted-foreground">
                Plot no. 2, GL Bajaj Institute of Technology and Management
                <br />
                United States
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

