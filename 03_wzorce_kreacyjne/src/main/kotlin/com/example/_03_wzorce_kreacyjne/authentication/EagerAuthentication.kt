package com.example._03_wzorce_kreacyjne.authentication

import org.springframework.stereotype.Component

@Component
object AuthenticationManager {
    private const val login: String = "mockLogin"
    private const val password: String = "mockPassword"

    fun authenticate(login: String, password: String) : Boolean {
        return login == this.login && password == this.password
    }
}
