import { Redirect, Stack, Tabs } from "expo-router";

// Contexts
import { useAuth } from "../../contexts/authContexts";

// Components
import { Icon } from "../../components/icons";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
    const { data: userSession, loading } = useAuth();

    if (!loading && !userSession) {
        return <Redirect href="/" />;
    }

    const tabs = [
        { name: "home", title: "Inicio", icon: "home" },
        { name: "profile", title: "Perfil", icon: "user" },
        { name: "certificates", title: "Certificados", icon: "certificate" },
        { name: "progress", title: "Progreso", icon: "bar-chart" },
    ];

    return (
        <>
            <StatusBar style="light" />
            <Tabs
                screenOptions={{
                    tabBarStyle: {
                        position: "absolute",
                        backgroundColor: "#00000090",
                        borderWidth: 1,
                        borderColor: "#334155",
                        marginHorizontal: 10,
                        marginBottom: 15,
                        borderRadius: 10,
                        paddingBottom: 10,
                        paddingTop: 5,
                        height: 65,
                    },
                    tabBarActiveTintColor: "#38bdf8",
                    tabBarInactiveTintColor: "#f0f9ff",
                    headerShown: false,
                }}
            >
                {tabs.map((tab) => (
                    <Tabs.Screen
                        key={tab.name}
                        name={tab.name}
                        options={{
                            title: tab.title,
                            tabBarIcon: ({ color, size }) => (
                                <Icon name={tab.icon} color={color} size={23} />
                            ),
                            tabBarLabelStyle: {
                                fontSize: 11,
                            },
                        }}
                    />
                ))}
            </Tabs>
        </>
    );
}
