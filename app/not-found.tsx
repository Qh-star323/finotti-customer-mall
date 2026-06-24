import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        <p className="text-8xl font-black text-lime mb-4">404</p>
        <h1 className="text-2xl font-bold text-charcoal mb-2">Page Not Found</h1>
        <p className="text-base text-grey mb-8">
          Sorry, we couldn't find the page you're looking for. It may have been moved or removed.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button variant="primary" size="lg" leftIcon={<Home size={18} />}>Back to Home</Button>
          </Link>
          <Link href="/products">
            <Button variant="outline" size="lg" leftIcon={<Search size={18} />}>Browse Products</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
