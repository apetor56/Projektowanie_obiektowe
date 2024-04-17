package com.example._03_wzorce_kreacyjne.authentication

import org.springframework.stereotype.Component

@Component
class LazyAuthenticationManager {
    companion object {
        private val instance = LazyAuthenticationManager()

        fun getInstance(): LazyAuthenticationManager {
            return instance
        }
    }

    fun authenticate(login: String, password: String): Boolean {
        return login == this.login && password == this.password
    }

    private val login: String = "mockLogin"
    private val password: String = "mockPassword"
}
