package engine

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

//  KonDB ....
var KonDB *gorm.DB
var StartRecord = false

//history
type DataSerialDB struct {
	ID          uint64 `gorm:"primary_key"`
	NoBpjs      string `json:"no_bpjs"`
	Temperature string `json:"temperature"`
	Bpm         string `json:"bpm"`
	CreatedAt   string `json:"created_at"`
	UpdateAt    string `json:"update_at"`
}
type BiodataPasien struct {
	ID           uint64 `gorm:"primary_key"`
	NoBpjs       string `json:"no_bpjs"`
	NamaLengkap  string `json:"nama_lengkap"`
	JenisKelamin string `json:"jenis_kelamin"`
	TanggalLahir string `json:"tanggal_lahir"`
	CreatedAt    string `json:"created_at"`
	UpdateAt     string `json:"update_at"`
}
type RecordActive struct {
	ID          uint64 `gorm:"primary_key"`
	Status      string `json:"status"`
	NoBpjs      string `json:"no_bpjs"`
	NamaLengkap string `json:"nama_lengkap"`
	CreatedAt   string `json:"created_at"`
	UpdateAt    string `json:"update_at"`
}

// BukaDatabase ..
func BukaDatabase() error {
	db, err := gorm.Open("sqlite3", "irwan_umj.db")
	if err != nil {
		return err
	}
	db.LogMode(true)
	// if db.HasTable(&DataSerialDB{}) == false {
	// 	db.AutoMigrate(&DataSerialDB{})
	// }
	db.AutoMigrate(&DataSerialDB{})
	db.AutoMigrate(&BiodataPasien{})
	db.AutoMigrate(&RecordActive{})
	KonDB = db
	return nil
}
