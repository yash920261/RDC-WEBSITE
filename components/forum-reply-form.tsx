"use client"

import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { addReplyToTopic } from "@/lib/forum-data"

interface ForumReplyFormProps {
  topicId: string
  onSuccess?: () => void
}

export default function ForumReplyForm({ topicId, onSuccess }: ForumReplyFormProps) {
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [preview, setPreview] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!content.trim()) {
      setError("Please enter a reply")
      return
    }

    setIsSubmitting(true)

    try {
      // Mock author - in real app this would be the logged-in user
      const author = {
        id: "current-user",
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        department: "Your Department",
        joinDate: new Date().toLocaleDateString(),
      }

      addReplyToTopic(topicId, {
        author,
        content,
        createdAt: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      })

      // Reset form
      setContent("")
      setPreview("")
      onSuccess?.()
    } catch (err) {
      setError("Failed to post reply. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const generatePreview = () => {
    setPreview(content)
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="p-3 mb-4 bg-red-50 text-red-700 rounded-md text-sm">{error}</div>}

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
              <div className="whitespace-pre-wrap">{preview}</div>
            ) : (
              <p className="text-muted-foreground">Nothing to preview yet.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting || !content.trim()}>
          <Send className="mr-2 h-4 w-4" />
          {isSubmitting ? "Posting..." : "Post Reply"}
        </Button>
      </div>
    </form>
  )
}
