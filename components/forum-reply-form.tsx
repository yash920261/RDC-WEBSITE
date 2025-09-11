"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ForumReplyFormProps {
  topicId: string
}

export default function ForumReplyForm({ topicId }: ForumReplyFormProps) {
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [preview, setPreview] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!content.trim()) return

    setIsSubmitting(true)

    // Here you would normally send the data to your backend
    // For demo purposes, we'll just simulate a delay
    setTimeout(() => {
      // Reset form
      setContent("")
      setPreview("")
      setIsSubmitting(false)

      // In a real app, you would refresh the replies or add the new reply to the list
      alert("Reply submitted successfully!")
    }, 1000)
  }

  const generatePreview = () => {
    // This is a simple preview - in a real app you might use a markdown parser
    setPreview(content)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs defaultValue="write" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="write">Write</TabsTrigger>
          <TabsTrigger value="preview" onClick={generatePreview}>
            Preview
          </TabsTrigger>
        </TabsList>
        <TabsContent value="write">
          <Textarea
            placeholder="Share your thoughts or insights..."
            className="min-h-[200px] mb-4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </TabsContent>
        <TabsContent value="preview">
          <div className="min-h-[200px] mb-4 p-4 border rounded-md bg-muted/50">
            {preview ? (
              <div className="prose max-w-none">
                {preview.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">Nothing to preview yet.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting || !content.trim()}>
          <Send className="mr-2 h-4 w-4" />
          {isSubmitting ? "Submitting..." : "Post Reply"}
        </Button>
      </div>
    </form>
  )
}
