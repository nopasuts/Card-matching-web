# Card-matching-web
Develop by using NextJs framework with custom theme bootstrap
## Getting Started
- Git clone ``https://github.com/nopasuts/Card-matching-web.git``

## Development
Develop through docker:
`docker-compose up`

App will start using port `3000`.

For production version, please modify `Dockerfile` to `yarn build` and `yarn start` and instead of `yarn dev`

## Test
Install dev dependencies:
``yarn install``

Test is run by cypress framework
``yarn unit-test``

## ENV
Modify environment variables in `.env` file

`SERVICE_HOST_URL`: Specify backend host url

Project structure
-----------------

Application parts are:

::

    card-matching-web
    ├── components       - Components to render.
    ├── pages            - Web pages.
    ├── helper           - Helper to contain logic stuff of each page or component
    ├── libs             - Custom libs eg. fetch.
    ├── resources        - strings that are used in web responses.
    ├── services         - Contain API to connect to host service(like repositories).
    ├── style            - Import style and custom theme/variables.
    └── utils            - Contain util functions to reuse in project

