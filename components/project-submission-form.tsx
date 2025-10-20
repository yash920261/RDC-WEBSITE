"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ProjectSubmissionForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    projectTitle: "",
    projectDescription: "",
    resources: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here you would normally send the data to your backend
    console.log("Project submission data:", formData)

    setSubmitted(true)
    setIsLoading(false)
  }

  const resetForm = () => {
    setSubmitted(false)
    setFormData({
      name: "",
      email: "",
      department: "",
      projectTitle: "",
      projectDescription: "",
      resources: "",
    })
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-12">
        <CheckCircle2 className="h-16 w-16 text-green-500" />
        <h3 className="text-xl font-bold">Submission Received!</h3>
        <p className="text-center text-muted-foreground">
          Thank you for submitting your project idea. Our team will review your submission and get back to you within
          3-5 business days.
        </p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            <strong>Project:</strong> {formData.projectTitle}
          </p>
          <p>
            <strong>Submitted by:</strong> {formData.name}
          </p>
          <p>
            <strong>Department:</strong> {formData.department}
          </p>
        </div>
        <Button onClick={resetForm}>Submit Another Idea</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          placeholder="Your university email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="department">Department *</Label>
        <Select value={formData.department} onValueChange={(value) => handleInputChange("department", value)} required>
          <SelectTrigger id="department">
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="computer-science">Computer Science</SelectItem>
            <SelectItem value="electronics-communication">Electronics & Communication</SelectItem>
            <SelectItem value="mechanical-engineering">Mechanical Engineering</SelectItem>
            <SelectItem value="civil-engineering">Civil Engineering</SelectItem>
            <SelectItem value="biotechnology">Biotechnology</SelectItem>
            <SelectItem value="chemistry">Chemistry</SelectItem>
            <SelectItem value="physics">Physics</SelectItem>
            <SelectItem value="mathematics">Mathematics</SelectItem>
            <SelectItem value="psychology">Psychology</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="arts">Arts & Humanities</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="project-title">Project Title *</Label>
        <Input
          id="project-title"
          placeholder="A concise title for your project"
          value={formData.projectTitle}
          onChange={(e) => handleInputChange("projectTitle", e.target.value)}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="project-description">Project Description *</Label>
        <Textarea
          id="project-description"
          placeholder="Describe your project idea, its objectives, and potential impact"
          className="min-h-[120px]"
          value={formData.projectDescription}
          onChange={(e) => handleInputChange("projectDescription", e.target.value)}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="resources">Resources Needed</Label>
        <Textarea
          id="resources"
          placeholder="What resources, equipment, or support would you need to complete this project?"
          className="min-h-[80px]"
          value={formData.resources}
          onChange={(e) => handleInputChange("resources", e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Submitting Project Idea..." : "Submit Project Idea"}
      </Button>
    </form>
  )
}
