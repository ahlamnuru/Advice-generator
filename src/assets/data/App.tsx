import { useEffect, useState } from "react";
import AdviceCard from "../components/AdviceCard";
import { fetchAdvice } from "../utils/fetchAdvice";
import type { Advice } from "../types";

function App() {
  // the advice currently shown, null until the first fetch finishes
  const [advice, setAdvice] = useState<Advice | null>(null);

  // true while we're waiting on the API
  const [loading, setLoading] = useState(true);

  // grabs a new piece of advice and puts it in state
  async function loadNewAdvice() {
    setLoading(true);
    try {
      const newAdvice = await fetchAdvice();
      setAdvice(newAdvice);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // load one piece of advice as soon as the page opens
  useEffect(() => {
    loadNewAdvice();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-950 p-6">
      <AdviceCard advice={advice} loading={loading} onNewAdvice={loadNewAdvice} />
    </div>
  );
}

export default App;
