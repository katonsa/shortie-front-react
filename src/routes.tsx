import { createBrowserRouter, isRouteErrorResponse, useRouteError } from "react-router";
import { RouterProvider } from "react-router/dom";

import LandingLayout from "@/layouts/landing-layout";
import LandingPage from "@/pages/landing-page";
import LoginPage from "@/pages/auth/login-page";
import RegisterPage from "@/pages/auth/register-page";

function AppErrorBoundary() {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return (
            <>
                <h1>
                    {error.status} {error.statusText}
                </h1>
                <p>{error.data}</p>
            </>
        );
    } else if (error instanceof Error) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error.message}</p>
                <p>The stack trace is:</p>
                <pre>{error.stack}</pre>
            </div>
        );
    } else {
        return <h1>Unknown Error</h1>;
    }
}

const router = createBrowserRouter([
    {
        children: [
            {
                element: <LandingPage />,
                path: "/",
            },
            {
                element: <LoginPage />,
                path: "/login",
            },
            {
                element: <RegisterPage />,
                path: "/register",
            }
        ],
        element: <LandingLayout />,
        ErrorBoundary: AppErrorBoundary,
    },
]);

export function AppRouter() {
    return <RouterProvider router={router} />
}