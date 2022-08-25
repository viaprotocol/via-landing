function Skeleton({
  w = 80,
  h = 40,
  className = ''
}: {
  w?: number | string
  h?: number | string
  className?: string
}) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-gray-200 dark:bg-white-120 ${className}`}
      style={{
        width: w,
        minWidth: w,
        height: h
      }}
    />
  )
}

export { Skeleton }
