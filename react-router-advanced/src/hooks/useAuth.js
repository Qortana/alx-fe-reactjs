import { useState, useEffect } from "react";

// A simple auth hook
export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check localStorage for logged-in user
    const username = localStorage.getItem("username");
    if (username) {
      setUser({ username });
    } else {
      setUser(null);
    }
  }, []);

  return { user, isAuthenticated: !!user };
}
