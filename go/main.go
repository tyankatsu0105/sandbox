package main

import (
	"fmt"
	"net/http"
	"reflect"
	"runtime"
)

type HelloHandler struct{}
type WorldHandler struct{}

// func (h *HelloHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprintf(w, "Hello!")
// }

func hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello!")
}

// func (h *WorldHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprintf(w, "World!")
// }

func world(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "World!")
}

func log(h http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		name := runtime.FuncForPC(reflect.ValueOf(h).Pointer()).Name()
		fmt.Println("Handler function called - " + name)
		h(w, r)
	}
}

func main() {
	// hello := HelloHandler{}
	// world := WorldHandler{}

	server := http.Server{
		Addr: ":3000",
	}

	http.HandleFunc("/hello", log(hello))
	http.HandleFunc("/world", world)

	server.ListenAndServe()
}
