##  Pipeline-Deals

### Dependencies & Technologies

- Ruby 2.5.1
- Rails 6.0.3
- React 16.13.1

### Setup

- Clone this repo

- Install Bundler gems

  ```
  cd pipeline-deals
  gem install bundler
  bundle
  ```

- Install Yarn modules

  ```
  brew install yarn
  yarn
  ```

- Create a .env and set your API_KEY
    ```
    cp .env.example .env
    ```

### Testing

- Back-end: `rspec`
- Front-end: `yarn test`

### Starting

```
foreman start -f Procfile.dev
```

Visit http://localhost:3000/
