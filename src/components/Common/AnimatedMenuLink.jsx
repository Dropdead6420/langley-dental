"use client"
import { useState } from "react"
import Link from "next/link"

export default function AnimatedMenuLink({label,href}) {
  const [hover, setHover] = useState(false)

  return (
    <Link
      href={href}
      className="link-fixed-nav w-inline-block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="button-text-mask small">
        <div
          className="button-text-small _1"
          style={{
            transform: hover
              ? "translate3d(0px, -100%, 0px)"
              : "translate3d(0px, 0px, 0px)",
            transition: "transform 0.5s ease",
          }}
        >
          {label}
        </div>
        <div
          className="button-text-small _2"
          style={{
            transform: hover
              ? "translate3d(0px, -100%, 0px)"
              : "translate3d(0px, 0px, 0px)",
            transition: "transform 0.5s ease",
          }}
        >
          {label}
        </div>
      </div>
    </Link>
  )
}
