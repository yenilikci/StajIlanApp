import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";

const Home = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Text>Anasayfa</Text>
            <Button
                title="Hakkında Sayfasına Git"
                onPress={() => navigation.navigate("Hakkında")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default Home;