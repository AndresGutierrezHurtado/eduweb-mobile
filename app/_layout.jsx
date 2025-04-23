import { Stack } from "expo-router";
import "./styles.css";
import { useFonts } from "expo-font";

// Contexts
import { AuthProvider } from "../contexts/authContexts";
import Loading from "../components/loading";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        "alegreya-sans": require("../assets/fonts/AlegreyaSans-Bold.ttf"),
    });

    if (!fontsLoaded) return <Loading />;

    return (
        <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(auth)" />
                <Stack.Screen name="(app)" />
            </Stack>
        </AuthProvider>
    );
}
