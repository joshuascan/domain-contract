# Polygon DNS App

Contract for a Polygon domain name service app, written in solidity and using the Hardhat Ethereum development environment.

_Corresponding frontend code can be found [here](https://github.com/joshuascan/domain-name-service-frontend)_

## Required Environment Variables for Deployment

If deploying this app, you will need to create a .env and include the follow variables:

- ALCHEMY*API_URL= \_Sign up at [alchemy](https://www.alchemy.com/) and create a new project on the Polygon Mumbai test net*
- PRIVATE*KEY= \_Your wallet private key*

## To Deploy

1. Run "npx hardhat compile"
2. Run "npx hardhat run scripts/deploy.js --network mumbai"
