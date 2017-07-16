package controllers

import (
	"encoding/json"

	"github.com/astaxie/beego"
	"github.com/edot92/umjrs/models"
)

type RiwayatController struct {
	beego.Controller
}

// @Title Get
// @Description find object by objectid
// @Success 200 {object} models.Object "sukses"
// @Failure 403 :objectId is empty
// @router /getallpasien [get]
func (c *RiwayatController) Getallpasien() {
	res, err := models.Getallpasien()
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

// @Title Get
// @Description find object by objectid
// @Param  200 {object} models.ParamGethistorybynobpjs "sukses"
// @Success 200 {object} []engine.DataSerialDB "sukses"
// @Failure 403 :objectId is empty
// @router /gethistorybynobpjs [post]
func (c *RiwayatController) Gethistorybynobpjs() {
	var paramIn models.ParamGethistorybynobpjs
	err := json.Unmarshal(c.Ctx.Input.RequestBody, &paramIn)
	if err != nil {
		c.Data["json"] = map[string]interface{}{"error": err.Error()}
		c.Ctx.ResponseWriter.WriteHeader(400)
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Origin", "*")
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
		c.ServeJSON()
		return
	}
	res, err := models.Gethistorybynobpjs(paramIn.Nobpjs)
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
