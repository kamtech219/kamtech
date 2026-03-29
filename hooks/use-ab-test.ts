import { useState, useEffect } from "react"

export function useABTest<T extends string>(testName: string, variants: T[]): T | null {
  const [variant, setVariant] = useState<T | null>(null)

  useEffect(() => {
    // Check if a variant is already stored in localStorage for this test
    const storedVariant = localStorage.getItem(`ab_test_${testName}`) as T | null

    if (storedVariant && variants.includes(storedVariant)) {
      setVariant(storedVariant)
    } else {
      // Assign a random variant
      const randomVariant = variants[Math.floor(Math.random() * variants.length)]
      localStorage.setItem(`ab_test_${testName}`, randomVariant)
      setVariant(randomVariant)
    }
  }, [testName, variants])

  return variant
}
