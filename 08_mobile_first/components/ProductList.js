import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { productStyles } from '../styles/productStyles';

const ProductList = ({ products }) => {
    return (
        <View style={productStyles.container}>
            <Text style={productStyles.title}>Produkty</Text>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <View style={productStyles.productItem}>
                        <Text style={productStyles.productName}>{item.name}</Text>
                        <Text style={productStyles.productPrice}>{item.price} PLN</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default ProductList;
