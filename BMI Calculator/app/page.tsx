"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BmiCalculator } from "@/components/bmi-calculator"
import { BmiResult } from "@/components/bmi-result"

export default function Home() {
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState<string>("")

  const calculateBmi = (weight: number, height: number, unit: "metric" | "imperial") => {
    let bmiValue: number

    if (unit === "metric") {
      // Metric: weight (kg) / height (m)^2
      bmiValue = weight / Math.pow(height / 100, 2)
    } else {
      // Imperial: (weight (lb) / height (in)^2) * 703
      bmiValue = (weight / Math.pow(height, 2)) * 703
    }

    setBmi(Number.parseFloat(bmiValue.toFixed(1)))

    // Determine BMI category
    if (bmiValue < 18.5) {
      setCategory("Underweight")
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory("Normal weight")
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory("Overweight")
    } else {
      setCategory("Obese")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-blue-50">
      <Card className="w-full max-w-md border-blue-200 shadow-lg">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-center">BMI Calculator</CardTitle>
          <CardDescription className="text-blue-100 text-center">Calculate your Body Mass Index</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue="metric" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="metric">Metric</TabsTrigger>
              <TabsTrigger value="imperial">Imperial</TabsTrigger>
            </TabsList>
            <TabsContent value="metric">
              <BmiCalculator unit="metric" onCalculate={calculateBmi} />
            </TabsContent>
            <TabsContent value="imperial">
              <BmiCalculator unit="imperial" onCalculate={calculateBmi} />
            </TabsContent>
          </Tabs>

          {bmi !== null && <BmiResult bmi={bmi} category={category} />}
        </CardContent>
      </Card>
    </main>
  )
}

