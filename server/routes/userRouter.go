package routes

import (
	"github.com/gin-gonic/gin"
	controller "github.com/supratim1/Clothes-shop/controllers"
	"github.com/supratim1/Clothes-shop/middleware"
)

func UserRoutes(incomingRoutes *gin.Engine) {
	incomingRoutes.Use(middleware.Authenticate())
	incomingRoutes.GET("/users", controller.GetUsers())
	incomingRoutes.GET("/users/:user_id", controller.GetUser())
}
