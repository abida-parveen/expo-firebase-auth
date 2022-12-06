import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import NoAuthNavigation from "./auth/NoAuthNavigation";
import * as SplashScreen from "expo-splash-screen";
import useFonts from "./hooks/useFonts";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await useFonts();
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);
   const onLayoutRootView = useCallback(async () => {
     if (appIsReady) {
       await SplashScreen.hideAsync();
     }
   }, [appIsReady]);

   if (!appIsReady) {
     return null;
   }

  return (
    <View className="flex-1 box-border" onLayout={onLayoutRootView}>
      <NoAuthNavigation />
    </View>
  );
}