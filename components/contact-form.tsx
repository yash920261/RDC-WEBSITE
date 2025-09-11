"use client"

import { useState } from "react"
import { CheckCircle2, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    subscribe: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({
      ...prev,
      subscribe: checked,
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
        <h3 className="text-xl font-bold">Message Sent!</h3>
        <p className="text-center text-muted-foreground">
          Thank you for contacting us. We'll get back to you as soon as possible.
        </p>
        <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="contact-name">
          Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="contact-name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-email">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-phone">Phone Number</Label>
        <Input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="Your phone number (optional)"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="inquiry-type">
          Inquiry Type <span className="text-red-500">*</span>
        </Label>
        <Select
          value={formData.inquiryType}
          onValueChange={(value) => handleSelectChange("inquiryType", value)}
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
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          className="min-h-[120px]"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex items-center space-x-2 pt-2">
        <Checkbox id="subscribe" checked={formData.subscribe} onCheckedChange={handleCheckboxChange} />
        <Label htmlFor="subscribe" className="text-sm font-normal">
          Subscribe to our newsletter for updates on research opportunities and events
        </Label>
      </div>

      <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center pt-2">
        Fields marked with <span className="text-red-500">*</span> are required
      </p>
    </form>
  )
}
