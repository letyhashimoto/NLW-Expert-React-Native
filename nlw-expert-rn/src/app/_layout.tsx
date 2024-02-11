import { SafeAreaView } from "react-native"
import { Slot } from "expo-router"

export default function Layout(){
    return (
        <SafeAreaView className="flex-1 bg-slate-r900">
            <Slot />
        </SafeAreaView>        
    ) 
}
