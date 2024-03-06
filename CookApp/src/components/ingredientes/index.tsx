import { Pressable, Text, Image } from "react-native";
import { styles } from "./styles";

export function Ingredientes(){
    return(
        <Pressable style={styles.container}>
            <Image source={require("@/app/assets/tomato.png")} 
             style={styles.image}/>

            <Text style={styles.title}>Maçã</Text>
        </Pressable>
    )
}