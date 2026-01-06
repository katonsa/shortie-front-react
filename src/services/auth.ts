import type { LoginCredentials } from "@/types";

export async function login(credentials: LoginCredentials) {
  // Simulate an API call to authenticate the user
  return new Promise<{ token: string }>((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.email === "test@example.com" &&
        credentials.password === "password"
      ) {
        resolve({ token: "fake-jwt-token" });
      } else {
        reject(new Error("Invalid username or password"));
      }
    }, 1000);
  });
}
