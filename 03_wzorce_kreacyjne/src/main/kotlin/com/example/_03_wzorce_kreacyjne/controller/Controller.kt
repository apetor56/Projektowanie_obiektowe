package com.example._03_wzorce_kreacyjne.controller

import com.example._03_wzorce_kreacyjne.model.LoginRequest
import com.example._03_wzorce_kreacyjne.model.productList
import com.example._03_wzorce_kreacyjne.authentication.AuthenticationManager
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class Controller(private val authenticationManager: AuthenticationManager) {
    @GetMapping("/")
    fun getAllProducts(@RequestBody loginRequest: LoginRequest): ResponseEntity<Any> {
        if(authenticationManager.authenticate(loginRequest.login, loginRequest.password))
            return ResponseEntity.ok().body(productList)
        else return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized")
    }

    @GetMapping("/{id}")
    fun getProduct(@RequestBody loginRequest: LoginRequest, @PathVariable id: Int): ResponseEntity<Any> {
        if(authenticationManager.authenticate(loginRequest.login, loginRequest.password))
            return ResponseEntity.ok().body(productList.find { it.id == id })
        else return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized")
    }
}
