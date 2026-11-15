
import { useEffect, useState } from "react";
import { checkBackendHealth } from "./services/healthService";

function App() {
  const [status, setStatus] = useState("Checking backend...");
  const [error, setError] = useState("");

  useEffect(() => {
    checkBackendHealth()
      .then((data) => {
        setStatus(`${data.application}: ${data.status}`);
      })
      .catch((err) => {
        console.error("Backend error:", err);
        setError("Backend connection failed");
      });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">XAU Journal</h1>
      <p>{error || status}</p>
    </main>
  );
}

export default App;
