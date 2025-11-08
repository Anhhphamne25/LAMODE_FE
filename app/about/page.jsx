"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const teamMembers = [
  {
    name: "Alexandra Bennett",
    role: "Founder & Creative Director",
    image: "/womens-fashion-clothing.jpg",
    bio: "Visionary designer with 15+ years of luxury fashion experience.",
  },
  {
    name: "Marcus Sterling",
    role: "Head of Operations",
    image: "/mens-fashion-clothing.jpg",
    bio: "Operations expert dedicated to excellence and customer satisfaction.",
  },
  {
    name: "Isabella Rossi",
    role: "Lead Designer",
    image: "/luxury-cashmere-sweater.jpg",
    bio: "Award-winning designer pushing boundaries of contemporary fashion.",
  },
  {
    name: "James Chen",
    role: "Sustainability Officer",
    image: "/designer-shoes.jpg",
    bio: "Environmental advocate committed to ethical fashion practices.",
  },
]

const milestones = [
  { year: "2015", title: "Founded", description: "LUX Fashion started with a vision to redefine luxury" },
  { year: "2018", title: "First Flagship Store", description: "Opened flagship store in Manhattan" },
  { year: "2021", title: "100K Customers", description: "Reached 100,000 satisfied customers globally" },
  { year: "2024", title: "Sustainable Initiative", description: "Launched fully sustainable collection" },
]

export default function AboutPage() {
  const [expandedTeamMember, setExpandedTeamMember] = useState(null)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="fade-in-up">
              <h1 className="text-5xl font-bold mb-6 text-foreground">About LUX Fashion</h1>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We are dedicated to crafting premium fashion that celebrates individuality, quality, and timeless
                elegance. Every piece tells a story of meticulous craftsmanship and sustainable innovation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since our founding in 2015, we've remained committed to delivering exceptional fashion that empowers our
                customers to express their unique style while supporting ethical and sustainable practices.
              </p>
            </div>

            {/* Hero Image */}
            <div className="scroll-reveal">
              <div className="relative rounded-lg overflow-hidden h-96 bg-muted group">
                <img
                  src="/summer-collection-clothing.jpg"
                  alt="About LUX"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="scroll-reveal text-center">
                <h3 className="text-3xl font-bold mb-3">Our Mission</h3>
                <p className="text-primary-foreground/80">
                  To empower individuals through premium, sustainable fashion that celebrates uniqueness and quality.
                </p>
              </div>
              <div className="scroll-reveal text-center" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-3xl font-bold mb-3">Our Vision</h3>
                <p className="text-primary-foreground/80">
                  To become the leading luxury fashion brand known for innovation, ethics, and timeless style.
                </p>
              </div>
              <div className="scroll-reveal text-center" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-3xl font-bold mb-3">Our Values</h3>
                <p className="text-primary-foreground/80">
                  Quality, sustainability, inclusivity, and innovation guide every decision we make.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Our Journey</h2>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="scroll-reveal flex gap-8 items-start"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Line */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {milestone.year}
                  </div>
                  {index !== milestones.length - 1 && <div className="w-1 h-24 bg-border my-2"></div>}
                </div>

                {/* Content */}
                <div className="pt-2 pb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold mb-12 text-foreground">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-card border border-border rounded-lg overflow-hidden card-lift group">
                  {/* Team Photo */}
                  <div className="relative w-full h-64 bg-muted overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Team Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-accent font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted py-16 mb-0">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="scroll-reveal text-center">
                <p className="text-4xl font-bold text-primary mb-2">10+</p>
                <p className="text-foreground font-medium">Years of Excellence</p>
              </div>
              <div className="scroll-reveal text-center" style={{ animationDelay: "0.1s" }}>
                <p className="text-4xl font-bold text-primary mb-2">500K+</p>
                <p className="text-foreground font-medium">Happy Customers</p>
              </div>
              <div className="scroll-reveal text-center" style={{ animationDelay: "0.2s" }}>
                <p className="text-4xl font-bold text-primary mb-2">50+</p>
                <p className="text-foreground font-medium">Store Locations</p>
              </div>
              <div className="scroll-reveal text-center" style={{ animationDelay: "0.3s" }}>
                <p className="text-4xl font-bold text-primary mb-2">100%</p>
                <p className="text-foreground font-medium">Sustainable Materials</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
