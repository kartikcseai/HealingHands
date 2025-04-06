import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle, Heart, Shield, Star, Users } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Jennifer Lee",
      role: "Chief Medical Officer",
      bio: "Board-certified physician with over 15 years of experience in telemedicine and digital health innovation.",
      image: "https://i.postimg.cc/05p57CRv/istockphoto-1667644040-640x640.jpg",
    },
    {
      name: "Michael Roberts",
      role: "Chief Executive Officer",
      bio: "Healthcare technology leader with a passion for improving access to quality healthcare through innovation.",
      image: "https://i.postimg.cc/q7h4qsX9/photo-1438761681033-6461ffad8d80.jpg",
    },
    {
      name: "Sarah Thompson",
      role: "Chief Technology Officer",
      bio: "Technology expert specializing in secure healthcare platforms and HIPAA-compliant software solutions.",
      image: "https://i.postimg.cc/GpWry4X9/gettyimages-1752533660-640x640.jpg",
    },
    {
      name: "Dr. David Wilson",
      role: "Medical Director",
      bio: "Experienced physician focused on establishing clinical guidelines and ensuring quality of care.",
      image: "https://i.postimg.cc/kG9mTk3m/istockphoto-2006436002-640x640.jpg",
    },
  ]

  const values = [
    {
      title: "Patient-Centered Care",
      description:
        "We put patients at the center of everything we do, focusing on their needs, preferences, and outcomes.",
      icon: Heart,
    },
    {
      title: "Quality & Excellence",
      description: "We are committed to delivering the highest standard of healthcare through our platform.",
      icon: Award,
    },
    {
      title: "Innovation",
      description:
        "We continuously seek new ways to improve healthcare delivery through technology and process innovation.",
      icon: Star,
    },
    {
      title: "Accessibility",
      description:
        "We believe quality healthcare should be accessible to everyone, regardless of location or circumstances.",
      icon: Users,
    },
    {
      title: "Privacy & Security",
      description: "We maintain the highest standards of data protection and patient confidentiality.",
      icon: Shield,
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical standards in all aspects of our business.",
      icon: CheckCircle,
    },
  ]

  return (
    <div className="container py-10">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-700 mb-6">
            Transforming Healthcare Through Technology
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            MediConnect is on a mission to make quality healthcare accessible to everyone through innovative
            telemedicine solutions. We connect patients with licensed healthcare providers for virtual consultations,
            providing convenient, affordable, and high-quality care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="https://i.postimg.cc/qvgdDsYz/w-Pd-MTY76-Zhia5-Tef1g-Lc-Ay-Ox8f-FT7-Gi-f-JJBz-RI4-SA.jpg"
            alt="About MediConnect"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-700 mb-4">Our Story</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">How we're revolutionizing healthcare delivery</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://i.postimg.cc/y83bSvtX/1-SEZdbo-Alxpr-TZy-C8-Sv-j-Rg.jpg"
              alt="Our story"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="mb-4">
              Founded in 2020, MediConnect emerged from a simple yet powerful idea: healthcare should be accessible to
              everyone, regardless of where they live or their circumstances.
            </p>
            <p className="mb-4">
              Our founders, a team of healthcare professionals and technology experts, witnessed firsthand the
              challenges many people face in accessing timely and quality healthcare. They set out to create a solution
              that would bridge these gaps using the power of technology.
            </p>
            <p className="mb-4">
              What began as a small startup has grown into a comprehensive telemedicine platform serving thousands of
              patients nationwide. We've built a network of board-certified healthcare providers across numerous
              specialties, all committed to delivering exceptional care through our secure virtual platform.
            </p>
            <p>
              Today, MediConnect continues to innovate and expand, driven by our mission to transform healthcare
              delivery and improve health outcomes for all.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-700 mb-4">Our Values</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">The principles that guide everything we do</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Leadership Team */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-700 mb-4">Our Leadership Team</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">Meet the experts behind MediConnect</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mb-16 py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-700 mb-4">Our Impact</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">Making a difference in healthcare delivery</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-700 mb-2">50,000+</div>
            <p className="text-muted-foreground">Patients Served</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-700 mb-2">500+</div>
            <p className="text-muted-foreground">Healthcare Providers</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-700 mb-2">20+</div>
            <p className="text-muted-foreground">Medical Specialties</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-700 mb-2">98%</div>
            <p className="text-muted-foreground">Patient Satisfaction</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Join us in transforming healthcare</h2>
        <p className="max-w-2xl mx-auto mb-6 text-blue-100">
          Experience the future of healthcare with MediConnect's innovative telemedicine platform.
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

