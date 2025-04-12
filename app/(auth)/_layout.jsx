import { Redirect, Stack } from "expo-router";

// Contexts
import { useAuth } from "../../contexts/authContexts";
import { SafeAreaView } from "react-native";

export default function AuthLayout() {
    const { data: session } = useAuth();

    if (session) {
        return <Redirect href="/home" />;
    }

    return (
        <SafeAreaView className="flex-1 bg-base-100">
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" />
                <Stack.Screen name="register" />
            </Stack>
        </SafeAreaView>
    );
}
