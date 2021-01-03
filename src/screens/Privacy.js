import React from "react";
import { View, StyleSheet, Text,Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Privacy = () => {
    return (
        <View style={styles.center}>
        <ScrollView
          showsVerticalScrollIndicator ={false}
          showsHorizontalScrollIndicator={false}>
        <Text style={styles.title}>Bilgilerin Paylaşımı</Text>
        <Text style={styles.description}>Stajilan, kişisel veya firma bilgilerinin başkalarına bağlı veya bağlı olmayan şirketlere satılmasına, kiralanmasına veyahutta paylaşılmasına neden olmaz. Ancak anonim bilgileri üçüncü taraflar ile paylaşabilir.</Text>
        <Text style={styles.title}>Aygıt/Cihaz Verileri</Text>
        <Text style={styles.description}>Hizmet ve servislerimize eriştiğinizde tablet veya telefon gibi bir cihaz kullandığınızda ip adresiniz,işletim sistemi sürümünüz, cihaz türünüz, sistem ve performans bilgileriniz ve tarayıcı türünüz gibi veriler toplanır. İstatistik ve reklam hizmetleri kişiselleştirilmiş içerikler ve reklamlar sunulmasına yardımcı olabilir.</Text>
        <Text style={styles.title}>Veri Aktarımı</Text>
        <Text style={styles.description}>Toplanan kişisel verileriniz, bu verilerin depolanması veya bu metinde yer alan hukuka uygun amaçlarla, denizaşırı ve kullanıcının bulunduğu ülke ve yargı bölgesinden başka dünya çapındaki ülkelere, başka bir ülkede bulunan sunuculara aktarılabilir, işleme alınabilir ve depolanabilir.</Text>
        <Text style={styles.title}>Bu Gizlilik Politikası aşağıdakiler için geçerli değildir</Text>
        <Text style={styles.description}>Hizmetlerimize reklam veren başka şirketlerin ve kuruluşların bilgi uygulamaları. Stajİlan hizmetlerini içerebilen, arama sonuçlarında size gösterilebilen veya hizmetlerimizden bağlantı verilebilen ürünler ya da siteler dahil olmak üzere diğer şirketler ve bireyler tarafından sunulan hizmetler. Bu Gizlilik Politikası'nı zaman zaman değiştiririz. Açıkça izninizi almadan bu Gizlilik Politikası kapsamındaki haklarınızda kısıtlama yapmayız. Her zaman son değişikliklerin yayınlanma tarihini belirtiriz. Değişiklikler önemliyse daha dikkat çekici bir bildirim sağlarız (belirli hizmetler için Gizlilik Politikası değişikliklerine dair e-posta bildirimi gibi).</Text>
        </ScrollView>
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

export default Privacy;