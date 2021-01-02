import React from "react";
import { View, StyleSheet, Text,Button } from "react-native";

const Privacy = () => {
    return (
        <View style={styles.center}>
            <Text>Gizlilik</Text>
            <Button
                title="Go to About Screen"
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

export default Privacy;