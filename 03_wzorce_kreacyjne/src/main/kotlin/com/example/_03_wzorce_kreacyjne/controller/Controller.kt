package com.example._03_wzorce_kreacyjne.controller

import com.example._03_wzorce_kreacyjne.model.LoginRequest
import com.example._03_wzorce_kreacyjne.model.productList
import com.example._03_wzorce_kreacyjne.authentication.LazyAuthenticationManager
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController
import org.springframework.beans.factory.annotation.Autowired

@RestController
class Controller {
    @Autowired
    lateinit var authenticationManager: LazyAuthenticationManager

    @GetMapping("/")
    fun getAllProducts(@RequestBody loginRequest: LoginRequest): ResponseEntity<Any> {
        if(authenticationManager.authenticate(loginRequest.login, loginRequest.password))
            return ResponseEntity.ok().body(productList)

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized")
    }

    @GetMapping("/{id}")
    fun getProduct(@RequestBody loginRequest: LoginRequest, @PathVariable id: Int): ResponseEntity<Any> {
        if(authenticationManager.authenticate(loginRequest.login, loginRequest.password))
            return ResponseEntity.ok().body(productList.find { it.id == id })

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized")
    }
}
