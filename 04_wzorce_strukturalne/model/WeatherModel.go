package model

import "gorm.io/gorm"

type Weather struct {
	gorm.Model
	MaxTemperature float64
	MinTemperature float64
	Description string
}