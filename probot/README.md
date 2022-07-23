# sandbox-probot

> A GitHub App built with [Probot](https://github.com/probot/probot) that probotの検証

## Setup

```sh
# Install dependencies
npm install

# Compile
npm run build

# Run
npm run start
```

## Docker

```sh
# 1. Build container
docker build -t sandbox-probot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> sandbox-probot
```

## Contributing

If you have suggestions for how sandbox-probot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 tyankatsu <frips.ryilsufupe+dev@gmail.com>
