import Link from "next/link"
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
  Users,
  GraduationCap,
  Calendar,
  ExternalLink,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function FacultyDetailPage({ params }: { params: { id: string } }) {
  // This would typically come from a database based on the ID
  const faculty = {
    id: params.id,
    name: "Dr. Rajesh Kumar",
    title: "Director, R&D Center",
    department: "Computer Science",
    image: "/placeholder.svg?height=400&width=400",
    email: "rajesh.kumar@manavrachna.edu.in",
    phone: "+91-9876543210",
    office: "Block A, Room 301",
    officeHours: "Monday-Friday, 2:00 PM - 4:00 PM",
    specialization: ["Artificial Intelligence", "Machine Learning", "Data Science", "Deep Learning"],
    experience: "15+ years",
    education: [
      "Ph.D. in Computer Science, IIT Delhi (2008)",
      "M.Tech in Computer Science, IIT Bombay (2004)",
      "B.Tech in Computer Engineering, Delhi University (2002)",
    ],
    researchInterests: [
      "AI in Healthcare",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "Explainable AI",
    ],
    publications: "50+ research papers",
    recentPublications: [
      {
        title: "Deep Learning Approaches for Medical Image Analysis",
        journal: "IEEE Transactions on Medical Imaging",
        year: "2024",
      },
      {
        title: "Explainable AI in Healthcare Decision Making",
        journal: "Nature Machine Intelligence",
        year: "2023",
      },
      {
        title: "Federated Learning for Privacy-Preserving Healthcare",
        journal: "ACM Computing Surveys",
        year: "2023",
      },
    ],
    currentProjects: [
      {
        title: "Smart Healthcare System",
        description: "Developing AI-powered diagnostic tools for early disease detection",
        funding: "₹50 Lakhs",
        duration: "2023-2025",
      },
      {
        title: "AI-powered Education Platform",
        description: "Personalized learning system using machine learning algorithms",
        funding: "₹30 Lakhs",
        duration: "2024-2026",
      },
    ],
    awards: [
      "Best Research Paper Award - IEEE Conference 2023",
      "Excellence in Teaching Award - Manav Rachna 2022",
      "Young Scientist Award - DST India 2020",
    ],
    courses: ["Artificial Intelligence", "Machine Learning", "Data Structures and Algorithms", "Research Methodology"],
    biography:
      "Dr. Rajesh Kumar is a distinguished researcher and educator with over 15 years of experience in the field of Computer Science. He has been instrumental in establishing the R&D center at Manav Rachna University and has guided numerous students in their research endeavors. His work focuses on the intersection of AI and healthcare, with particular emphasis on developing explainable and trustworthy AI systems.",
  }

  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/faculty" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Faculty
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <div className="flex items-center space-x-6">
                <img
                  src={faculty.image || "/placeholder.svg"}
                  alt={faculty.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-amber-100"
                />
                <div>
                  <CardTitle className="text-2xl">{faculty.name}</CardTitle>
                  <CardDescription className="text-amber-600 font-medium text-lg">{faculty.title}</CardDescription>
                  <Badge variant="outline" className="mt-2">
                    {faculty.department}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-muted-foreground">{faculty.biography}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Academic & Research Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="research">
                <TabsList className="mb-4">
                  <TabsTrigger value="research">Research</TabsTrigger>
                  <TabsTrigger value="publications">Publications</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="teaching">Teaching</TabsTrigger>
                </TabsList>

                <TabsContent value="research" className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Research Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {faculty.researchInterests.map((interest, index) => (
                        <Badge key={index} variant="secondary">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Specialization</h3>
                    <div className="flex flex-wrap gap-2">
                      {faculty.specialization.map((spec, index) => (
                        <Badge key={index} variant="outline" className="bg-amber-50">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Awards & Recognition</h3>
                    <ul className="space-y-2">
                      {faculty.awards.map((award, index) => (
                        <li key={index} className="flex items-center">
                          <Award className="h-4 w-4 mr-2 text-amber-600" />
                          <span>{award}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="publications" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Recent Publications</h3>
                    <span className="text-sm text-muted-foreground">{faculty.publications}</span>
                  </div>
                  <div className="space-y-4">
                    {faculty.recentPublications.map((pub, index) => (
                      <Card key={index}>
                        <CardContent className="pt-4">
                          <h4 className="font-medium">{pub.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {pub.journal} • {pub.year}
                          </p>
                          <Button variant="link" size="sm" className="px-0 mt-2">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View Publication
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="projects" className="space-y-4">
                  <h3 className="text-lg font-semibold">Current Research Projects</h3>
                  <div className="space-y-4">
                    {faculty.currentProjects.map((project, index) => (
                      <Card key={index}>
                        <CardContent className="pt-4">
                          <h4 className="font-medium">{project.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                          <div className="flex items-center gap-4 mt-3 text-sm">
                            <span className="flex items-center">
                              <Award className="h-3 w-3 mr-1" />
                              Funding: {project.funding}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              Duration: {project.duration}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="teaching" className="space-y-4">
                  <h3 className="text-lg font-semibold">Courses Taught</h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {faculty.courses.map((course, index) => (
                      <Card key={index}>
                        <CardContent className="pt-4">
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-2 text-amber-600" />
                            <span className="font-medium">{course}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">{faculty.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">{faculty.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">{faculty.office}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">{faculty.officeHours}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {faculty.education.map((edu, index) => (
                <div key={index} className="flex items-start">
                  <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
                  <span className="text-sm">{edu}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Student Mentorship</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">Available for research guidance</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently mentoring 8 Ph.D. students and 15 M.Tech students in various research projects.
              </p>
              <Button className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
