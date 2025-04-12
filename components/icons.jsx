import { FontAwesome } from "@expo/vector-icons";

export const Icon = ({ name, size, color }) => {
    return <FontAwesome name={name} size={size} color={color} />;
};
