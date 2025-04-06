import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { SymptomInput } from './components/SymptomInput';
import { RecommendationResults } from './components/RecommendationResults';
import { getRecommendations } from './utils/recommendationEngine';
import { Recommendation } from './types';

function App() {
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const handleSymptomSubmit = (symptoms: string[]) => {
    const results = getRecommendations(symptoms);
    setRecommendation(results);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity size={40} className="text-blue-500" />
            <h1 className="text-4xl font-bold text-gray-800">Health Advisor AI</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enter your symptoms below to get personalized doctor and medicine recommendations
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <SymptomInput onSubmit={handleSymptomSubmit} />
          <RecommendationResults recommendation={recommendation} />
        </div>
      </div>
    </div>
  );
}

export default App;