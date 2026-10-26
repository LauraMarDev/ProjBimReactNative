import React, { createContext, useContext, useMemo, useState } from 'react';
import { Colors, temaVermelho, temaAmarelo } from './colors';

type ThemeContextType = {
    colors: Colors;
    isAmarelo: boolean;
    alternarTema: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [isAmarelo, setIsAmarelo] = useState(false);

    const value = useMemo(
        () => ({
            colors: isAmarelo ? temaAmarelo : temaVermelho,
            isAmarelo,
            alternarTema: () => setIsAmarelo((anterior) => !anterior),
        }),
        [isAmarelo]
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error('useTheme deve ser usado dentro de ThemeProvider');
    }
    return ctx;
}