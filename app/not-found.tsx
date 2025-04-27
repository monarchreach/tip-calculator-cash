import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calculator } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800">
          <Calculator className="w-10 h-10 text-gray-500 dark:text-gray-400" />
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Page Not Found</h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          We couldn't find the calculator or page you were looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button asChild size="lg">
            <Link href="/">Return Home</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/calculators">Browse Calculators</Link>
          </Button>
        </div>
      </div>

      <div className="mt-16 w-full max-w-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Popular Calculators</h2>
        <div className="grid gap-4">
          <Button variant="outline" className="justify-start" asChild>
            <Link href="/calculators/restaurant-tip-calculator">Restaurant Tip Calculator</Link>
          </Button>
          <Button variant="outline" className="justify-start" asChild>
            <Link href="/calculators/hotel-staff-tip-calculator">Hotel Staff Tip Calculator</Link>
          </Button>
          <Button variant="outline" className="justify-start" asChild>
            <Link href="/calculators/taxi-tip-calculator">Taxi Tip Calculator</Link>
          </Button>
          <Button variant="outline" className="justify-start" asChild>
            <Link href="/calculators/hair-salon-tip-calculator">Hair Salon Tip Calculator</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
