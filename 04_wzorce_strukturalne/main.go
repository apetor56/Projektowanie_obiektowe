package main

import(
	"go-app/controller"
	"go-app/routes"
	"go-app/model"
	"github.com/labstack/echo/v4"
    "gorm.io/driver/sqlite"
    "gorm.io/gorm"
)

func main() {
	db, err := gorm.Open(sqlite.Open("weather.db"), &gorm.Config{})
    if err != nil {
        panic("failed to connect database")
    }

	db.AutoMigrate(&model.Weather{})
	var count int64
	db.Model(&model.Weather{}).Count(&count)
	if count == 0 {
		weatherData := []model.Weather{
			{MaxTemperature: 32.1, MinTemperature: 23.4, Description: "Nice"},
			{MaxTemperature: 30.5, MinTemperature: 22.8, Description: "Sunny"},
		}
		db.Create(&weatherData)
	}

	weatherController := &controller.WeatherController{DB: db}

	e := echo.New()
	routes.Set(e, weatherController)
	e.Logger.Fatal(e.Start(":8080"))
}
