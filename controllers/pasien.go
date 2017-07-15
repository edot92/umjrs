package controllers

import (
	"encoding/json"
	"net/http"

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
	err := json.Unmarshal(c.Ctx.Input.RequestBody, &ob)
	if err != nil {
		c.Data["json"] = map[string]interface{}{"error": "invalid param ", "message": err.Error()}
		c.Ctx.ResponseWriter.WriteHeader(400)
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Origin", "*")
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
		c.ServeJSON()
		return
	}
	err = models.Pendaftaranbaru(ob)
	if err != nil {
		c.Data["json"] = map[string]interface{}{"error": err.Error()}
		c.Ctx.ResponseWriter.WriteHeader(400)
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Origin", "*")
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
		c.ServeJSON()
		return
	}
	c.Data["json"] = map[string]interface{}{"message": "berhasil mendaftarkan pasien baru"}
	// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Origin", "*")
	// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	c.ServeJSON()
}

// @Title Get
// @Description find object by objectid
// @Param  no_bpjs query null true  deksripsi2
// @Success 200 {object} models.Object "sukses"
// @Failure 403 :objectId is empty
// @router /ceknobpjspendaftar [get]
func (c *PasienController) Ceknobpjspendaftar() {
	paramIn := c.GetString("no_bpjs")
	if paramIn == "" {
		c.Data["json"] = map[string]interface{}{"error": "invalid param"}
		c.Ctx.ResponseWriter.WriteHeader(400)
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Origin", "*")
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
		c.ServeJSON()
		return
	}
	res, err := models.Ceknobpjspendaftar(paramIn)
	if err != nil {
		c.Data["json"] = map[string]interface{}{"error": "no bpjs tidak tersedia"}
		// c.Ctx.ResponseWriter.Write([]byte("no bpjs tidak tersedia"))
		c.Ctx.ResponseWriter.WriteHeader(http.StatusNotFound)
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Origin", "*")
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
		c.ServeJSON()
		return
	}
	c.Data["json"] = map[string]interface{}{"message": res}
	// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Origin", "*")
	// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	c.ServeJSON()
}
