package models

import (
	"fmt"
	"strings"

	"github.com/edot92/umjrs/engine"
)

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

// Insert ...
func Insert(temperature, bpm string) error {
	var results1 engine.RecordActive
	err := engine.KonDB.Where("status = ?", "active").First(&results1).Error
	if err != nil {

		if strings.Contains(err.Error(), " record not found") == false {
			return err
		}
		fmt.Println(err)
	}

	var temp = engine.DataSerialDB{
		NoBpjs:      results1.NoBpjs,
		Bpm:         bpm,
		Temperature: temperature,
	}
	err = engine.KonDB.Create(&temp).Error
	if err != nil {
		fmt.Println(err)
		return err
	}
	fmt.Println("insert sukses to No BPJS:" + temp.NoBpjs)
	return nil

}
