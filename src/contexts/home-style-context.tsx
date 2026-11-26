"use client";

import { defaultHomeStyle, HomeStyle, homeStyles } from "@/config/home-style";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

interface HomeStyleContextValue {
  style: HomeStyle;
  setStyle: (style: HomeStyle) => void;
  mounted: boolean;
}

const HomeStyleContext = createContext<HomeStyleContextValue>({
  style: defaultHomeStyle,
  setStyle: () => {},
  mounted: false,
});

export function HomeStyleProvider({ children }: { children: React.ReactNode }) {
  const [style, setStyleState] = useState<HomeStyle>(defaultHomeStyle);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("home-style") as HomeStyle | null;
    if (saved && saved in homeStyles) {
      setStyleState(saved);
    }
  }, []);

  const setStyle = useCallback((newStyle: HomeStyle) => {
    setStyleState(newStyle);
    localStorage.setItem("home-style", newStyle);
  }, []);

  return (
    <HomeStyleContext value={{ style, setStyle, mounted }}>
      {children}
    </HomeStyleContext>
  );
}

export function useHomeStyle() {
  return useContext(HomeStyleContext);
}