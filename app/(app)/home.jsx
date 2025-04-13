import React from "react";
import { View, Text, Pressable, Image, ScrollView } from "react-native";

// Contexts
import { useAuth } from "../../contexts/authContexts";

// Hooks
import { useGetData } from "../../hooks/useFetchData";
import Wrapper from "../../components/wrapper";
import Loading from "../../components/loading";
import { Link } from "expo-router";

export default function Home() {
    const { data: user } = useAuth();

    const { data: userCourses, loading: userCoursesLoading } = useGetData(
        `/users/${user?.user_id}/courses`
    );

    const { data: courses, loading: coursesLoading } = useGetData("/courses");

    if (userCoursesLoading || coursesLoading) return <Loading />;

    const pendingCourses = userCourses.filter((course) => course.course_state === "progress");

    return (
        <Wrapper>
            <ScrollView className="flex-1 px-4">
                <View className="gap-3 py-5">
                    <View className="gap-1">
                        <Text className="text-primary font-bold">
                            Bienvenido a EduWeb, {user.user_name}
                        </Text>
                        <Text className="text-base-content text-4xl font-bold leading-[1]">
                            Impulsa tu conocimiento, transforma tu futuro
                        </Text>
                    </View>
                    <Text className="text-base-content opacity-70">
                        Accede a cursos de alta calidad y obtén certificados gratuitos que avalen tu
                        progreso. Aprende a tu ritmo, desarrolla nuevas habilidades y prepárate para
                        transformar tu futuro profesional con contenidos actualizados y una
                        comunidad de apoyo.
                    </Text>
                </View>
                <View className="gap-5 py-5">
                    <Text className="text-base-content text-2xl font-bold">Cursos pendientes</Text>
                    {pendingCourses.length == 0 && (
                        <View className="flex-1 items-center justify-center">
                            <Text className="text-base-content opacity-70">
                                No tienes cursos pendientes
                            </Text>
                        </View>
                    )}
                    <View className="flex-row flex-wrap gap-5">
                        {pendingCourses.map(({ course, ...uc }) => {
                            return <CourseCard key={course.course_id} course={course} />;
                        })}
                    </View>
                </View>
                <View className="gap-5 py-5 mb-24">
                    <Text className="text-base-content text-2xl font-bold">Explorar cursos</Text>
                    <View className="flex-row flex-wrap gap-5">
                        {courses.map((course) => {
                            return <CourseCard key={course.course_id} course={course} />;
                        })}
                    </View>
                </View>
            </ScrollView>
        </Wrapper>
    );
}

const CourseCard = ({ course }) => {
    return (
        <Link href={`${process.env.EXPO_PUBLIC_API_URL}/courses/${course.course_id}`}>
            <View key={course.course_id} className="gap-2 bg-base-200 rounded-lg">
                <Image
                    source={{ uri: course.course_image }}
                    className="w-full aspect-[16/9] rounded-lg"
                />
                <View className="p-4 gap-4">
                    <View>
                        <Text className="text-base-content text-2xl">{course.course_name}</Text>
                        <Text className="text-base-content opacity-70">
                            Por {course.teacher.user_name}
                        </Text>
                    </View>
                    <View className="flex-row flex-wrap gap-2">
                        <View className="border border-base-content px-2 py-1 rounded-lg">
                            <Text className="text-base-content">
                                {course.category.category_name}
                            </Text>
                        </View>
                        <View className="border border-base-content px-2 py-1 rounded-lg">
                            <Text className="text-base-content">{course.course_difficulty}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Link>
    );
};
