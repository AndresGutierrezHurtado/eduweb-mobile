import React from "react";
import { View, Text, Pressable } from "react-native";

// Contexts
import { useAuth } from "../../contexts/authContexts";

export default function Home() {
    const { logout } = useAuth();

    return (
        <View>
            <Text>Home</Text>
            <Pressable onPress={() => logout()}>
                <Text>Logout</Text>
            </Pressable>
        </View>
    );
}
