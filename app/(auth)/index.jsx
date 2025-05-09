import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";

// Components
import { Icon } from "../../components/icons";

export default function Index() {
    return (
        <View className="flex-1 bg-base-100 relative">
            <View className="flex-1 items-center justify-center">
                <Image
                    source={require("../../assets/logo.png")}
                    style={{ height: 200, width: 200 }}
                    className="mb-4"
                />
                <Text className="text-5xl text-base-content font-Alegreya">
                    Edu<Text className="text-primary">Web</Text>
                </Text>
            </View>
            <View className="h-2/5 items-center justify-center bg-sky-50 rounded-t-xl p-10">
                <View className="flex-1 items-center justify-center gap-12 w-full">
                    <View className="flex-col gap-2">
                        <Text className="text-base-100 text-4xl font-extrabold text-center leading-none">
                            Bienvenido a EduWeb
                        </Text>
                        <Text className="text-base-300 text-lg text-center leading-none">
                            Inicia sesión o crea una cuenta para continuar
                        </Text>
                    </View>
                    <View className="gap-5 w-full">
                        <Link
                            href="/login"
                            asChild
                            className="border-2 border-base-300 bg-base-300 rounded-lg px-5 py-2 w-full"
                        >
                            <Text className="text-base-content text-lg font-bold text-center">
                                Iniciar Sesión
                            </Text>
                        </Link>
                        <Link
                            href="/register"
                            asChild
                            className="border-2 border-base-300 rounded-lg px-5 py-2 w-full"
                        >
                            <Text className="text-base-300 text-lg font-bold text-center">
                                Crear Cuenta
                            </Text>
                        </Link>
                    </View>
                    {/* <View className="flex-col items-center justify-center">
                        <Text className="text-base-300 text-lg font-medium text-center">
                            Inicia sesión con proveedores
                        </Text>
                        <View className="flex-row gap-5 mt-4">
                            <Pressable className="w-14 h-14 rounded-full bg-zinc-300 items-center justify-center">
                                <Icon name="google" size={20} color="#1e293b" />
                            </Pressable>
                            <Pressable className="w-14 h-14 rounded-full bg-zinc-300 items-center justify-center">
                                <Icon name="github" size={20} color="#1e293b" />
                            </Pressable>
                        </View>
                    </View> */}
                </View>
            </View>
        </View>
    );
}
