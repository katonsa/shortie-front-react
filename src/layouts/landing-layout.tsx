import {Outlet} from 'react-router';

export default function LandingLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar, wip */}
            <nav className="border-b">
                <div className="container mx-auto px-4">
                    Navbar
                </div>
            </nav>

            {/* Main */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="py-6 border-t">
                <div className="container mx-auto px-4">
                    <p>&copy; 2026 Shortie. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}