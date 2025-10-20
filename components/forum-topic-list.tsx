"use client"

import Link from "next/link"
import { MessageSquare, ThumbsUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getForumTopics } from "@/lib/forum-data"

interface ForumTopicListProps {
  sortBy?: "recent" | "popular"
  searchQuery?: string
}

export default function ForumTopicList({ sortBy = "recent", searchQuery = "" }: ForumTopicListProps) {
  const allTopics = getForumTopics()

  let filteredTopics = allTopics

  // Filter by search query
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase()
    filteredTopics = filteredTopics.filter(
      (topic) =>
        topic.title.toLowerCase().includes(query) ||
        topic.content.toLowerCase().includes(query) ||
        topic.tags.some((tag) => tag.toLowerCase().includes(query)),
    )
  }

  // Sort topics
  const sortedTopics = [...filteredTopics].sort((a, b) => {
    if (sortBy === "popular") {
      return b.likes + b.replies.length - (a.likes + a.replies.length)
    }
    // For "recent", compare dates
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  if (sortedTopics.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No discussions found. Start one to get the conversation going!</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {sortedTopics.map((topic) => (
        <Link href={`/forum/topic/${topic.id}`} key={topic.id}>
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <h3 className="font-semibold text-lg">{topic.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {topic.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-amber-50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge>{topic.category}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={topic.author.avatar || "/placeholder.svg"} alt={topic.author.name} />
                      <AvatarFallback>{topic.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium">{topic.author.name}</p>
                      <p className="text-xs text-muted-foreground">{topic.author.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                    <div className="flex items-center">
                      <MessageSquare className="mr-1 h-4 w-4" />
                      <span>{topic.replies.length}</span>
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      <span>{topic.likes}</span>
                    </div>
                    <div className="text-xs">
                      <span>{topic.createdAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
