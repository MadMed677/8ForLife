# 8ForLife [![travis build](https://img.shields.io/travis/MadMed677/8ForLife.svg)](https://travis-ci.org/MadMed677/8ForLife) [![codecov coverage](https://img.shields.io/codecov/c/github/MadMed677/8ForLife/dev.svg)](https://codecov.io/gh/MadMed677/8ForLife) ![node release](https://img.shields.io/github/release/MadMed677/8ForLife.svg)

## О чем проект

В данном проекте я пытаюсь реализовать функционал, в котором пользователь сможет формировать свое "колесо жизни".

Идея достаточно проста ([цитирую фразу из открытого источника](http://lifetoyou.ru/koleso-zhizni-metodika-analiza-i-planirovaniya-zhizni/):

> Колесо жизни – это отражение различных сфер вашей жизни.
> Каждая сфера оценивается по 10-бальной системе. 1 – означает, что вы полностью не удовлетворены ситуацией в данном секторе вашей жизни. 10 – вы полностью удовлетворены этой сферой.

Задача данного проекта, предоставить такой ресурс. Именно это я и реализую в этом проекте.

## Цель

Я достаточно давно хотел создать этот ресурс, и если ты это читаешь, значит проект еще в разработке. Если вдруг, на timeline'е github'а ты увидишь,
что последняя правка сделана более недели назад, значит я потерял тягу. Но я верю, что это не случится. По крайней мере, пока все в активной разработке :)
 
Основной целью я ставлю перед собой создать по-настоящему интересный проект, который будет приносить пользу, хотя бы, только мне :)
Так же моей целью является создание качественного кода, так сказать, по всем канонам программирования :)
Покрытие кода тестами юнит тестами, интеграционными тестами / полное документирование кода, а так же описание документации к его использованию
/ функциональный подход / интеграция с CI / подключение стороннего coverage'инга / репорты об ошибках.

## Как должен выглядеть проект, после v1

- Авторизация пользователя
- [Выбор тех сфер, за которыми тот хочет следить](#сферы)
- Заполнение "колеса жизни" и визуализация его в виде графика
- Просмотр истории
- Выставление TODO листа по каждой из сфер

На самом деле, основная задача не такая большая, но для начала, как мне кажется, это отлично подходит.

## Стек технологий

### Frontend
- React
- Redux
- PostCSS
- Karma
- Webpack


> Еще нет
> ### Backend
> - NodeJS
> - KoaJS
> - Sequalize
> - Relational DB (MySQL, PosgreSQL)

### Тесты
- Mocha
- Chai (expect)
- Sinon
- Enzyme

### Документация
- JSDoc builder (на данный момент смотрю альтернативы)

### Сторонние сервисы
- Travis CI (CI)
- CodeCov (Coverage)
