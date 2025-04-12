import React from "react";
import { View, Text, Pressable } from "react-native";

// Contexts
import { useAuth } from "../../contexts/authContexts";

// Hooks
import { useGetData } from "../../hooks/useFetchData";

export default function Home() {
    const { data: user, } = useAuth();

    const { data: userCourses } = useGetData(`/users/${user.user_id}/courses`);

    return (
        <View className="flex-1 bg-base-100">
            <View className="flex-1 items-center justify-center">
                <Text className="text-3xl text-base-content text-center">
                    Bienvenido, {user.user_name} {user.user_lastname}
                </Text>
            </View>
        </View>
    );
}
