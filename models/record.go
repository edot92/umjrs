package models

import (
	"fmt"

	"github.com/edot92/umjrs/engine"
)

// Getallpasien ..
func Getallpasien() ([]engine.BiodataPasien, error) {
	var results []engine.BiodataPasien
	err := engine.KonDB.Find(&results).Error
	if err != nil {
		return results, err
	}

	return results, nil
}

// Setrecordactive create active for recording value of sensor
func Setrecordactive(param engine.RecordActive) error {
	err := engine.KonDB.Exec("DELETE FROM record_actives;").Error
	if err != nil {
		return err
	}
	fmt.Print("param=")
	fmt.Println(param)
	if param.Status != "" {
		var temp = engine.RecordActive{
			NamaLengkap: param.NamaLengkap,
			NoBpjs:      param.NoBpjs,
			Status:      "active",
		}
		err = engine.KonDB.Create(&temp).Error
		if err != nil {
			return err
		}
	}
	return nil
}

// Getrecordactive get active for recording value of sensor
func Getrecordactive() (engine.RecordActive, error) {
	var results engine.RecordActive
	err := engine.KonDB.Where("status = ?", "active").First(&results).Error
	if err != nil {
		// if strings.Contains(err.Error(), "record not found") == false {
		return results, err
		// }

	}
	return results, nil
}
