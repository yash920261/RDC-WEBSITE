"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    // For demo purposes, we'll just show a success message
    setSubmitted(true)
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
        <Label htmlFor="contact-name">Name</Label>
        <Input id="contact-name" placeholder="Your name" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input id="contact-email" type="email" placeholder="Your email" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="inquiry-type">Inquiry Type</Label>
        <Select required>
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
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" required />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
