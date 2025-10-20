"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, MessageSquare, Share2, ThumbsUp } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import ForumReplyForm from "@/components/forum-reply-form"
import {
  getForumTopicById,
  incrementTopicViews,
  toggleTopicLike,
  toggleReplyLike,
  type ForumTopic,
} from "@/lib/forum-data"

interface TopicPageProps {
  params: { id: string }
}

export default function TopicPage({ params }: TopicPageProps) {
  const [topic, setTopic] = useState<ForumTopic | null>(null)
  const [isLiked, setIsLiked] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const data = getForumTopicById(params.id)
    if (data) {
      incrementTopicViews(params.id)
      setTopic(data)
    }
    setLoading(false)
  }, [params.id, refreshKey])

  const handleLikeTopic = () => {
    if (topic) {
      toggleTopicLike(topic.id, "current-user")
      setIsLiked(true)
      setRefreshKey((prev) => prev + 1)
    }
  }

  const handleLikeReply = (replyId: string) => {
    if (topic) {
      toggleReplyLike(topic.id, replyId, "current-user")
      setRefreshKey((prev) => prev + 1)
    }
  }

  const handleReplySuccess = () => {
    setRefreshKey((prev) => prev + 1)
  }

  if (loading) {
    return (
      <div className="container py-10">
        <p className="text-center text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (!topic) {
    return (
      <div className="container py-10">
        <p className="text-center text-muted-foreground">Discussion not found</p>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/forum" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Forums
        </Link>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{topic.title}</h1>
          <div className="mt-2 flex flex-wrap gap-2">
            {topic.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-amber-50">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={topic.author.avatar || "/placeholder.svg"} alt={topic.author.name} />
                <AvatarFallback>{topic.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{topic.author.name}</p>
                <p className="text-xs text-muted-foreground">{topic.author.department}</p>
                <p className="text-xs text-muted-foreground">{topic.author.joinDate}</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">Posted on {topic.createdAt}</div>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none whitespace-pre-wrap">{topic.content}</div>
          </CardContent>
          <CardFooter className="flex justify-between border-t px-6 py-4">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MessageSquare className="mr-1 h-4 w-4" />
                <span>{topic.replies.length} replies</span>
              </div>
              <div className="flex items-center">
                <ThumbsUp className="mr-1 h-4 w-4" />
                <span>{topic.likes} likes</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={handleLikeTopic} disabled={isLiked}>
                <ThumbsUp className="mr-2 h-4 w-4" />
                {isLiked ? "Liked" : "Like"}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Replies ({topic.replies.length})</h2>

          {topic.replies.length === 0 ? (
            <p className="text-muted-foreground">No replies yet. Be the first to respond!</p>
          ) : (
            topic.replies.map((reply) => (
              <Card key={reply.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={reply.author.avatar || "/placeholder.svg"} alt={reply.author.name} />
                      <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{reply.author.name}</p>
                      <p className="text-xs text-muted-foreground">{reply.author.department}</p>
                      <p className="text-xs text-muted-foreground">{reply.author.joinDate}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{reply.createdAt}</div>
                </CardHeader>
                <CardContent>
                  <div className="whitespace-pre-wrap">{reply.content}</div>
                </CardContent>
                <CardFooter className="flex justify-between border-t px-6 py-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      <span>{reply.likes} likes</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => handleLikeReply(reply.id)}>
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Like
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>

        <Separator />

        <div>
          <h2 className="mb-4 text-xl font-semibold">Add Your Reply</h2>
          <ForumReplyForm topicId={params.id} onSuccess={handleReplySuccess} />
        </div>
      </div>
    </div>
  )
}
