import { Link, Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops!' }} />
            <View style={styles.container}>
                <Text style={styles.text}>This screen does not exist.</Text>
                <Link href="/" style={styles.link}>Go to home screen!</Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        color: '#fff',
    },
    link: {
        color: '#fff',
        textDecorationLine: 'underline',
        fontSize: 16,
    }
})