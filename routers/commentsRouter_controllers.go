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

	beego.GlobalControllerRouter["github.com/edot92/umjrs/controllers:DeviceController"] = append(beego.GlobalControllerRouter["github.com/edot92/umjrs/controllers:DeviceController"],
		beego.ControllerComments{
			Method: "Insert",
			Router: `/insert`,
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

	beego.GlobalControllerRouter["github.com/edot92/umjrs/controllers:PasienController"] = append(beego.GlobalControllerRouter["github.com/edot92/umjrs/controllers:PasienController"],
		beego.ControllerComments{
			Method: "Ceknobpjspendaftar",
			Router: `/ceknobpjspendaftar`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/edot92/umjrs/controllers:RecordController"] = append(beego.GlobalControllerRouter["github.com/edot92/umjrs/controllers:RecordController"],
		beego.ControllerComments{
			Method: "Getallpasien",
			Router: `/getallpasien`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/edot92/umjrs/controllers:RecordController"] = append(beego.GlobalControllerRouter["github.com/edot92/umjrs/controllers:RecordController"],
		beego.ControllerComments{
			Method: "Setrecordactive",
			Router: `/setrecordactive`,
			AllowHTTPMethods: []string{"post"},
			MethodParams: param.Make(),
			Params: nil})

	beego.GlobalControllerRouter["github.com/edot92/umjrs/controllers:RecordController"] = append(beego.GlobalControllerRouter["github.com/edot92/umjrs/controllers:RecordController"],
		beego.ControllerComments{
			Method: "Getrecordactive",
			Router: `/getrecordactive`,
			AllowHTTPMethods: []string{"get"},
			MethodParams: param.Make(),
			Params: nil})

}
