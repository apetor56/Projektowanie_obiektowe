package routes

import(
	"go-app/controller"
	"github.com/labstack/echo/v4"
)

func Set(e *echo.Echo, weatherController *controller.WeatherController) {
	e.GET("/weather", weatherController.GetWeather)
}
