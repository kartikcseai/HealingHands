"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, FileText, MessageSquare, User, Video } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      date: "May 10, 2025",
      time: "10:00 AM",
      type: "Video",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Dermatology",
      date: "May 15, 2025",
      time: "2:30 PM",
      type: "Video",
      image: "/placeholder.svg?height=50&width=50",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Patient Dashboard</h1>
        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="records">Medical Records</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{upcomingAppointments.length}</div>
                  <p className="text-xs text-muted-foreground">
                    Next: {upcomingAppointments[0]?.date}, {upcomingAppointments[0]?.time}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">From 2 healthcare providers</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Prescriptions</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">2 need renewal</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed Visits</CardTitle>
                  <User className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">In the last 12 months</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your scheduled consultations with healthcare providers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center space-x-4 rounded-md border p-4">
                      <Image
                        src={appointment.image || "/placeholder.svg"}
                        alt={appointment.doctor}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div className="flex-1 space-y-1">
                        <p className="font-medium">{appointment.doctor}</p>
                        <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <div className="flex items-center text-sm">
                          <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                          {appointment.date}
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                          {appointment.time}
                        </div>
                        <div className="flex items-center text-sm">
                          <Video className="mr-1 h-4 w-4 text-blue-600" />
                          {appointment.type}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Join
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <Link href="/dashboard/appointments">
                    <Button variant="outline">View All Appointments</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Appointment Calendar</CardTitle>
                <CardDescription>Schedule and manage your healthcare appointments</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Calendar view would be implemented here</p>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button className="bg-blue-600 hover:bg-blue-700">Schedule New Appointment</Button>
            </div>
          </TabsContent>

          <TabsContent value="records" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Medical Records</CardTitle>
                <CardDescription>Access and manage your health information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border p-4">
                    <h3 className="font-medium">Lab Results</h3>
                    <p className="text-sm text-muted-foreground">View your recent laboratory test results</p>
                    <Button variant="link" className="p-0 h-auto text-blue-600">
                      View Records
                    </Button>
                  </div>
                  <div className="rounded-md border p-4">
                    <h3 className="font-medium">Prescriptions</h3>
                    <p className="text-sm text-muted-foreground">Manage your current medications and request refills</p>
                    <Button variant="link" className="p-0 h-auto text-blue-600">
                      View Records
                    </Button>
                  </div>
                  <div className="rounded-md border p-4">
                    <h3 className="font-medium">Visit History</h3>
                    <p className="text-sm text-muted-foreground">Review your past appointments and diagnoses</p>
                    <Button variant="link" className="p-0 h-auto text-blue-600">
                      View Records
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>Communicate securely with your healthcare providers</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Messaging interface would be implemented here</p>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button className="bg-blue-600 hover:bg-blue-700">New Message</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

