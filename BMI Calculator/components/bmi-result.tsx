import { Card, CardContent } from "@/components/ui/card"

interface BmiResultProps {
  bmi: number
  category: string
}

export function BmiResult({ bmi, category }: BmiResultProps) {
  // Get color based on BMI category
  const getCategoryColor = () => {
    switch (category) {
      case "Underweight":
        return "text-blue-500"
      case "Normal weight":
        return "text-green-500"
      case "Overweight":
        return "text-yellow-500"
      case "Obese":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <Card className="mt-6 border-blue-200">
      <CardContent className="pt-6">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-medium">Your BMI Result</h3>
          <p className="text-4xl font-bold text-blue-600">{bmi}</p>
          <p className={`text-xl font-semibold ${getCategoryColor()}`}>{category}</p>
          <div className="mt-4 text-sm text-gray-600">
            <p className="mb-2">BMI Categories:</p>
            <ul className="space-y-1">
              <li>Underweight: Less than 18.5</li>
              <li>Normal weight: 18.5 - 24.9</li>
              <li>Overweight: 25 - 29.9</li>
              <li>Obese: 30 or greater</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

