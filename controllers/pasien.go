package controllers

import (
	"encoding/json"

	"github.com/edot92/umjrs/engine"
	"github.com/edot92/umjrs/models"

	"github.com/astaxie/beego"
)

type PasienController struct {
	beego.Controller
}

// @Title Get
// @Description find object by objectid
// @Param    body        body    models.device.ParamChart  true "tes"
// @Success 200 {object} models.Object "sukses"
// @Failure 403 :objectId is empty
// @router /pendaftaranbaru [post]
func (c *PasienController) Pendaftaranbaru() {
	var ob engine.BiodataPasien
	json.Unmarshal(c.Ctx.Input.RequestBody, &ob)
	err := models.Pendaftaranbaru(ob)
	if err != nil {
		return
	}
	c.Data["json"] = map[string]interface{}{"message": "berhasil mendaftarkan pasien baru"}
	// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Origin", "*")
	// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	c.ServeJSON()
}
