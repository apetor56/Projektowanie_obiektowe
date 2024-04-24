package controller

import(
	"go-app/model"
	"net/http"
	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
)

type WeatherController struct {
	DB *gorm.DB
}

func (wc *WeatherController) GetWeather(c echo.Context) error {
	var weatherData []model.Weather

	if err := wc.DB.Find(&weatherData).Error; err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to fetch weather data"})
	}

	var responseData []map[string]interface{}
	for _, weather := range weatherData {
		data := map[string]interface{}{
			"MaxTemperature": weather.MaxTemperature,
			"MinTemperature": weather.MinTemperature,
			"Description":    weather.Description,
		}
		responseData = append(responseData, data)
	}

	return c.JSON(http.StatusOK, responseData)
}
