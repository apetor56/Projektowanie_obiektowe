package controller

import(
	"go-app/model"
	"net/http"
	"github.com/labstack/echo/v4"
)

func GetWeather(c echo.Context) error {
	weather := []model.Weather {
		{
			MaxTemperature: 32.1,
			MinTemperature: 23.4,
			Description: "Nice",
		},
	}
	return c.JSON(http.StatusOK, weather)
}