"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
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
    console.log("Contact form data:", formData)

    setSubmitted(true)
    setIsLoading(false)
  }

  const resetForm = () => {
    setSubmitted(false)
    setFormData({
      name: "",
      email: "",
      inquiryType: "",
      message: "",
    })
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-12">
        <CheckCircle2 className="h-16 w-16 text-green-500" />
        <h3 className="text-xl font-bold">Message Sent!</h3>
        <p className="text-center text-muted-foreground">
          Thank you for contacting us. We'll get back to you as soon as possible.
        </p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            <strong>From:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Inquiry Type:</strong> {formData.inquiryType}
          </p>
        </div>
        <Button onClick={resetForm}>Send Another Message</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="contact-name">Name *</Label>
        <Input
          id="contact-name"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-email">Email *</Label>
        <Input
          id="contact-email"
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="inquiry-type">Inquiry Type *</Label>
        <Select
          value={formData.inquiryType}
          onValueChange={(value) => handleInputChange("inquiryType", value)}
          required
        >
          <SelectTrigger id="inquiry-type">
            <SelectValue placeholder="Select inquiry type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Information</SelectItem>
            <SelectItem value="project">Project Support</SelectItem>
            <SelectItem value="mentorship">Mentorship</SelectItem>
            <SelectItem value="partnership">Partnership Opportunities</SelectItem>
            <SelectItem value="faculty">Faculty Inquiries</SelectItem>
            <SelectItem value="research">Research Collaboration</SelectItem>
            <SelectItem value="technical">Technical Support</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          placeholder="How can we help you?"
          className="min-h-[120px]"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Sending Message..." : "Send Message"}
      </Button>
    </form>
  )
}
