# RaceWeekApp

## Comando Docker para Postgres

`	
docker run --name RaceWeekDB -e POSTGRES_USER=RaceWeekDB -e POSTGRES_PASSWORD=RaceWeekDB -POSTGRES_DB=RaceWeekDB -p 21000:5432 -d postgres
`

## Comando Docker para api

`
docker run --name raceweekapi -p 21001:3000 raceweekapi
`
