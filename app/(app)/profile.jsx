import React, { useState } from "react";
import { Text, View, Image, Pressable, ScrollView, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { Formik } from "formik";

// Contexts
import { useAuth } from "../../contexts/authContexts";

// Hooks
import { useGetData, usePutData } from "../../hooks/useFetchData";
import { useValidateForm } from "../../hooks/useValidateForm";

// Components
import Wrapper from "../../components/wrapper";
import Loading from "../../components/loading";

export default function Profile() {
    const [editable, setEditable] = useState(false);
    const { data: user, logout, reload } = useAuth();
    const router = useRouter();

    const { data: userCourses, loading: loadingCourses } = useGetData(
        `/users/${user?.user_id}/courses`
    );

    const handleUpdate = async (values) => {
        const data = values;
        const validation = useValidateForm("update-user-form", data);

        if (!validation.success) return alert(validation.message);

        const response = await usePutData(`/users/${user?.user_id}`, { user: data });
        if (response.success) {
            setEditable(false);
            reload();
        }
    };

    if (loadingCourses) return <Loading />;

    const pendingCourses = userCourses.filter((course) => course.course_state === "progress");
    const completedCourses = userCourses.filter((course) => course.course_state === "completed");

    return (
        <Wrapper>
            <ScrollView className="flex-1">
                <View className="flex-1 px-3">
                    <View className="py-8">
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
                                    <Pressable
                                        onPress={() => setEditable(!editable)}
                                        className="grow"
                                    >
                                        <View className="bg-primary px-2 py-1 rounded-lg">
                                            <Text className="text-primary-content text-center">
                                                {editable ? "Cancelar" : "Editar perfil"}
                                            </Text>
                                        </View>
                                    </Pressable>
                                    <Pressable onPress={logout}>
                                        <View className="border border-primary px-2 py-1 rounded-lg">
                                            <Text className="text-primary">Cerrar sesión</Text>
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                    {editable && (
                        <View className="py-5 gap-5">
                            <Text className="text-base-content text-3xl font-medium leading-[1]">
                                Editar perfil
                            </Text>
                            <View className="gap-5 w-full bg-base-300/50 rounded-lg p-5">
                                <Formik
                                    initialValues={{
                                        user_name: user.user_name,
                                        user_lastname: user.user_lastname,
                                        user_email: user.user_email,
                                        user_phone: user.user_phone,
                                        user_image: user.user_image,
                                    }}
                                    onSubmit={(values) => handleUpdate(values)}
                                >
                                    {({ handleChange, handleSubmit, handleReset, values }) => (
                                        <>
                                            <View className="gap-2">
                                                <Text className="text-base-content text-sm opacity-70">
                                                    Nombre
                                                </Text>
                                                <TextInput
                                                    className="w-full border border-base-300 rounded-lg p-2 text-white"
                                                    value={values.user_name}
                                                    onChangeText={handleChange("user_name")}
                                                    placeholder="Ingrese su nombre"
                                                    placeholderTextColor="#f0f9ff"
                                                />
                                                <Text className="text-base-content text-sm opacity-70">
                                                    Apellido
                                                </Text>
                                                <TextInput
                                                    className="w-full border border-base-300 rounded-lg p-2 text-white"
                                                    value={values.user_lastname}
                                                    onChangeText={handleChange("user_lastname")}
                                                    placeholder="Ingrese su apellido"
                                                    placeholderTextColor="#f0f9ff"
                                                />
                                                <Text className="text-base-content text-sm opacity-70">
                                                    Correo electrónico
                                                </Text>
                                                <TextInput
                                                    className="w-full border border-base-300 rounded-lg p-2 text-white"
                                                    value={values.user_email}
                                                    onChangeText={handleChange("user_email")}
                                                    placeholder="Ingrese su correo electrónico"
                                                    placeholderTextColor="#f0f9ff"
                                                />
                                                <Text className="text-base-content text-sm opacity-70">
                                                    Teléfono
                                                </Text>
                                                <TextInput
                                                    className="w-full border border-base-300 rounded-lg p-2 text-white"
                                                    value={values.user_phone}
                                                    onChangeText={handleChange("user_phone")}
                                                    placeholder="Ingrese su teléfono"
                                                    placeholderTextColor="#f0f9ff"
                                                    keyboardType="numeric"
                                                />
                                                <Text className="text-base-content text-sm opacity-70">
                                                    Imagen de perfil
                                                </Text>
                                                <TextInput
                                                    className="w-full border border-base-300 rounded-lg p-2 text-white"
                                                    value={values.user_image}
                                                    onChangeText={handleChange("user_image")}
                                                    placeholder="https://example.com/image.png"
                                                    placeholderTextColor="#f0f9ff"
                                                />
                                            </View>
                                            <Pressable onPress={handleReset}>
                                                <Text className="text-base-content text-sm opacity-70">
                                                    Restablecer
                                                </Text>
                                            </Pressable>
                                            <Pressable
                                                onPress={handleSubmit}
                                                className="w-full bg-primary rounded-lg p-2"
                                            >
                                                <Text className="text-primary-content text-center font-bold text-sm">
                                                    Actualizar
                                                </Text>
                                            </Pressable>
                                        </>
                                    )}
                                </Formik>
                            </View>
                        </View>
                    )}
                    <View className="py-5 gap-4">
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
                                                            `/api/users/${user?.user_id}/courses/${course.course_id}/certificate`
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
