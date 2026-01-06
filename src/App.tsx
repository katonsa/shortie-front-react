import { Toaster } from "@/components/ui/sonner";

import { ThemeProvider } from "@/components/theme-provider";
import { AppRouter } from "@/routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRouter />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
