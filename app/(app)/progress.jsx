import React from "react";
import { Text, View, Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";

// Contexts
import { useAuth } from "../../contexts/authContexts";

// Hooks
import { useGetData } from "../../hooks/useFetchData.js";

// Components
import Wrapper from "../../components/wrapper";
import Loading from "../../components/loading";

export default function Progress() {
    const { data: userSession } = useAuth();

    const { data: courses, loading: loadingCourses } = useGetData(
        "/users/" + userSession?.user_id + "/courses"
    );

    if (loadingCourses) return <Loading />;

    const userLessons = courses.flatMap((course) => course.lessonsTaken);

    const totalLessons = userLessons.length;
    const totalCourses = courses.filter((course) => course.course_state === "completed").length;

    const last7DaysLessons = userLessons
        ?.filter(
            (lesson) => new Date(lesson.createdAt).getTime() >= Date.now() - 1000 * 60 * 60 * 24 * 7
        )
        .reduce((acc, cur) => {
            const day = new Date(cur.createdAt).toLocaleString("es-CO", { weekday: "long" });
            if (!acc[day]) {
                acc[day] = [];
            }
            acc[day].push(cur);
            return acc;
        }, {});

    const days = Array.from({ length: 7 }, (_, i) =>
        new Date(Date.now() - 1000 * 60 * 60 * 24 * i).toLocaleString("es-CO", {
            weekday: "long",
        })
    ).reverse();

    const daysLessons = days.map((day) => last7DaysLessons[day]?.length || 0);

    return (
        <Wrapper>
            <ScrollView className="flex-1 px-3 py-4">
                <Text className="text-base-content text-2xl font-bold mb-4">
                    Resumen de tu progreso
                </Text>

                {/* Estadísticas resumen */}
                <View className="flex-row justify-between mb-6">
                    <View className="bg-base-200 p-4 rounded-xl flex-1 mr-2">
                        <Text className="text-primary text-5xl font-extrabold text-center">
                            {totalCourses}
                        </Text>
                        <Text className="text-base-content text-lg font-semibold">
                            Cursos tomados
                        </Text>
                    </View>
                    <View className="bg-base-200 p-4 rounded-xl flex-1 ml-2">
                        <Text className="text-primary text-5xl font-extrabold text-center">
                            {totalLessons}
                        </Text>
                        <Text className="text-base-content text-lg font-semibold">
                            Lecciones totales
                        </Text>
                    </View>
                </View>

                {/* Gráfica */}
                <Text className="text-base-content text-xl font-semibold mb-2">
                    Lecciones en los últimos 7 días
                </Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingVertical: 10 }}
                >
                    <LineChart
                        height={220}
                        width={Dimensions.get("window").width * 1.5}
                        yAxisInterval={1}
                        data={{
                            labels: days,
                            datasets: [{ data: daysLessons }],
                        }}
                        chartConfig={{
                            backgroundGradientFrom: "#0f172a",
                            backgroundGradientTo: "#0f172a",
                            decimalPlaces: 0,
                            color: () => `#38bdf8`,
                            style: { borderRadius: 16 },
                        }}
                        bezier
                    />
                </ScrollView>

                <View className="mt-6 bg-base-200 p-5 rounded-xl">
                    {totalLessons > 0 ? (
                        <>
                            <Text className="text-base-content text-xl font-semibold mb-1">
                                ¡Buen trabajo, {userSession.user_name}! 🎉
                            </Text>
                            <Text className="text-base-content leading-tight opacity-80">
                                Has completado <Text className="font-bold">{totalLessons}</Text>{" "}
                                lecciones en total. Sigue así y mantén el ritmo. Tu constancia está
                                dando frutos 💪.
                            </Text>
                        </>
                    ) : (
                        <>
                            <Text className="text-base-content text-xl font-semibold mb-1">
                                ¡Bienvenido, {userSession.user_name}! 🎉
                            </Text>
                            <Text className="text-base-content leading-tight opacity-80">
                                Comienza a aprender y completa tus primeras lecciones 💪.
                            </Text>
                        </>
                    )}
                </View>
            </ScrollView>
        </Wrapper>
    );
}
