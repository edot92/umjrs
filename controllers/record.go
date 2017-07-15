package controllers

import (
	"encoding/json"

	"github.com/edot92/umjrs/engine"
	"github.com/edot92/umjrs/models"

	"github.com/astaxie/beego"
)

type RecordController struct {
	beego.Controller
}

// @Title Get
// @Description find object by objectid
// @Success 200 {object} models.Object "sukses"
// @Failure 403 :objectId is empty
// @router /getallpasien [get]
func (c *RecordController) Getallpasien() {

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
// @Success 200 {object} models.Object "sukses"
// @Failure 403 :objectId is empty
// @router /setrecordactive [post]
func (c *RecordController) Setrecordactive() {
	var ob engine.RecordActive
	err := json.Unmarshal(c.Ctx.Input.RequestBody, &ob)
	if err != nil {
		c.Data["json"] = map[string]interface{}{"error": "invalid param ", "message": err.Error()}
		c.Ctx.ResponseWriter.WriteHeader(400)
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Origin", "*")
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
		c.ServeJSON()
		return
	}
	err = models.Setrecordactive(ob)
	if err != nil {
		c.Data["json"] = map[string]interface{}{"error": err.Error()}
		c.Ctx.ResponseWriter.WriteHeader(400)
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Origin", "*")
		// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
		c.ServeJSON()
		return
	}
	c.Data["json"] = map[string]interface{}{"message": "berhasil mengubah record"}
	// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Origin", "*")
	// c.Ctx.ResponseWriter.Header().Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	c.ServeJSON()
}

// @Title Get
// @Description find object by objectid
// @Success 200 {object} models.Object "sukses"
// @Failure 403 :objectId is empty
// @router /getrecordactive [get]
func (c *RecordController) Getrecordactive() {
	res, err := models.Getrecordactive()
	if err != nil {
		c.Data["json"] = map[string]interface{}{"error": err.Error()}
		c.Ctx.ResponseWriter.WriteHeader(400)
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
