import { ScrollView } from "react-native";

import { Ingredient } from "../ingredient";

import { styles } from "./styles";

export function Ingredients(){
    return(
        <ScrollView horizontal contentContainerStyle={styles.container}>
            <Ingredient />
            <Ingredient />
            <Ingredient />
        </ScrollView>
    )
}