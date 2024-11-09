import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        position: 'absolute',
        bottom: 60,
        backgroundColor: 'white',
        borderRadius: 100
        
    }
})

const showMenu = () => {
    console.log('yoo');
}

export default function Plus() {
    return (
        <>
            <TouchableOpacity 
                style={styles.button}
                onPress={showMenu}
                >
                <Text>+</Text>
            </TouchableOpacity>
        </>
    );
}