import React from "react";
import { Text, View, Image, Pressable, TextInput } from "react-native";
import { Formik } from "formik";
import { Link, useRouter } from "expo-router";

// Components
import { Icon } from "../../components/icons";

// Hooks
import { useValidateForm } from "../../hooks/useValidateForm";
import { usePostData } from "../../hooks/useFetchData";
import { storage } from "../../utils/storage";

export default function Login() {
    const router = useRouter();

    const handleSubmit = async (values) => {
        const data = values;
        const validation = useValidateForm("login-form", data);

        if (!validation.success) return alert(validation.message);

        const response = await usePostData("/login", data);

        if (!response.success) return;

        await storage.setItem("auth_token", response.data.token);

        router.push("/");
    };

    return (
        <View className="flex-1 bg-base-100 relative">
            <View className="flex-1 items-center justify-center">
                <Pressable onPress={() => router.push("/")}>
                    <Image
                        source={require("../../assets/logo.png")}
                        style={{ height: 200, width: 200 }}
                        className="mb-4"
                    />
                </Pressable>
                <Text
                    className="text-5xl text-base-content"
                    style={{ fontFamily: "alegreya-sans" }}
                >
                    Edu<Text className="text-primary">Web</Text>
                </Text>
            </View>
            <View className="flex-1 items-center justify-center bg-sky-50 rounded-t-xl p-10">
                <View className="flex-1 items-center justify-center gap-6 w-full">
                    <View className="flex-col gap-2">
                        <Text className="text-base-100 text-3xl font-extrabold text-center">
                            Inicia sesión
                        </Text>
                        <Text className="text-base-300/80 text-lg font-medium text-center">
                            Inicia sesión para poder gestionar tu cuenta.
                        </Text>
                    </View>
                    <Formik
                        initialValues={{
                            user_email: "",
                            user_password: "",
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ handleChange, handleSubmit, values }) => (
                            <View className="gap-3 w-full">
                                <View className="gap-2">
                                    <Text className="text-base-100 text-lg font-medium ">
                                        Correo Electrónico:
                                    </Text>
                                    <TextInput
                                        placeholder="Correo electrónico"
                                        className="border border-base-300 rounded px-3 py-2 w-full"
                                        onChangeText={handleChange("user_email")}
                                        value={values.user_email}
                                    />
                                </View>
                                <View className="gap-2">
                                    <Text className="text-base-100 text-lg font-medium ">
                                        Contraseña:
                                    </Text>
                                    <TextInput
                                        placeholder="Contraseña"
                                        className="border border-base-300 rounded px-3 py-2 w-full"
                                        secureTextEntry={true}
                                        onChangeText={handleChange("user_password")}
                                        value={values.user_password}
                                    />
                                </View>
                                <View className="mt-5">
                                    <Pressable
                                        onPress={handleSubmit}
                                        className="bg-primary rounded-xl px-3 py-2 w-full active:bg-primary/80 active:scale-[0.98]"
                                    >
                                        <Text className="text-primary-content text-lg font-medium text-center">
                                            Iniciar Sesión
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </View>
    );
}
