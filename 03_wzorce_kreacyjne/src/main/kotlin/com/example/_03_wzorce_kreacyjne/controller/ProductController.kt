package com.example._03_wzorce_kreacyjne.controller

import com.example._03_wzorce_kreacyjne.model.Product
import com.example._03_wzorce_kreacyjne.model.productList
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class ProductController {
    @GetMapping("/")
    fun getAllProducts(): List<Product> {
        return productList
    }

    @GetMapping("/{id}")
    fun getProduct(@PathVariable id: Int): Product ? {
        return productList.find{ it.id == id }
    }
}
