import { VariantProps, cva } from "class-variance-authority";

const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"]
    },
    size: {
      default: ["rounded", "p-2"],
      idcon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  },
})

type ButtonProps = VariantProps<typeof buttonStyles>

export function Button() {
  return <button className={buttonStyles ({ variant, size})} />;
}
