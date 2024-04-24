package main

import(
	"go-app/routes"
	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	routes.Set(e)
	e.Logger.Fatal(e.Start(":8080"))
}
