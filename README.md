# My treasure game - Frontend

To launch app, first follow instructions from [backend](https://github.com/tomekskuta/luxoft-my-treasure-backend) part of game.

then clone the repo:

```bash
git clone https://github.com/tomekskuta/my-treasure-frontend.git
```

install packages:

```bash
yarn install
# or
npm install
```

and run app:

```bash
yarn start
# or
npm start
```

App starts on `3000` port as default.

---

### Testing

Testing can be splitted to unit testing, integration testing end E2E testing.

I have no big experience with testing but I think good practice is to write unit tests and integration tests with TDD methodology. It gives possibility to deeper thinking of how features should work, organize work on it and it forces better code splitting because its easier to test smaller features of less responsibility.

For unit tests I would use Jest with react testing library and other tools, like redux-mock-store, fetch-mock, jest-styled-components etc. I can test logical parts of component and its expected behaviour.

For integration tests I can use the same tools as for unit tests and I can test expected behaviours of composed units of code.

Last part of testing is to write end-to-end tests. It simulates user experience and should tests possible paths of user contact with ui. I would use Cypress for it.
