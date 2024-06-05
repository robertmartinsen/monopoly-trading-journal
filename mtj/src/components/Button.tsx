import { cva } from "class-variance-authority";

const buttonStyles = cva(["hover:bg-secondary-hover", "transition-colors"]);

export function Button() {
  return <button />;
}
