package models

import "github.com/edot92/umjrs/engine"

type ParamGethistorybynobpjs struct {
	Nobpjs string `json:"no_bpjs"`
}

// Gethistorybynobpjs ....
func Gethistorybynobpjs(noBpjs string) ([]engine.DataSerialDB, error) {
	var results []engine.DataSerialDB
	err := engine.KonDB.Find(&results, "no_bpjs = ?", noBpjs).Error
	if err != nil {
		return results, err
	}
	return results, nil
}
