package models

import "github.com/edot92/umjrs/engine"

type ParamChart struct {
	JenisChart string `json:"jenis_chart"`
}
type ResponChart struct {
	Value float32 `json:"value"`
	Time  string  `json:"time"`
}
type Paramhistorydate struct {
	Startdate string `json:"startdate"`
	Enddate   string `json:"enddate"`
}

func GetRealtime() (engine.DataSerialDB, error) {
	var res engine.DataSerialDB
	engine.KonDB.Last(&res)
	return res, nil

}
