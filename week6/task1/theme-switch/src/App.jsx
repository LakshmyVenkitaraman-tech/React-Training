import { useEffect, useState } from 'react';
import { createContext, useContext} from 'react';
const ThemeContext = createContext();
function useTheme() {
  return useContext(ThemeContext);
}
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
useEffect(() => {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
}, [theme]);
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white ">
<h1 className="text-3xl font-bold mb-4">Theme: {theme}</h1>
<button onClick={toggleTheme} className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white">
  Toggle Theme
  </button>
    </div>
  );
}
export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
