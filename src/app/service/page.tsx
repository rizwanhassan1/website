import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { ArrowRight, CheckCircle, BarChart3, Code, Lightbulb, Shield, Smartphone, Users } from "lucide-react"
import Link from "next/link"
import Navbar from "@/app/components/ui/Navbar"

export default function ServicesPage() {
  const services = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Strategic Consulting",
      description: "Transform your business with expert strategic guidance and innovative solutions.",
      features: [
        "Business Strategy Development",
        "Market Research & Analysis",
        "Competitive Intelligence",
        "Growth Planning & Execution",
        "Risk Assessment & Mitigation",
        "Process Optimization",
      ],
      price: "Starting at $2,500",
      popular: false,
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Digital Solutions",
      description: "Modern technology solutions to digitize and streamline your operations.",
      features: [
        "Custom Web Development",
        "Mobile App Development",
        "E-commerce Solutions",
        "Cloud Integration",
        "API Development",
        "System Integration",
      ],
      price: "Starting at $5,000",
      popular: true,
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Business Analytics",
      description: "Data-driven insights and analytics to make informed business decisions.",
      features: [
        "Performance Dashboard",
        "Custom Reporting",
        "Trend Analysis",
        "Predictive Analytics",
        "KPI Monitoring",
        "Data Visualization",
      ],
      price: "Starting at $1,800",
      popular: false,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Development",
      description: "Build and optimize high-performing teams for sustainable growth.",
      features: [
        "Leadership Training",
        "Team Building Programs",
        "Skills Assessment",
        "Performance Coaching",
        "Organizational Design",
        "Culture Development",
      ],
      price: "Starting at $3,200",
      popular: false,
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Compliance",
      description: "Protect your business with comprehensive security and compliance solutions.",
      features: [
        "Security Audits",
        "Compliance Assessment",
        "Risk Management",
        "Data Protection",
        "Policy Development",
        "Training & Awareness",
      ],
      price: "Starting at $4,000",
      popular: false,
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Boost your online presence and reach your target audience effectively.",
      features: [
        "SEO Optimization",
        "Social Media Strategy",
        "Content Marketing",
        "PPC Campaigns",
        "Email Marketing",
        "Brand Development",
      ],
      price: "Starting at $2,800",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Professional Services for <span className="text-primary">Modern Businesses</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Comprehensive solutions designed to accelerate your growth, optimize operations, and drive sustainable
            success in today's competitive market.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`border-border hover:shadow-lg transition-all duration-300 relative ${
                  service.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="pt-2">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that ensures successful project delivery and exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your needs and define project scope" },
              { step: "02", title: "Strategy", description: "Develop a comprehensive plan tailored to your goals" },
              { step: "03", title: "Execution", description: "Implement solutions with precision and expertise" },
              { step: "04", title: "Optimization", description: "Continuous improvement and ongoing support" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            Let's discuss your project requirements and create a customized solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}