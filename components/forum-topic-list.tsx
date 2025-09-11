import Link from "next/link"
import { MessageSquare, ThumbsUp } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ForumTopicListProps {
  sortBy?: "recent" | "popular"
}

export default function ForumTopicList({ sortBy = "recent" }: ForumTopicListProps) {
  // This would typically come from a database
  const topics = [
    {
      id: 1,
      title: "Machine Learning approaches for climate data analysis",
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        department: "Computer Science",
      },
      category: "Technology & Innovation",
      replies: 24,
      likes: 42,
      lastActivity: "2 hours ago",
      tags: ["Machine Learning", "Climate Science", "Data Analysis"],
    },
    {
      id: 2,
      title: "Seeking collaborators for sustainable architecture project",
      author: {
        name: "Maya Patel",
        avatar: "/placeholder.svg?height=40&width=40",
        department: "Architecture",
      },
      category: "Collaboration Opportunities",
      replies: 18,
      likes: 31,
      lastActivity: "5 hours ago",
      tags: ["Sustainability", "Architecture", "Urban Planning"],
    },
    {
      id: 3,
      title: "Best practices for qualitative research interviews",
      author: {
        name: "Carlos Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        department: "Sociology",
      },
      category: "Research Methodologies",
      replies: 36,
      likes: 27,
      lastActivity: "1 day ago",
      tags: ["Qualitative Research", "Interviews", "Methodology"],
    },
    {
      id: 4,
      title: "New findings in quantum computing algorithms",
      author: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        department: "Physics",
      },
      category: "Technology & Innovation",
      replies: 42,
      likes: 56,
      lastActivity: "3 days ago",
      tags: ["Quantum Computing", "Algorithms", "Theoretical Physics"],
    },
    {
      id: 5,
      title: "Funding opportunities for undergraduate research projects",
      author: {
        name: "James Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        department: "Research Office",
      },
      category: "Research Methodologies",
      replies: 29,
      likes: 48,
      lastActivity: "4 days ago",
      tags: ["Funding", "Grants", "Undergraduate Research"],
    },
  ]

  // Sort topics based on the sortBy prop
  const sortedTopics = [...topics].sort((a, b) => {
    if (sortBy === "popular") {
      return b.likes - a.likes
    }
    // For "recent", we'd normally sort by date, but for this example we'll use the order
    return 0
  })

  return (
    <div className="space-y-4">
      {sortedTopics.map((topic) => (
        <Link href={`/forum/topic/${topic.id}`} key={topic.id}>
          <Card className="hover:bg-muted/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
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
                      <span>{topic.replies}</span>
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      <span>{topic.likes}</span>
                    </div>
                    <div className="text-xs">
                      <span>Last activity: {topic.lastActivity}</span>
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
