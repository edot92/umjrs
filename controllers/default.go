package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Data["Website"] = "goiot.id"
	c.Data["Email"] = "edyprasetiyoo@gmail.com"
	c.TplName = "index.tpl"
}
