import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { categoryStyles } from '../styles/categoryStyles';

const CategoryList = ({ categories, onSelectCategory }) => {
    return (
        <View style={categoryStyles.container}>
            <Text style={categoryStyles.title}>Kategorie</Text>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <TouchableOpacity style={categoryStyles.categoryItem} onPress={() => onSelectCategory(item)}>
                        <Text style={categoryStyles.category}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default CategoryList;
