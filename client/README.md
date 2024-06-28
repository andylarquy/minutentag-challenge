# Coding Challenge - # Let's grab a drink Frontend
This project was built in react native using [Expo](https://expo.dev/).

## How to run

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

3. Make sure you are running the backend (readme can be found inside server folder).

4. Press `w` to open it in a browser or `a`to open it in a connected android device

Web view is recommended to easily be able to connect to the backend, but if you want to run it
in an actual device you can access the .env in the root of this project and update the ```EXPO_PUBLIC_API_URL=http://localhost:3000``` env var to any other LAN url you might be using.

## Bonus
While the assignment only was to create the product detail page I decided to go the extra mile and implement home screen as well using the same approach of refreshing data every 5 seconds.

## Author
Andrés Esteban Suárez
