package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

	beego.GlobalControllerRouter["github.com/edot92/umjrs/controllers:DeviceController"] = append(beego.GlobalControllerRouter["github.com/edot92/umjrs/controllers:DeviceController"],
		beego.ControllerComments{
			Method: "Realtimelast",
			Router: `/realtimelast`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/edot92/umjrs/controllers:PasienController"] = append(beego.GlobalControllerRouter["github.com/edot92/umjrs/controllers:PasienController"],
		beego.ControllerComments{
			Method: "Pendaftaranbaru",
			Router: `/pendaftaranbaru`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

}
