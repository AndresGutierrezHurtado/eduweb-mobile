import React from "react";
import { Text, View, Image, Pressable, TextInput, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
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
        const validation = useValidateForm("register-form", data);

        if (!validation.success) return alert(validation.message);

        const response = await usePostData("/users", { user: data });

        if (!response.success) return;

        router.push("/login");
    };

    return (
        <View className="flex-1 bg-base-100 relative">
            <View className="flex-1 items-center justify-center">
                <Pressable onPress={() => router.push("/")}>
                    <Image
                        source={require("../../assets/logo.png")}
                        style={{ height: 180, width: 180 }}
                        className="mb-4"
                    />
                </Pressable>
                <Text
                    className="text-5xl text-base-content"
                    style={{ fontFamily: "alegreya-sans" }}
                >
                    Edu<Text className="text-primary">Web</Text>
                </Text>
                <Link href="/login" asChild>
                    <Text className="text-base-content text-lg text-center">
                        Si ya tienes una cuenta, <Text className="text-primary">inicia sesión</Text>
                    </Text>
                </Link>
            </View>
            <View className="h-[48%] items-center justify-center bg-sky-50 rounded-t-xl py-4">
                <ScrollView className="flex-1 w-full flex flex-col">
                    <View className="flex-1 items-center justify-center gap-6 w-full px-10 py-6">
                        <View className="flex-col gap-2 mb-5">
                            <Text className="text-base-100 text-4xl font-extrabold text-center">
                                Regístrate
                            </Text>
                            <Text className="text-base-300/80 text-lg font-medium text-center leading-none">
                                Regístrate para ser parte de la comunidad de EduWeb.
                            </Text>
                        </View>
                        <Formik
                            initialValues={{
                                user_name: "",
                                user_lastname: "",
                                user_phone: "",
                                user_email: "",
                                user_image: "https://",
                                user_password: "",
                                role_id: "1",
                            }}
                            onSubmit={handleSubmit}
                        >
                            {({ handleChange, handleSubmit, values }) => (
                                <View className="gap-3 w-full">
                                    <View className="gap-2">
                                        <Text className="text-base-100 text-lg font-medium">
                                            Nombre:
                                        </Text>
                                        <TextInput
                                            placeholder="Nombre"
                                            className="border border-base-300 rounded px-3 py-2 w-full"
                                            onChangeText={handleChange("user_name")}
                                            value={values.user_name}
                                        />
                                    </View>
                                    <View className="gap-2">
                                        <Text className="text-base-100 text-lg font-medium">
                                            Apellido:
                                        </Text>
                                        <TextInput
                                            placeholder="Apellido"
                                            className="border border-base-300 rounded px-3 py-2 w-full"
                                            onChangeText={handleChange("user_lastname")}
                                            value={values.user_lastname}
                                        />
                                    </View>
                                    <View className="gap-2">
                                        <Text className="text-base-100 text-lg font-medium">
                                            Teléfono:
                                        </Text>
                                        <TextInput
                                            placeholder="Teléfono"
                                            className="border border-base-300 rounded px-3 py-2 w-full"
                                            onChangeText={handleChange("user_phone")}
                                            value={values.user_phone}
                                        />
                                    </View>
                                    <View className="gap-2">
                                        <Text className="text-base-100 text-lg font-medium">
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
                                        <Text className="text-base-100 text-lg font-medium">
                                            Imagen de perfil:
                                        </Text>
                                        <TextInput
                                            placeholder="Imagen de perfil"
                                            className="border border-base-300 rounded px-3 py-2 w-full"
                                            onChangeText={handleChange("user_image")}
                                            value={values.user_image}
                                        />
                                    </View>
                                    <View className="gap-2">
                                        <Text className="text-base-100 text-lg font-medium">
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
                                    <View className="gap-2">
                                        <Text className="text-base-100 text-lg font-medium">
                                            Rol:
                                        </Text>
                                        <View className="border border-base-300 rounded w-full">
                                            <Picker
                                                selectedValue={values.role_id}
                                                onValueChange={handleChange("role_id")}
                                                style={{ height: 50 }}
                                            >
                                                <Picker.Item label="Estudiante" value="1" />
                                                <Picker.Item label="Docente" value="2" />
                                            </Picker>
                                        </View>
                                    </View>
                                    <View className="mt-5">
                                        <Pressable
                                            onPress={handleSubmit}
                                            className="bg-primary rounded-xl px-3 py-2 w-full active:bg-primary/80 active:scale-[0.98]"
                                        >
                                            <Text className="text-primary-content text-lg font-medium text-center">
                                                Registrarme
                                            </Text>
                                        </Pressable>
                                    </View>
                                </View>
                            )}
                        </Formik>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
