import * as React from "react"

const buttonVariants = (className = "") => {
    return `px-4 py-2 rounded-md border transition-colors ${className}`
}

export const ButtonProps = {}

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "div" : "button"
    return <Comp className={buttonVariants(className)} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
