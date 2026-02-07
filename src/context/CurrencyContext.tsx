import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Currency = "INR" | "USD";

interface CurrencyContextType {
  currency: Currency;
  symbol: string;
  formatPrice: (priceINR: number, priceUSD?: number) => string;
  formatPriceRaw: (priceINR: number, priceUSD?: number) => number;
  setCurrency: (currency: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>("INR");

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(5000) });
        const data = await res.json();
        if (data.country_code && data.country_code !== "IN") {
          setCurrency("USD");
        }
      } catch {
        // Default to INR on error
      }
    };
    detectCountry();
  }, []);

  const symbol = currency === "INR" ? "₹" : "$";

  const formatPriceRaw = (priceINR: number, priceUSD?: number): number => {
    if (currency === "USD" && priceUSD) return priceUSD;
    return priceINR;
  };

  const formatPrice = (priceINR: number, priceUSD?: number): string => {
    const price = formatPriceRaw(priceINR, priceUSD);
    return `${symbol}${price.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, symbol, formatPrice, formatPriceRaw, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used within CurrencyProvider");
  return context;
};
