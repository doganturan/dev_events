import { SearchX } from "lucide-react"
import Link from "next/link"
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty"

interface NotFoundProps {
  title?: string
  description?: string
  showIcon?: boolean
  buttonText?: string
  buttonPath?: string
}

export function NotFound({
  title = "Page Not Found",
  description = "The page you're looking for doesn't exist or has been moved.",
  showIcon = true,
  buttonText,
  buttonPath,
}: NotFoundProps) {
  return (
    <Empty className="glass min-h-[350px] py-16 border border-border-dark">
      <EmptyHeader className="gap-4">
        {showIcon && (
          <EmptyMedia variant="default" className="mb-2">
            <div className="bg-dark-100 border border-dark-200 rounded-full p-5">
              <SearchX className="size-10 text-primary" strokeWidth={1.5} />
            </div>
          </EmptyMedia>
        )}
        <EmptyTitle className="text-2xl font-bold text-gradient">
          {title}
        </EmptyTitle>
        <EmptyDescription className="text-light-200 text-base max-w-sm">
          {description}
        </EmptyDescription>
        {buttonText && buttonPath && (
          <Link 
            href={buttonPath}
            className="mt-4 inline-flex items-center justify-center px-6 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-black font-semibold text-sm rounded-lg transition-colors"
          >
            {buttonText}
          </Link>
        )}
      </EmptyHeader>
    </Empty>
  )
}
