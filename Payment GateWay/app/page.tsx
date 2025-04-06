import PaymentGateway from "@/components/payment-gateway"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">HealingHands Payment Gateway</h1>
        <PaymentGateway />
      </div>
    </main>
  )
}

