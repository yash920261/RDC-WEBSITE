import Link from "next/link"
import { ArrowLeft, MessageSquare, Share2, ThumbsUp } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import ForumReplyForm from "@/components/forum-reply-form"

export default function TopicPage({ params }: { params: { id: string } }) {
  // This would typically come from a database based on the ID
  const topic = {
    id: params.id,
    title: "Machine Learning approaches for climate data analysis",
    content: `
      <p>I'm working on a research project that involves analyzing large sets of climate data to identify patterns and make predictions about future climate trends. I've been exploring different machine learning approaches, but I'm curious about what others have found effective in similar contexts.</p>
      
      <p>Specifically, I'm interested in:</p>
      
      <ul>
        <li>Which ML algorithms have you found most effective for time-series climate data?</li>
        <li>How are you handling the high dimensionality of climate datasets?</li>
        <li>What preprocessing techniques have yielded the best results?</li>
        <li>Are there any specific libraries or tools you'd recommend?</li>
      </ul>
      
      <p>I've been experimenting with both traditional methods (random forests, SVMs) and deep learning approaches (RNNs, LSTMs), but I'm finding that each has its own challenges when applied to climate data.</p>
      
      <p>Any insights or experiences you could share would be greatly appreciated!</p>
    `,
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Computer Science",
      joinDate: "Member since Sep 2023",
    },
    category: "Technology & Innovation",
    createdAt: "May 8, 2025",
    views: 342,
    replies: [
      {
        id: 1,
        author: {
          name: "Dr. Sarah Chen",
          avatar: "/placeholder.svg?height=40&width=40",
          department: "Physics",
          joinDate: "Member since Jan 2020",
        },
        content: `
          <p>Great question, Alex! In my research on quantum computing applications for climate modeling, I've found that ensemble methods tend to perform particularly well for climate data.</p>
          
          <p>For preprocessing, I'd recommend:</p>
          <ul>
            <li>Robust normalization techniques to handle outliers</li>
            <li>Dimensionality reduction via PCA or t-SNE before feeding into your models</li>
            <li>Careful handling of missing data (which is common in climate datasets)</li>
          </ul>
          
          <p>As for libraries, have you tried using xarray with scikit-learn? It's specifically designed for working with multi-dimensional arrays and labeled data, which makes it perfect for climate datasets.</p>
          
          <p>I'd be happy to share some of my preprocessing scripts if that would be helpful!</p>
        `,
        createdAt: "May 8, 2025",
        likes: 15,
      },
      {
        id: 2,
        author: {
          name: "Carlos Rodriguez",
          avatar: "/placeholder.svg?height=40&width=40",
          department: "Environmental Science",
          joinDate: "Member since Mar 2022",
        },
        content: `
          <p>From an environmental science perspective, I've found that the temporal aspects of climate data often require special attention. LSTMs have worked well for us, but we've had to make several adaptations:</p>
          
          <p>1. Incorporating multiple timescales (daily, seasonal, annual cycles)</p>
          <p>2. Adding attention mechanisms to help the model focus on relevant patterns</p>
          <p>3. Using transfer learning from pre-trained models on similar datasets</p>
          
          <p>One challenge we faced was dealing with the spatial components alongside temporal data. For this, we implemented a hybrid CNN-LSTM architecture that could capture both spatial patterns and temporal dependencies.</p>
          
          <p>Happy to discuss more specific approaches if you're interested!</p>
        `,
        createdAt: "May 9, 2025",
        likes: 8,
      },
    ],
    tags: ["Machine Learning", "Climate Science", "Data Analysis"],
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
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: topic.content }} />
          </CardContent>
          <CardFooter className="flex justify-between border-t px-6 py-4">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MessageSquare className="mr-1 h-4 w-4" />
                <span>{topic.replies.length} replies</span>
              </div>
              <div className="flex items-center">
                <ThumbsUp className="mr-1 h-4 w-4" />
                <span>Like</span>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </CardFooter>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Replies ({topic.replies.length})</h2>

          {topic.replies.map((reply) => (
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
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: reply.content }} />
              </CardContent>
              <CardFooter className="flex justify-between border-t px-6 py-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <ThumbsUp className="mr-1 h-4 w-4" />
                    <span>{reply.likes} likes</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Reply
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Separator />

        <div>
          <h2 className="mb-4 text-xl font-semibold">Add Your Reply</h2>
          <ForumReplyForm topicId={params.id} />
        </div>
      </div>
    </div>
  )
}
