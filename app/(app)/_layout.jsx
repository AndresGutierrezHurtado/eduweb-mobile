import { Redirect, Stack, Tabs } from "expo-router";

// Contexts
import { useAuth } from "../../contexts/authContexts";
import { SafeAreaView } from "react-native";

export default function AuthLayout() {
    const { data: session } = useAuth();

    if (!session) {
        return <Redirect href="/" />;
    }

    return (
        <SafeAreaView className="flex-1 bg-base-100">
            <Tabs>
                <Tabs.Screen name="home" />
                {/* <Tabs.Screen name="profile" /> */}
                {/* <Tabs.Screen name="certificates" /> */}
                {/* <Tabs.Screen name="progress" /> */}
                {/* <Tabs.Screen name="Admin" /> */}
            </Tabs>
        </SafeAreaView>
    );
}
