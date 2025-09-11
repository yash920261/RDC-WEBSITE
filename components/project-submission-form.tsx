"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ProjectSubmissionForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    projectTitle: "",
    projectDescription: "",
    projectType: "individual",
    resources: "",
    timeline: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      // Reset form data if needed
      // setFormData({...initial state})
    }, 1500)
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
        <Button onClick={() => setSubmitted(false)}>Submit Another Idea</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="name">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your university email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="department">
          Department <span className="text-red-500">*</span>
        </Label>
        <Select value={formData.department} onValueChange={(value) => handleSelectChange("department", value)} required>
          <SelectTrigger id="department">
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="computer-science">Computer Science</SelectItem>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="biology">Biology</SelectItem>
            <SelectItem value="chemistry">Chemistry</SelectItem>
            <SelectItem value="physics">Physics</SelectItem>
            <SelectItem value="psychology">Psychology</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="arts">Arts & Humanities</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="projectTitle">
          Project Title <span className="text-red-500">*</span>
        </Label>
        <Input
          id="projectTitle"
          name="projectTitle"
          placeholder="A concise title for your project"
          value={formData.projectTitle}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="projectType">
          Project Type <span className="text-red-500">*</span>
        </Label>
        <RadioGroup
          defaultValue="individual"
          value={formData.projectType}
          onValueChange={(value) => handleSelectChange("projectType", value)}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="individual" id="individual" />
            <Label htmlFor="individual" className="font-normal">
              Individual Project
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="team" id="team" />
            <Label htmlFor="team" className="font-normal">
              Team Project
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="collaboration" id="collaboration" />
            <Label htmlFor="collaboration" className="font-normal">
              Faculty Collaboration
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="projectDescription">
          Project Description <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="projectDescription"
          name="projectDescription"
          placeholder="Describe your project idea, its objectives, and potential impact"
          className="min-h-[120px]"
          value={formData.projectDescription}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="resources">Resources Needed</Label>
        <Textarea
          id="resources"
          name="resources"
          placeholder="What resources, equipment, or support would you need to complete this project?"
          className="min-h-[80px]"
          value={formData.resources}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="timeline">Expected Timeline</Label>
        <Select value={formData.timeline} onValueChange={(value) => handleSelectChange("timeline", value)}>
          <SelectTrigger id="timeline">
            <SelectValue placeholder="Select expected timeline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-3-months">1-3 months</SelectItem>
            <SelectItem value="3-6-months">3-6 months</SelectItem>
            <SelectItem value="6-12-months">6-12 months</SelectItem>
            <SelectItem value="over-12-months">Over 12 months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Project Idea"}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center pt-2">
        Fields marked with <span className="text-red-500">*</span> are required
      </p>
    </form>
  )
}
