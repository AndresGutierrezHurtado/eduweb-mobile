import React, { useState } from "react";
import { Text, View, Image, Pressable, ScrollView, TextInput } from "react-native";
import { Link, useRouter } from "expo-router";

// Components
import Wrapper from "../../components/wrapper";
import { Formik } from "formik";
import { Icon } from "../../components/icons";

export default function Certificates() {
    const [course, setCourse] = useState(null);

    const handleValidateCertificate = async (values) => {
        const { code } = values;

        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/certificates/${code}`);
        const { data } = await response.json();

        console.log(data);
        if (response.ok) {
            setCourse(data);
        }
    };

    return (
        <Wrapper>
            <ScrollView className="flex-1">
                <View className="flex-1 px-3">
                    {!course ? (
                        <View className="py-10 gap-10">
                            <Text className="text-base-content text-3xl font-medium leading-[1] text-center">
                                Validar certificados
                            </Text>
                            <Formik
                                initialValues={{ code: "" }}
                                onSubmit={handleValidateCertificate}
                            >
                                {({ handleChange, handleSubmit, values }) => (
                                    <View className="gap-5 w-full bg-base-300/50 rounded-lg p-5">
                                        <Text
                                            className="text-primary text-center"
                                            style={{ fontFamily: "alegreya-sans", fontSize: 35 }}
                                        >
                                            EduWeb
                                        </Text>
                                        <Text className="text-base-content text-sm opacity-70">
                                            Introduce el código que se te proporciona. Esto te
                                            permitir comprobar que el certificado es auténtico y fue
                                            expedido por EduWeb
                                        </Text>
                                        <View className="flex flex-col gap-4">
                                            <View className="gap-1">
                                                <Text className="text-base-content text-sm font-medium">
                                                    Código
                                                </Text>
                                                <TextInput
                                                    placeholder="Introduce el código"
                                                    style={{
                                                        backgroundColor: "transparent",
                                                        padding: 10,
                                                        borderRadius: 5,
                                                        borderWidth: 1,
                                                        borderColor: "white",
                                                    }}
                                                    onChangeText={handleChange("code")}
                                                    placeholderTextColor={"white"}
                                                    value={values.code}
                                                />
                                            </View>
                                            <Pressable onPress={handleSubmit}>
                                                <View className="bg-primary px-2 py-2 rounded-lg">
                                                    <Text className="text-primary-content font-medium text-center text-lg">
                                                        Validar certificado
                                                    </Text>
                                                </View>
                                            </Pressable>
                                        </View>
                                    </View>
                                )}
                            </Formik>
                        </View>
                    ) : (
                        <>
                            <View className="py-10 gap-7">
                                <Text className="text-base-content text-3xl font-medium leading-[1] text-center">
                                    Certificado
                                </Text>
                                <View className="flex-row items-center gap-7 bg-primary rounded-lg p-5">
                                    <Icon name="certificate" size={50} color="#020617" />
                                    <View className="flex-1">
                                        <Text
                                            className="text-primary-content font-bold"
                                            style={{ fontSize: 20 }}
                                        >
                                            El certificado es válido
                                        </Text>
                                        <Text className="text-primary-content text-sm text-2xl font-medium">
                                            El certificado digital fue emitido y verificado a través
                                            de EduWeb y toda su información es válida.
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View className="w-full my-5 border-t border-gray-300"></View>
                            <View className="gap-1">
                                <Text className="text-base-content text-2xl font-medium leading-[1]">
                                    {course.course.course_name}
                                </Text>
                                <Text className="text-base-content text-sm font-medium opacity-70">
                                    Curso aprobado el{" "}
                                    {new Date(
                                        course.userCourse.course_completion
                                    ).toLocaleDateString()}
                                </Text>
                                <View className="flex-row items-center gap-2 mt-5">
                                    <Pressable className="bg-primary px-8 py-2 rounded-lg">
                                        <Text className="text-primary-content font-medium text-center text-lg">
                                            <View className="flex-row items-center gap-2">
                                                <Icon name="download" size={20} color="#020617" />
                                                <Text className="text-primary-content font-medium text-center text-lg">
                                                    Descargar certificado
                                                </Text>
                                            </View>
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                            <View className="w-full my-5 border-t border-gray-300"></View>
                            <View className="items-center gap-2">
                                {/* course.user.user_* */}
                                <Image
                                    source={{ uri: course.user.user_image }}
                                    className="w-20 h-20 rounded-full"
                                />
                                <Text className="text-base-content text-lg font-medium">
                                    {course.user.user_name} {course.user.user_lastname}
                                </Text>
                                <View className="items-center">
                                    <Text className="text-base-content text-sm font-medium opacity-70">
                                        {course.user.user_email}
                                    </Text>
                                    <Text className="text-base-content text-sm font-medium opacity-70">
                                        {course.user.user_phone}
                                    </Text>
                                </View>
                            </View>
                            <View className="w-full my-5 border-t border-gray-300"></View>
                            <View className="flex-row items-center gap-2 mb-24">
                                <Text className="text-base-content text-sm font-medium opacity-70">
                                    EduWeb Avala el aprendizaje del alumno y valida las habilidades
                                    obtenidas en este curso, desde lo más elemental hasta el manejo
                                    de diversas herramientas.
                                </Text>
                            </View>
                        </>
                    )}
                </View>
            </ScrollView>
        </Wrapper>
    );
}
