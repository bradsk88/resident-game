# resident-game
A random-event-driven idle adventure/base building game played locally in a browser

# Status
This is still in the early proof-of-concept stages.

# Project tracking
https://trello.com/b/XL3mSfvh/resident-game

# How To Run

## Using the client-side server

- Use the `npm run build` command to generate the executable files
- In a browser, open `dist/index.html`
- The game should start running, generating random event and printing 
  them out every few seconds
  
## Using the persistent server

- Use the `npm run serve` command to start the node server
- Follow the [steps above](#using-the-client-side-server) for running the 
  client side server, but click the "toggle" button in the UI to start fetching 
  random events from the node server.

