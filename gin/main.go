package main

import (
	"fmt"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// User ...
type User struct {
	gorm.Model
	Name string `gorm:"default:defaultName"`
	Age int `gorm:"default:20"`
	Birthday time.Time
}



func gormConnect() *gorm.DB {
	dsn := "host=sandbox-gin-db user=gorm dbname=gorm password=gorm sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err.Error())
	}

	return db
}


func main()  {
	users := []User{}
	db := gormConnect()

	db.Find(&users)

	for _, user := range users {
		fmt.Println(user.Name)
	}
}
