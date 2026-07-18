import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string }

export function Instagram({ size = 16, strokeWidth = 1.8, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Facebook({ size = 16, strokeWidth = 1.8, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8h-3a2 2 0 0 0-2 2v3H8v3h3v6h3v-6h2.5l.5-3H14v-2.5c0-.5.4-.5 1-.5h2V8z" />
    </svg>
  )
}

export function WhatsApp({ size = 16, strokeWidth = 1.8, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 12a9 9 0 0 1-13.6 7.7L3 21l1.4-4.2A9 9 0 1 1 21 12z" />
      <path d="M8.5 9.4c.4 2.5 2.5 4.7 5 5.1.5.1 1-.1 1.4-.4l.7-.6c.3-.3.8-.3 1.1-.1l1.5.7c.3.2.5.5.4.9-.2 1.1-1.2 1.9-2.4 1.9-3.7 0-7-3.3-7-7 0-1.2.8-2.2 1.9-2.4.4-.1.7.1.9.4l.7 1.5c.2.3.1.8-.1 1.1l-.6.7c-.3.4-.5.9-.4 1.4z" />
    </svg>
  )
}
