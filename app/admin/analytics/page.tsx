"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Beaker, Users, Eye, Mail, TrendingUp, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/contexts/auth-context"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Mock analytics data
const mockAnalyticsData = {
  overview: {
    totalFaculty: 6,
    totalViews: 2847,
    totalContacts: 156,
    avgViewsPerFaculty: 474,
  },
  facultyStats: [
    {
      id: "1",
      name: "Dr. Rajesh Kumar",
      department: "Computer Science",
      profileViews: 892,
      contactClicks: 45,
      projectViews: 234,
      lastActive: "2025-01-20",
      trend: "+12%",
    },
    {
      id: "2",
      name: "Dr. Priya Sharma",
      department: "Electronics & Communication",
      profileViews: 567,
      contactClicks: 32,
      projectViews: 189,
      lastActive: "2025-01-19",
      trend: "+8%",
    },
    {
      id: "3",
      name: "Dr. Amit Verma",
      department: "Mechanical Engineering",
      profileViews: 423,
      contactClicks: 28,
      projectViews: 156,
      lastActive: "2025-01-18",
      trend: "+5%",
    },
    {
      id: "4",
      name: "Dr. Neha Gupta",
      department: "Biotechnology",
      profileViews: 389,
      contactClicks: 24,
      projectViews: 134,
      lastActive: "2025-01-17",
      trend: "+15%",
    },
    {
      id: "5",
      name: "Dr. Suresh Patel",
      department: "Civil Engineering",
      profileViews: 312,
      contactClicks: 18,
      projectViews: 98,
      lastActive: "2025-01-16",
      trend: "+3%",
    },
    {
      id: "6",
      name: "Dr. Kavita Singh",
      department: "Chemistry",
      profileViews: 264,
      contactClicks: 9,
      projectViews: 87,
      lastActive: "2025-01-15",
      trend: "-2%",
    },
  ],
  monthlyViews: [
    { month: "Jul", views: 1200, contacts: 45 },
    { month: "Aug", views: 1450, contacts: 52 },
    { month: "Sep", views: 1680, contacts: 61 },
    { month: "Oct", views: 1890, contacts: 68 },
    { month: "Nov", views: 2150, contacts: 74 },
    { month: "Dec", views: 2380, contacts: 82 },
    { month: "Jan", views: 2847, contacts: 156 },
  ],
  departmentStats: [
    { name: "Computer Science", value: 892, color: "#8884d8" },
    { name: "Electronics & Communication", value: 567, color: "#82ca9d" },
    { name: "Mechanical Engineering", value: 423, color: "#ffc658" },
    { name: "Biotechnology", value: 389, color: "#ff7300" },
    { name: "Civil Engineering", value: 312, color: "#00ff00" },
    { name: "Chemistry", value: 264, color: "#ff0000" },
  ],
}

export default function FacultyAnalyticsPage() {
  const { user } = useAuth()
  const [timeRange, setTimeRange] = useState("7d")

  // Redirect if not admin
  useEffect(() => {
    if (user && user.role !== "admin") {
      window.location.href = "/"
    }
  }, [user])

  if (!user || user.role !== "admin") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-4">You need admin privileges to access this page.</p>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2 font-bold">
            <Beaker className="h-5 w-5" />
            <span>Admin Dashboard</span>
          </div>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/faculty" className="text-sm font-medium hover:underline underline-offset-4">
              Faculty
            </Link>
            <Link
              href="/admin/analytics"
              className="text-sm font-medium hover:underline underline-offset-4 text-amber-600"
            >
              Analytics
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 bg-gradient-to-b from-amber-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <Link href="/faculty" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Faculty
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Faculty Analytics</h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Monitor faculty profile performance and engagement metrics.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7d">Last 7 days</SelectItem>
                      <SelectItem value="30d">Last 30 days</SelectItem>
                      <SelectItem value="90d">Last 90 days</SelectItem>
                      <SelectItem value="1y">Last year</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            {/* Overview Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Faculty</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockAnalyticsData.overview.totalFaculty}</div>
                  <p className="text-xs text-muted-foreground">Active faculty members</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Profile Views</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockAnalyticsData.overview.totalViews.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Contact Clicks</CardTitle>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockAnalyticsData.overview.totalContacts}</div>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Views/Faculty</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockAnalyticsData.overview.avgViewsPerFaculty}</div>
                  <p className="text-xs text-muted-foreground">Per faculty member</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="faculty">Faculty Performance</TabsTrigger>
                <TabsTrigger value="departments">Departments</TabsTrigger>
                <TabsTrigger value="trends">Trends</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Monthly Profile Views</CardTitle>
                      <CardDescription>Faculty profile views over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={mockAnalyticsData.monthlyViews}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="views" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Department Distribution</CardTitle>
                      <CardDescription>Profile views by department</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={mockAnalyticsData.departmentStats}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {mockAnalyticsData.departmentStats.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="faculty" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Faculty Performance</CardTitle>
                    <CardDescription>Individual faculty member analytics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockAnalyticsData.facultyStats.map((faculty) => (
                        <div key={faculty.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <div>
                                <h3 className="font-semibold">{faculty.name}</h3>
                                <p className="text-sm text-muted-foreground">{faculty.department}</p>
                              </div>
                              <Badge variant={faculty.trend.startsWith("+") ? "default" : "secondary"}>
                                {faculty.trend}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex gap-6 text-sm">
                            <div className="text-center">
                              <div className="font-semibold">{faculty.profileViews}</div>
                              <div className="text-muted-foreground">Views</div>
                            </div>
                            <div className="text-center">
                              <div className="font-semibold">{faculty.contactClicks}</div>
                              <div className="text-muted-foreground">Contacts</div>
                            </div>
                            <div className="text-center">
                              <div className="font-semibold">{faculty.projectViews}</div>
                              <div className="text-muted-foreground">Projects</div>
                            </div>
                            <div className="text-center">
                              <div className="font-semibold">{faculty.lastActive}</div>
                              <div className="text-muted-foreground">Last Active</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="departments" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Department Performance</CardTitle>
                    <CardDescription>Profile views by department</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={mockAnalyticsData.departmentStats}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="trends" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Engagement Trends</CardTitle>
                    <CardDescription>Views vs Contact clicks over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <LineChart data={mockAnalyticsData.monthlyViews}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="views" stroke="#8884d8" strokeWidth={2} name="Views" />
                        <Line type="monotone" dataKey="contacts" stroke="#82ca9d" strokeWidth={2} name="Contacts" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Manav Rachna R&D Center. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
