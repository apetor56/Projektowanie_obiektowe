package routes

import(
	"go-app/controller"
	"github.com/labstack/echo/v4"
)

func Set(e *echo.Echo) {
	e.GET("/weather", controller.GetWeather)
}
