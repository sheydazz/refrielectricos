import * as React from "react"

const badgeVariants = (className) => {
  return `inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`
}

export const BadgeProps = {}

function Badge({ className, variant, ...props }) {
  return <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variant === "default" ? "border-transparent bg-primary text-primary-foreground hover:bg-primary/80" : variant === "secondary" ? "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80" : variant === "destructive" ? "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80" : "text-foreground"} ${className}`} {...props} />
}

export { Badge, badgeVariants }
