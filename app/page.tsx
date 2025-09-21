import Link from "next/link"
import { ArrowRight, BookOpen, FileText, GraduationCap, Lightbulb, MessageSquare, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import ClientHeader from "@/components/client-header"
import ProjectSubmissionForm from "@/components/project-submission-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ClientHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Manav Rachna R&D Center
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Where innovative ideas transform into groundbreaking projects. Discover student research and
                    contribute your own ideas.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#projects">
                    <Button className="px-8">
                      Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#submit">
                    <Button variant="outline" className="px-8 bg-transparent">
                      Submit Your Idea
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Research and Development"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=620&width=1100"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm">Why Choose Our R&D Center</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Empowering Student Innovation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our center provides the resources, mentorship, and platform for students to turn their research ideas
                  into reality.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <BookOpen className="h-6 w-6 text-amber-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Academic Excellence</h3>
                  <p className="text-muted-foreground">
                    Access to cutting-edge research facilities and academic resources to support your projects.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Collaborative Environment</h3>
                  <p className="text-muted-foreground">
                    Connect with like-minded students and faculty mentors to collaborate on innovative projects.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <GraduationCap className="h-6 w-6 text-amber-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Career Development</h3>
                  <p className="text-muted-foreground">
                    Showcase your work to potential employers and build a portfolio that stands out in your field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover innovative research and development projects from our talented students.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="AI-Powered Crop Analysis"
                department="Agricultural Sciences"
                student="Maria Rodriguez"
                description="Using machine learning to analyze crop health and predict optimal harvest times."
                imageUrl="/placeholder.svg?height=400&width=600"
              />
              <ProjectCard
                title="Sustainable Urban Design"
                department="Architecture"
                student="James Chen"
                description="Developing eco-friendly urban planning solutions for growing metropolitan areas."
                imageUrl="/placeholder.svg?height=400&width=600"
              />
              <ProjectCard
                title="Quantum Computing Algorithm"
                department="Computer Science"
                student="Aisha Patel"
                description="Novel approach to optimization problems using quantum computing principles."
                imageUrl="/placeholder.svg?height=400&width=600"
              />
              <ProjectCard
                title="Biodegradable Plastics"
                department="Chemical Engineering"
                student="Carlos Mendez"
                description="Creating sustainable plastic alternatives from agricultural waste products."
                imageUrl="/placeholder.svg?height=400&width=600"
              />
              <ProjectCard
                title="Mental Health App"
                department="Psychology"
                student="Sarah Johnson"
                description="Mobile application for tracking and improving mental wellbeing among college students."
                imageUrl="/placeholder.svg?height=400&width=600"
              />
              <ProjectCard
                title="Renewable Energy Storage"
                department="Electrical Engineering"
                student="David Kim"
                description="Innovative battery technology for efficient storage of solar and wind energy."
                imageUrl="/placeholder.svg?height=400&width=600"
              />
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="mt-4 bg-transparent">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the Conversation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with fellow researchers, share ideas, and collaborate in our student forums.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <ForumCategoryCard
                title="Research Methodologies"
                description="Discuss research approaches, methodologies, and best practices."
                postCount={24}
                icon="FileText"
              />
              <ForumCategoryCard
                title="Technology & Innovation"
                description="Share the latest tech trends and innovative solutions."
                postCount={42}
                icon="Lightbulb"
              />
              <ForumCategoryCard
                title="Collaboration Opportunities"
                description="Find team members and collaborators for your research projects."
                postCount={18}
                icon="Users"
              />
            </div>
            <div className="flex justify-center">
              <Link href="/forum">
                <Button className="mt-4">
                  Visit Forums
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="submit" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Submit Your Project Idea</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Have an innovative research idea? Share it with us and get the support you need to bring it to life.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <ProjectSubmissionForm />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Our R&D Center</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Established in 2010, our Research and Development Center has been at the forefront of student
                    innovation and academic excellence.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    Our mission is to provide students with the resources, mentorship, and platform they need to explore
                    their research interests and develop innovative solutions to real-world problems.
                  </p>
                  <p className="text-muted-foreground">
                    With state-of-the-art facilities and a network of industry partners, we bridge the gap between
                    academic research and practical applications.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button variant="outline">Contact Us</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="R&D Center Building"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=620&width=1100"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about our R&D Center? We're here to help.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <p className="text-muted-foreground">Email: research@university.edu</p>
                  <p className="text-muted-foreground">Phone: (555) 123-4567</p>
                  <p className="text-muted-foreground">Address: 123 University Ave, Campus Building 4, Room 201</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Office Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM (By appointment only)</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 University R&D Center. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Accessibility
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, department, student, description, imageUrl }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
      <img
        alt={title}
        className="aspect-video w-full object-cover"
        height="225"
        src={imageUrl || "/placeholder.svg"}
        width="400"
      />
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-amber-600 font-medium">{department}</span>
          <span className="text-sm text-muted-foreground">by {student}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <Button variant="outline" className="mt-2 bg-transparent">
          View Project
        </Button>
      </div>
    </div>
  )
}

const ContactForm = () => {
  return (
    <div>
      <p>Contact Form</p>
    </div>
  )
}

function ForumCategoryCard({ title, description, postCount, icon }) {
  const Icon = icon === "FileText" ? FileText : icon === "Lightbulb" ? Lightbulb : Users

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:border-amber-300 transition-colors">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
            <Icon className="h-5 w-5 text-amber-600" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-4 flex items-center text-sm text-muted-foreground">
          <MessageSquare className="mr-1 h-4 w-4" />
          <span>{postCount} posts</span>
        </div>
      </div>
    </div>
  )
}
