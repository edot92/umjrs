package models

import (
	"fmt"
	"strings"
	"time"

	"github.com/edot92/umjrs/engine"
	"github.com/metakeule/fmtdate"
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
	date := fmtdate.Format("YYYY-MM-DD hh:mm:ss", time.Now())
	date = date + ".000000000+07:00"
	var temp = engine.DataSerialDB{
		NoBpjs:      results1.NoBpjs,
		Bpm:         bpm,
		Temperature: temperature,
		CreatedAt:   date,
		UpdateAt:    date,
	}
	err = engine.KonDB.Create(&temp).Error
	if err != nil {
		fmt.Println(err)
		return err
	}
	fmt.Println("insert sukses to No BPJS:" + temp.NoBpjs)
	return nil

}

type ResponActiveandbiodata struct {
	Record  engine.RecordActive  `json:"record"`
	Biodata engine.BiodataPasien `json:"biodata"`
}

func Getrecordactiveandbiodata() (ResponActiveandbiodata, error) {
	var resultsRecord engine.RecordActive
	var resultsBiodata engine.BiodataPasien
	var results ResponActiveandbiodata
	err := engine.KonDB.Where("status = ?", "active").First(&resultsRecord).Error
	if err != nil {
		// if strings.Contains(err.Error(), "record not found") == false {
		return results, err
		// }
	}
	err = engine.KonDB.Where("no_bpjs = ?", resultsRecord.NoBpjs).First(&resultsBiodata).Error
	if err != nil {
		// if strings.Contains(err.Error(), "record not found") == false {
		return results, err
		// }
	}
	results.Biodata = resultsBiodata
	results.Record = resultsRecord
	return results, nil
}
