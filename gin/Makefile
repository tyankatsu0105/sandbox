run-dev:
	docker-compose -f docker-compose.dev.yml up -d
run-prod:
	docker-compose -f docker-compose.prod.yml up -d

down-dev:
	docker-compose -f docker-compose.dev.yml down
down-prod:
	docker-compose -f docker-compose.prod.yml down

build-dev:
	make down-dev
	docker-compose -f docker-compose.dev.yml build
build-prod:
	make down-prod
	docker-compose -f docker-compose.prod.yml build

rerun-dev:
	make build-dev
	make run-dev
rerun-prod:
	make build-prod
	make run-prod