import React from "react";

import { SafeAreaView, Platform, StatusBar, View } from "react-native";

export default function Wrapper({ children }) {
    return (
        <SafeAreaView
            className="flex-1 bg-base-100"
            style={{
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
            }}
        >
            {children}
        </SafeAreaView>
    );
}
