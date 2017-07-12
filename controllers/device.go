package controllers

import (
	"github.com/edot92/umjrs/models"

	"github.com/astaxie/beego"
)

type DeviceController struct {
	beego.Controller
}

// @Title Realtimelast
// @Description find object by objectid
// @Success 200 {object} models.Object "sukses"
// @Failure 403 :objectId is empty
// @router /realtimelast [get]
func (c *DeviceController) Realtimelast() {

	resModel, _ := models.GetRealtime()
	c.Data["json"] = map[string]interface{}{"data": resModel}
	// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Origin", "*")
	// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	c.ServeJSON()
}
