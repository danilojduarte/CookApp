import { View, Text, ScrollView } from "react-native";

import { styles } from "./styles";
import { Ingredient } from "@/components/ingredient";
import { useState } from "react";



export default function Index() {
    const [selected, setSelected] = useState<string[]>([])

    function handleToggleSelected(value: string){
        if(selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }

        setSelected((state) => [...state, value])
        console.log(selected)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>Os produtos</Text>
            </Text>
            <Text style={styles.message}>
                Descubras receitas baseadas nos produtos que você escolheu
            </Text>         
            <ScrollView contentContainerStyle={styles.ingredients}
            showsVerticalScrollIndicator={false}>
           {Array.from({ length:100 }).map((item, index) => (
            <Ingredient key={index} name="Tomate" image="" 
            selected={selected.includes(String(index))}
            onPress={() => handleToggleSelected(String(index))} />
           ))}
        </ScrollView>
        </View>
    )
}