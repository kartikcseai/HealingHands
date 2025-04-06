import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Heart, MessageSquare, ShieldCheck, Video } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-700">
                  Virtual Healthcare for You
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Connect with licensed doctors online, get prescriptions, and manage your health from anywhere.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="https://i.postimg.cc/zXpdmM6p/1000244012-Picsart-Ai-Image-Enhancer.png"
                alt="Telemedicine illustration"
                width={550}
                height={550}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">
                Our Services
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                We provide comprehensive virtual healthcare services to meet your needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-2">
                <Video className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Video Consultations</CardTitle>
                <CardDescription>
                  Connect with doctors through secure video calls from the comfort of your home.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-2">
                <Calendar className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Easy Scheduling</CardTitle>
                <CardDescription>Book appointments online at your convenience, 24/7.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-2">
                <MessageSquare className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Secure Messaging</CardTitle>
                <CardDescription>Message your healthcare provider securely through our platform.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-2">
                <Clock className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle className="text-xl">24/7 Availability</CardTitle>
                <CardDescription>Access healthcare professionals around the clock for urgent needs.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-2">
                <ShieldCheck className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Privacy & Security</CardTitle>
                <CardDescription>Your health information is protected with enterprise-grade security.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-2">
                <Heart className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Personalized Care</CardTitle>
                <CardDescription>Receive tailored healthcare plans designed for your specific needs.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">
                How It Works
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Getting started with our telemedicine platform is simple and straightforward.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Create an Account</h3>
              <p className="text-gray-500">
                Sign up and complete your health profile with your medical history and preferences.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Book an Appointment</h3>
              <p className="text-gray-500">
                Choose a doctor and select a convenient time slot for your virtual consultation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Receive Care</h3>
              <p className="text-gray-500">
                Connect with your doctor via video call and get personalized treatment and prescriptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Join thousands of patients who have transformed their healthcare experience.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/doctors">
                <Button size="lg" variant="outline" className="text-black border-white hover:bg-blue-700">
                  Browse Doctors
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

