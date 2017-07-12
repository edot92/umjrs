package main

import (
	"fmt"
	"time"

	"github.com/astaxie/beego"
	engine "github.com/edot92/umjrs/engine"
	_ "github.com/edot92/umjrs/routers"
)

func main() {

	// beego.BConfig.Listen.HTTPAddr = "192.168.9.35"
	beego.BConfig.WebConfig.DirectoryIndex = true
	beego.BConfig.CopyRequestBody = true
	beego.BConfig.WebConfig.TemplateLeft = "<%"
	beego.BConfig.WebConfig.TemplateRight = "%>"
	beego.SetStaticPath("/", "webui")

	beego.SetStaticPath("api", "swagger")
	beego.SetStaticPath("static", "webui/static")
	beego.SetStaticPath("staticpublic/static", "webui/static")

	engine.BukaDatabase()
	go func() {
		for {
			isOk, res, err := engine.ReadAndParse()
			if err != nil {
				fmt.Println("error nih", err)
			}
			time.Sleep(100)
			_ = isOk
			_ = res
			_ = err
		}

	}()
	go func() {
		beego.Run(":" + beego.AppConfig.String("httpport"))
	}()
	for {
		time.Sleep(100)
	}
}
