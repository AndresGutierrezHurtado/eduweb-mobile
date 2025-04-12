import { Stack } from "expo-router";
import "./styles.css";
import { useFonts } from "expo-font";

// Contexts
import { AuthProvider } from "../contexts/authContexts";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        "alegreya-sans": require("../public/fonts/AlegreyaSans-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    return (
        <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(auth)" />
                <Stack.Screen name="(app)" />
            </Stack>
        </AuthProvider>
    );
}
