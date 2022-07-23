up:
	docker-compose up -d
down:
	docker-compose down

build:
	docker-compose build
reinit:
	make down
	rm -r db/data
	make build
	make up
