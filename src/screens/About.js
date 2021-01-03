import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Divider from '../components/Divider';

const About = () => {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Nedir?</Text>
            <Text style={styles.description}>Stajİlan öğrenciler için oluşturulan staj ilanları ve kariyer fırsatlarını içeren sade, kolay kullanılabilir bir platformdur.</Text>
            <Text style={styles.title}>Daha Neler?</Text>
            <Text style={styles.description}>Vizyoner gençlerin ve geleceği için doğru adımlar atmak isteyen öğrencilerin kendilerine en uygun firmaların staj ilanları,kariyer olanakları ve eğitim programları ile eşleşebileceği bir platformdur.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        marginLeft: 30,
        marginRight:30,
        textAlign: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily:'monospace',
        color: '#3a86e9',
        marginTop: 20
    },
    description: {
        fontSize: 16,
        marginTop: 10
    }
});

export default About;
