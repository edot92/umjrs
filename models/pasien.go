package models

import (
	"errors"
	"fmt"
	"time"

	"github.com/edot92/umjrs/engine"
	"github.com/metakeule/fmtdate"
)

// Pendaftaranbaru ..
func Pendaftaranbaru(param engine.BiodataPasien) error {
	date := fmtdate.Format("YYYY-MM-DD hh:mm:ss", time.Now())
	date = date + ".000000000+07:00"
	// date = date + ".000"
	var temp = engine.BiodataPasien{
		NoBpjs:       param.NoBpjs,
		NamaLengkap:  param.NamaLengkap,
		JenisKelamin: param.JenisKelamin,
		TanggalLahir: param.TanggalLahir,
		CreatedAt:    date,
		UpdateAt:     date,
	}
	// db.Create(&animal)
	errr := engine.KonDB.Create(&temp).GetErrors()
	if len(errr) > 0 {
		fmt.Println(errr)
		var stringErr string
		for index := 0; index < len(errr); index++ {
			stringErr = stringErr + "," + string(errr[index].Error())
		}
		return errors.New(stringErr)
	}
	return nil
}
