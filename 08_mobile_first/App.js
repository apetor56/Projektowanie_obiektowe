import React, { useState } from 'react';
import { View, Button } from 'react-native';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import categories from './data/categories';
import products from './data/products';
import { globalStyles } from './styles/globalStyles';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={globalStyles.container}>
      {!selectedCategory ? (
        <CategoryList categories={categories} onSelectCategory={handleSelectCategory} />
      ) : (
        <View style={globalStyles.container}>
          <ProductList products={products.filter(product => product.category === selectedCategory.name)} />
          <Button title="Powrót do kategorii" onPress={() => setSelectedCategory(null)} color="#007BFF" />
        </View>
      )}
    </View>
  );
};

export default App;
