# Oncue Coding Challenge

An MVP solution to automating scheduling client jobs for moving companies.

[Give it a try.](https://oncue-mvp.herokuapp.com/)

Find my (minimal) app plan [here](https://docs.google.com/document/d/1L6f221wNPLa2bSQVG2loMHuqiIpd0YrZiS-bfsZsigs/edit?usp=sharing)

## Directions

### Requirements
- Node@10.1.0
- npm@6.0.1
- PostgreSQL@10
- (Suggested) Chrome@66^
### Development
- Clone this repo and cd into project directory
- In your terminal run `npm i`
- Still in terminal run `npm run install`
- Finally `npm start`
- Navigate to http://localhost:3000/ in your browser
### Production Build
- Clone this repo and cd into project directory
- In your terminal run `npm i`
- Still in your terminal run `npm run install`
- Run `npm run build`
- Finally `npm run local:prod`
- Navigate to http://localhost:3001/ in your browser

## Tech: React, Node.js, Express, and Postgres
Honorable Mentions: Sequelize, Axios, and Babel

## Possible Next Features and Improvements:
- (Feat) Time slot suggestions
- (Fix) Remove alerts, use subtle modal pop-ups instead
- (Feat) Calendar View
- (Improve) Job scheduling conflict detection requires 3 database queries. More advanced queries could improve response latency.
- (Improve) App does not account for time between jobs, breaks, etc.
- (Feat) Automate removing completed jobs.
- (Improve) Add logging middleware.
- (Improve) Tests! I opted for speed here, so the tests went out the door.
- ...A ton of other cool features and fixes.

### Made with ❤️ and ☕️ by, Aric Alves.
aric.alves2012@gmail.com