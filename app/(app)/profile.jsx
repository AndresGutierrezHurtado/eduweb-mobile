import React from "react";
import { Text, View, Image, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";

// Contexts
import { useAuth } from "../../contexts/authContexts";

// Hooks
import { useGetData } from "../../hooks/useFetchData";

// Components
import Wrapper from "../../components/wrapper";
import Loading from "../../components/loading";

export default function Profile() {
    const { data: user, logout } = useAuth();
    const router = useRouter();

    const { data: userCourses, loading: loadingCourses } = useGetData(
        `/users/${user.user_id}/courses`
    );

    if (loadingCourses) return <Loading />;
    const pendingCourses = userCourses.filter((course) => course.course_state === "progress");
    const completedCourses = userCourses.filter((course) => course.course_state === "completed");

    return (
        <Wrapper>
            <ScrollView className="flex-1">
                <View className="flex-1 px-3 ">
                    <View className="py-10">
                        <View className="flex-row items-center gap-5 w-full bg-base-300/50 rounded-lg p-5">
                            <Image
                                source={{ uri: user.user_image }}
                                className="w-28 h-28 rounded-full mb-4"
                            />
                            <View className="flex-1 gap-3">
                                <View>
                                    <Text className="text-base-content text-xl font-bold leading-[1]">
                                        {user.user_name} {user.user_lastname}
                                    </Text>
                                    <Text className="text-lg text-base-content opacity-70 italic">
                                        {user.user_profession || user.role.role_name}
                                    </Text>
                                </View>
                                <View>
                                    <Text className="text-base-content text-sm opacity-70">
                                        {user.user_email}
                                    </Text>
                                    <Text className="text-base-content text-sm opacity-70">
                                        {user.user_phone}
                                    </Text>
                                </View>
                                <View className="flex-row items-center gap-2 mt-2">
                                    <Pressable onPress={logout}>
                                        <View className="bg-red-700 px-2 py-1 rounded-lg">
                                            <Text className="text-red-100">Cerrar sesión</Text>
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="py-10 gap-4">
                        <Text className="text-base-content text-3xl font-medium leading-[1]">
                            Mis cursos pendientes
                        </Text>
                        <View className="gap-5 w-full bg-base-300/50 rounded-lg p-5">
                            {pendingCourses.length === 0 && (
                                <Text className="text-base-content text-sm opacity-70">
                                    No tienes cursos pendientes
                                </Text>
                            )}

                            {pendingCourses.map(({ course }) => (
                                <View
                                    key={course.course_id}
                                    className="flex-row items-center gap-4"
                                >
                                    <Image
                                        source={{ uri: course.course_image }}
                                        className="w-20 h-20 rounded-lg"
                                    />
                                    <View className="flex-1 gap-5">
                                        <Text className="text-base-content text-lg font-medium leading-[1]">
                                            {course.course_name}
                                        </Text>
                                        <View className="flex-row items-center gap-2">
                                            <Pressable
                                                onPress={() =>
                                                    router.push(
                                                        `${process.env.EXPO_PUBLIC_API_URL}/courses/${course.course_id}`
                                                    )
                                                }
                                            >
                                                <View className="bg-primary px-2 py-1 rounded-lg">
                                                    <Text>Ver curso</Text>
                                                </View>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View className="py-10 gap-4">
                        <Text className="text-base-content text-3xl font-medium leading-[1]">
                            Mis cursos completados
                        </Text>
                        <View className="gap-5 w-full bg-base-300/50 rounded-lg p-5">
                            {completedCourses.length === 0 && (
                                <Text className="text-base-content text-sm opacity-70">
                                    No tienes cursos completados
                                </Text>
                            )}

                            {completedCourses.map(({ course }) => (
                                <View
                                    key={course.course_id}
                                    className="flex-row items-center gap-4"
                                >
                                    <Image
                                        source={{ uri: course.course_image }}
                                        className="w-20 h-20 rounded-lg"
                                    />
                                    <View className="flex-1 gap-5">
                                        <Text className="text-base-content text-lg font-medium leading-[1]">
                                            {course.course_name}
                                        </Text>
                                        <View className="flex-row items-center gap-2">
                                            <Pressable
                                                onPress={() =>
                                                    router.push(
                                                        process.env.EXPO_PUBLIC_API_URL +
                                                            `/api/users/${user.user_id}/courses/${course.course_id}/certificate`
                                                    )
                                                }
                                            >
                                                <View className="bg-primary px-2 py-1 rounded-lg">
                                                    <Text>Ver certificado</Text>
                                                </View>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Wrapper>
    );
}
