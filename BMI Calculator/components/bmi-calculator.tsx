"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

interface BmiCalculatorProps {
  unit: "metric" | "imperial"
  onCalculate: (weight: number, height: number, unit: "metric" | "imperial") => void
}

export function BmiCalculator({ unit, onCalculate }: BmiCalculatorProps) {
  const [weight, setWeight] = useState<string>("")
  const [height, setHeight] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!weight || !height) {
      toast({
        title: "Missing information",
        description: "Please enter both weight and height.",
        variant: "destructive",
      })
      return
    }

    const weightValue = Number.parseFloat(weight)
    const heightValue = Number.parseFloat(height)

    if (isNaN(weightValue) || isNaN(heightValue)) {
      toast({
        title: "Invalid input",
        description: "Please enter valid numbers for weight and height.",
        variant: "destructive",
      })
      return
    }

    if (weightValue <= 0 || heightValue <= 0) {
      toast({
        title: "Invalid input",
        description: "Weight and height must be greater than zero.",
        variant: "destructive",
      })
      return
    }

    onCalculate(weightValue, heightValue, unit)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="weight">Weight {unit === "metric" ? "(kg)" : "(lb)"}</Label>
        <Input
          id="weight"
          type="number"
          placeholder={unit === "metric" ? "e.g., 70" : "e.g., 154"}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border-blue-200 focus:border-blue-400"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="height">Height {unit === "metric" ? "(cm)" : "(in)"}</Label>
        <Input
          id="height"
          type="number"
          placeholder={unit === "metric" ? "e.g., 175" : "e.g., 69"}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="border-blue-200 focus:border-blue-400"
        />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
        Calculate BMI
      </Button>
    </form>
  )
}

