import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { NoAuthRoutes } from "./noauth.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "@contexts/manager.routes";

export function Routes() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthRoutes /> : <NoAuthRoutes />}
    </NavigationContainer>
  );
}