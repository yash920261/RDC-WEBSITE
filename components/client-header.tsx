"use client"

import Link from "next/link"
import { Beaker } from "lucide-react"
import AuthDialog from "@/components/auth-dialog"
import UserMenu from "@/components/user-menu"
import { useAuth } from "@/contexts/auth-context"

export default function ClientHeader() {
  const { user, isLoading } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2 font-bold">
          <Beaker className="h-5 w-5" />
          <span>UniR&D Center</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
            Projects
          </Link>
          <Link href="/forum" className="text-sm font-medium hover:underline underline-offset-4">
            Forum
          </Link>
          <Link href="/faculty" className="text-sm font-medium hover:underline underline-offset-4">
            Faculty
          </Link>
          <Link href="#submit" className="text-sm font-medium hover:underline underline-offset-4">
            Submit
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
          {!isLoading && <>{user ? <UserMenu /> : <AuthDialog />}</>}
        </nav>
      </div>
    </header>
  )
}
