import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import type { ThemeContextValue } from '../types';

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  return context;
}