import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { ModeToggle } from '@/components/mode-toggle'

export default function ViteDefaultPage() {
    const [count, setCount] = useState(0)

    return (
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
    )
}