"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Mic, MicOff, Phone, Video, VideoOff } from "lucide-react"

export default function VideoConsultationPage({ params }: { params: { id: string } }) {
  const [isConnected, setIsConnected] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [elapsedTime, setElapsedTime] = useState(0)

  // Simulate connection
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConnected(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Timer for call duration
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isConnected) {
      interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1)
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isConnected])

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const toggleMute = () => setIsMuted(!isMuted)
  const toggleVideo = () => setIsVideoOn(!isVideoOn)
  const endCall = () => window.history.back()

  return (
    <div className="container py-6 flex flex-col h-screen">
      <h1 className="text-2xl font-bold mb-4">Video Consultation: Dr. Sarah Johnson</h1>

      <div className="grid md:grid-cols-3 gap-6 flex-1">
        <div className="md:col-span-2 flex flex-col">
          <div className="relative bg-gray-900 rounded-lg flex-1 flex items-center justify-center overflow-hidden">
            {!isConnected && (
              <div className="text-white text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
                <p>Connecting to your doctor...</p>
              </div>
            )}

            {isConnected && (
              <>
                {isVideoOn ? (
                  <div className="absolute inset-0 w-full h-full bg-gray-800">
                    <div className="w-full h-full flex items-center justify-center text-white">
                      Doctor's video feed would appear here
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-white text-center">
                      <VideoOff className="h-16 w-16 mx-auto mb-4" />
                      <p>Video is turned off</p>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-4 right-4 w-1/4 h-1/4 bg-gray-700 rounded-lg border-2 border-white overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white text-sm">Your camera</div>
                </div>

                <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {formatTime(elapsedTime)}
                </div>
              </>
            )}
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full h-12 w-12 ${isMuted ? "bg-red-100 text-red-600" : ""}`}
              onClick={toggleMute}
            >
              {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full h-12 w-12 ${!isVideoOn ? "bg-red-100 text-red-600" : ""}`}
              onClick={toggleVideo}
            >
              {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
            </Button>
            <Button variant="destructive" size="icon" className="rounded-full h-12 w-12" onClick={endCall}>
              <Phone className="h-5 w-5 rotate-135" />
            </Button>
          </div>
        </div>

        <div>
          <Tabs defaultValue="notes" className="w-full h-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="records">Medical Records</TabsTrigger>
            </TabsList>
            <TabsContent value="notes" className="h-[calc(100%-40px)]">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>Consultation Notes</CardTitle>
                  <CardDescription>Take notes during your consultation</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <Textarea placeholder="Type your notes here..." className="h-full min-h-[200px]" />
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Notes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="records" className="h-[calc(100%-40px)]">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Medical Records</CardTitle>
                  <CardDescription>Access your health information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 border rounded-md">
                      <FileText className="h-5 w-5 mr-2 text-blue-600" />
                      <div>
                        <p className="font-medium">Recent Lab Results</p>
                        <p className="text-sm text-muted-foreground">Updated 2 weeks ago</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center p-3 border rounded-md">
                      <FileText className="h-5 w-5 mr-2 text-blue-600" />
                      <div>
                        <p className="font-medium">Current Medications</p>
                        <p className="text-sm text-muted-foreground">Updated 3 days ago</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center p-3 border rounded-md">
                      <FileText className="h-5 w-5 mr-2 text-blue-600" />
                      <div>
                        <p className="font-medium">Medical History</p>
                        <p className="text-sm text-muted-foreground">Complete record</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

