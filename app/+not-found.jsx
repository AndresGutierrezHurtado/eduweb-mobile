import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function NotFoundScreen() {
    return (
        <>
            <StatusBar style="light" backgroundColor="#0f172a" />
            <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
            <View className="flex-1 bg-base-100 items-center justify-center">
                <Text className="text-base-content text-2xl font-bold">
                    Oops! Esta página no existe.
                </Text>
                <Link href="/" className="text-primary underline mt-5">
                    Volver a la página principal
                </Link>
            </View>
        </>
    );
}
