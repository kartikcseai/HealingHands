import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Calendar, Heart, Pill, Stethoscope, Thermometer, User, Video } from "lucide-react"

export default function ServicesPage() {
  const specialties = [
    {
      name: "Primary Care",
      description: "Comprehensive healthcare for patients of all ages",
      icon: User,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Cardiology",
      description: "Diagnosis and treatment of heart conditions",
      icon: Heart,
      color: "bg-red-100 text-red-600",
    },
    {
      name: "Neurology",
      description: "Care for disorders of the nervous system",
      icon: Brain,
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "Pediatrics",
      description: "Healthcare for infants, children, and adolescents",
      icon: Thermometer,
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Internal Medicine",
      description: "Prevention, diagnosis, and treatment of adult diseases",
      icon: Stethoscope,
      color: "bg-teal-100 text-teal-600",
    },
    {
      name: "Psychiatry",
      description: "Mental health care and treatment",
      icon: Brain,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      name: "Dermatology",
      description: "Care for skin, hair, and nail conditions",
      icon: User,
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "Pharmacy",
      description: "Prescription management and medication delivery",
      icon: Pill,
      color: "bg-yellow-100 text-yellow-600",
    },
  ]

  const serviceTypes = [
    {
      title: "Video Consultations",
      description: "Connect with healthcare providers through secure video calls",
      icon: Video,
      features: [
        "24/7 availability for urgent care",
        "Scheduled appointments with specialists",
        "Secure, HIPAA-compliant platform",
        "Prescription services available",
      ],
      price: "₹49",
      unit: "per consultation",
    },
    {
      title: "Preventive Care",
      description: "Regular check-ups and screenings to maintain your health",
      icon: Calendar,
      features: [
        "Annual physical examinations",
        "Health risk assessments",
        "Immunizations and vaccinations",
        "Personalized health plans",
      ],
      price: "₹99",
      unit: "per year",
    },
    {
      title: "Chronic Disease Management",
      description: "Ongoing care and monitoring for chronic conditions",
      icon: Heart,
      features: [
        "Regular monitoring and check-ins",
        "Medication management",
        "Lifestyle and nutrition guidance",
        "Coordination with specialists",
      ],
      price: "₹29",
      unit: "per month",
    },
  ]

  return (
    <div className="container py-10">
      {/* Health Advisory Bot Section */}
      <div className="flex items-center justify-center p-2 ">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <Link href="https://creative-pika-b0a548.netlify.app/">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white mb-4 cursor-pointer flex items-center justify-center">
              Health Advisory Bot
            </h2>
          </Link>
          <p className="text-sm">
            A health advisory bot provides personalized health tips, symptom checks, and wellness guidance to support
            healthier lifestyles.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-2">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <Link href="https://v0-full-stack-bmi-calculator-rz9um9.vercel.app/">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white mb-4 cursor-pointer flex items-center justify-center">
              B.M.I. Calculator
            </h2>
          </Link>
          <p className="text-sm flex items-center justify-center">Calculate your Body Mass Index</p>
        </div>
      </div>

      <div className="text-center mb-12 p-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-700 mb-2">
          Our Healthcare Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Comprehensive virtual healthcare services delivered by board-certified providers
        </p>
      </div>

      {/* Service Types */}
      <div className="grid gap-8 md:grid-cols-3 mb-10">
        {serviceTypes.map((service, index) => {
          const Icon = service.icon
          return (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 shrink-0 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start pt-4 border-t">
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">{service.price}</span>
                  <span className="ml-1 text-muted-foreground">{service.unit}</span>
                </div>
                <Link href="https://v0-india-telemedicine-payment-ytzebs.vercel.app/">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {/* Medical Specialties */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-700 mb-4">Medical Specialties</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Our platform connects you with specialists across a wide range of medical fields
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon
            return (
              <div key={index} className="flex p-4 border rounded-lg">
                <div className={`w-12 h-12 rounded-lg ${specialty.color} flex items-center justify-center mr-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{specialty.name}</h3>
                  <p className="text-sm text-muted-foreground">{specialty.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-700 mb-4">
            How Our Telemedicine Works
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Getting the care you need is simple and straightforward
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-24 bottom-24 w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  1
                </div>
                <h3 className="ml-4 text-xl font-medium">Create Your Account</h3>
              </div>
              <div className="ml-14">
                <p className="text-muted-foreground mb-4">
                  Sign up and complete your health profile with your medical history, current medications, and health
                  concerns.
                </p>
                <Image
                  src="https://i.postimg.cc/1XYv8qKj/create-account-illustration-download-in-svg-png-gif-file-formats-online-registration-user-register.webp"
                  alt="Create account illustration"
                  width={400}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="md:mt-32 relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  2
                </div>
                <h3 className="ml-4 text-xl font-medium">Choose a Provider</h3>
              </div>
              <div className="ml-14">
                <p className="text-muted-foreground mb-4">
                  Browse our network of licensed healthcare professionals and select the one that best meets your needs.
                </p>
                <Image
                  src="https://i.postimg.cc/130DTFq1/select-concept-illustration-114360-383.avif"
                  alt="Choose provider illustration"
                  width={400}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  3
                </div>
                <h3 className="ml-4 text-xl font-medium">Schedule Appointment</h3>
              </div>
              <div className="ml-14">
                <p className="text-muted-foreground mb-4">
                  Book a convenient time for your virtual consultation, with options available 24/7 for urgent care
                  needs.
                </p>
                <Image
                  src="https://i.postimg.cc/qq98fXw4/collection-appointment-scheduling-flat-illustrations-9206-20732.avif"
                  alt="Schedule appointment illustration"
                  width={400}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="md:mt-32 relative z-10">
              <div className="flex items-center mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  4
                </div>
                <h3 className="ml-4 text-xl font-medium">Receive Care</h3>
              </div>
              <div className="ml-14">
                <p className="text-muted-foreground mb-4">
                  Connect with your provider via secure video call, get diagnosed, and receive treatment plans and
                  prescriptions as needed.
                </p>
                <Image
                  src="https://i.postimg.cc/CMtCfSgX/istockphoto-2145455279-612x612.jpg"
                  alt="Receive care illustration"
                  width={400}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to experience healthcare reimagined?</h2>
        <p className="max-w-2xl mx-auto mb-6 text-blue-100">
          Join thousands of patients who have transformed their healthcare experience with our telemedicine platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Sign Up Now
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

