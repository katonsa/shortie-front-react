import { useState } from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { ModeToggle } from './components/mode-toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <div className="container mx-auto px-4 py-8 space-y-4">
          <Card>
            <CardContent>
              <Button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </Button>
            </CardContent>
          </Card>
          <div>
            <ModeToggle />
          </div>
        </div>
      </>
    </ThemeProvider>
  )
}

export default App
