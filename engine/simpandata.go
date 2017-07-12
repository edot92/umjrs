package engine

import (
	"errors"
	"fmt"
	"time"

	"github.com/metakeule/fmtdate"
)

// SimpanData ..
func SimpanData(datanya DataSerial) error {
	date := fmtdate.Format("YYYY-MM-DD hh:mm:ss", time.Now())
	date = date + ".000000000+07:00"
	// date = date + ".000"
	bpm := fmt.Sprintf("%.1f", datanya.Heart)
	temperature := fmt.Sprintf("%1.f", datanya.Temperature)
	var temp = DataSerialDB{
		Bpm:         bpm,
		Temperature: temperature,
		CreatedAt:   date,
		UpdateAt:    date,
	}
	// db.Create(&animal)
	errr := KonDB.Create(&temp).GetErrors()
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
