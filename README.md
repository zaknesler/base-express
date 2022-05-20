## Express.js + TypeScript

This is a project scaffold for Express.js + TypeScript with Jest, ESLint, and Prettier pre-configured.

### Usage

1. Install NPM dependencies:

    ```bash
    npm install
    ```

2. Run the server:

    ```bash
    # Run in dev mode to watch for file changes
    npm run dev

    # Run without watching for changes
    npm run start
    ```

3. Visit [`http://localhost:3000`](http://localhost:3000) in your browser

### Testing

A basic test suite template uses [Jest](https://jestjs.io) and `supertest` to test API endpoints. A workflow is also included to run tests in CI on GitHub.

To run the test suite:

```bash
npm run test
```
