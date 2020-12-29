import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Text>Anasayfa</Text>
            <Button
                title="Hakkında Sayfasına Git"
                onPress={() => navigation.navigate("Hakkında")} // We added an onPress event which would navigate to the About screen
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