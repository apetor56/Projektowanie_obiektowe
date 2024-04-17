package com.example._03_wzorce_kreacyjne.model

data class Product(
    var id: Int = 0,
    var name: String = "",
    var price: Float = 0.0f
)

var productList: List<Product> = listOf(
    Product(1, "item1", 1.0f),
    Product(2, "item2", 2.0f),
    Product(3, "item3", 3.0f),
    Product(4, "item4", 4.0f),
    Product(5, "item5", 5.0f)
)
