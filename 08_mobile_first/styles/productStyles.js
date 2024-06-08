import { StyleSheet } from 'react-native';

export const productStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    productItem: {
        backgroundColor: '#F8F8F8',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
        borderColor: '#E0E0E0',
        borderWidth: 1,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 16,
        color: 'green',
        marginTop: 5,
    },
});
