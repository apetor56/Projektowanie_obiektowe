import { StyleSheet } from 'react-native';

export const categoryStyles = StyleSheet.create({
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
    categoryItem: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    category: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
    },
});
