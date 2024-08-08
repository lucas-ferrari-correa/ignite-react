import { Skeleton } from '@/components/ui/skeleton'

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="mt-1 h-7 w-2/6" />
      <Skeleton className="h-4 w-5/6" />
    </>
  )
}
