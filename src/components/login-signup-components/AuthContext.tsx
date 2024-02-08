// AuthContext.js
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  userData: {
    id: string;
    email: string;
  };
  setUserData: Dispatch<SetStateAction<{ id: string; email: string }>>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<{ id: string; email: string } | null>(null); // Initialize userData state
  console.log(userData, "authcontecxt");
  useEffect(() => {
    // Check localStorage for authentication state on component mount
    const storedAuthState = localStorage.getItem("isAuthenticated");
    if (storedAuthState) {
      setIsAuthenticated(JSON.parse(storedAuthState));
    }
  }, []);

  const login = (userData: { id: string; email: string }) => {
    // Implement your login logic here
    // Set isAuthenticated to true if login is successful
    setIsAuthenticated(true);
    setUserData(userData); // Set userData when user logs in
    // Save authentication state to localStorage

    localStorage.setItem("isAuthenticated", JSON.stringify(true));
  };

  const logout = () => {
    // Implement your logout logic here
    // Set isAuthenticated to false
    setIsAuthenticated(false);
    setUserData(null);
    // Remove authentication state from localStorage
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
