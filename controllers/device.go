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

// @Title Realtimelastactiverecord
// @Description find object by objectid
// @Success 200 {object} models.Object "sukses"
// @Failure 403 :objectId is empty
// @router /realtimelastactiverecord [get]
func (c *DeviceController) Realtimelastactiverecord() {
	resModel, _ := models.GetRealtime()
	c.Data["json"] = map[string]interface{}{"data": resModel}
	// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Origin", "*")
	// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	c.ServeJSON()
}

// Insert
// @Title Insert
// @Description find object by objectid
// @Param  temp query null true  deksripsi2
// @Param  bpm query null true  deksripsi2
// @Success 200 {object} models.Object "sukses"
// @Failure 403 :objectId is empty
// @router /insert [get]
func (c *DeviceController) Insert() {
	paramIn1 := c.GetString("temp")
	paramIn2 := c.GetString("bpm")
	models.Insert(paramIn1, paramIn2)
	c.Ctx.ResponseWriter.Write([]byte(paramIn1 + "," + paramIn2))
}

// Insert
// @Title Insert
// @Description find object by objectid
// @Param  temp query null true  deksripsi2
// @Param  bpm query null true  deksripsi2
// @Success 200 {object} models.Object "sukses"
// @Failure 403 :objectId is empty
// @router /getrecordactiveandbiodata [get]
func (c *DeviceController) Getrecordactiveandbiodata() {
	res, err := models.Getrecordactiveandbiodata()
	if err != nil {
		c.Data["json"] = map[string]interface{}{"error": err.Error()}
		c.Ctx.ResponseWriter.WriteHeader(400)
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Origin", "*")
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
		c.ServeJSON()
		return
	}
	c.Data["json"] = map[string]interface{}{"message": "berhasil mengambil list pasien", "name": "get all pasien", "data": res}
	// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Origin", "*")
	// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	c.ServeJSON()
}
