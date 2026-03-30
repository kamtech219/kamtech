"use client"

import dynamic from "next/dynamic"
import React from "react"

const NoSSRWrapperContent = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
)

export const NoSSRWrapper = dynamic(() => Promise.resolve(NoSSRWrapperContent), {
  ssr: false,
})
