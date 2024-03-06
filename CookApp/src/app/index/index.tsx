import { View, Text } from "react-native";

import { styles } from "./styles";
import { Ingredientes } from "@/components/ingredientes";



export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>
            <Text style={styles.message}>
                Descubras receitas baseadas nos produtos que você escolheu
            </Text>         
            <Ingredientes />
        </View>
    )
}