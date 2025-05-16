import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextData = {
  isAuthenticated: boolean;
  login: (token: string) => Promise<void>;
  logout: () => void;
  checkAuthentication: () => Promise<void>;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Método para salvar o token e autenticar o usuário
  async function login(token: string): Promise<void> {
    await AsyncStorage.setItem('token', token);
    setIsAuthenticated(true);
  }
  
  function logout(): void {
    AsyncStorage.removeItem('token');
    setIsAuthenticated(false);
  }

  async function checkAuthentication(): Promise<void> {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(true);
    }
  }

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, checkAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}