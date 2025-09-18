import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/20 border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by Barath Kumar R
          </p>
          <p className="text-sm text-muted-foreground mt-2">© 2024 Barath Kumar R. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
