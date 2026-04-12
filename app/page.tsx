"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    async function bootstrap() {
      // Use cached token if still present in localStorage
      const existing = localStorage.getItem("atmo_token");
      if (existing) {
        router.replace("/dashboard");
        return;
      }

      // Fetch a fresh token from the server (credentials never touch the client)
      try {
        const res = await fetch("/api/auth/token");
        const data = await res.json();
        if (!res.ok || !data.token) {
          setError(data.error || "Impossible de récupérer le token");
          return;
        }
        localStorage.setItem("atmo_token", data.token);
        router.replace("/dashboard");
      } catch {
        setError("Erreur de connexion au serveur");
      }
    }

    bootstrap();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="flex flex-col items-center gap-4">
        {error ? (
          <>
            <div className="text-4xl">⚠️</div>
            <p className="text-red-600 text-sm font-medium">{error}</p>
            <button
              onClick={() => { setError(""); window.location.reload(); }}
              className="text-xs text-emerald-600 underline cursor-pointer"
            >
              Réessayer
            </button>
          </>
        ) : (
          <>
            <div className="animate-spin h-7 w-7 rounded-full border-2 border-emerald-200 border-t-emerald-500" />
            <p className="text-sm text-gray-400">Connexion…</p>
          </>
        )}
      </div>
    </div>
  );
}
