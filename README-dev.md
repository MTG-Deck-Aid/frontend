## Getting Started

1. Create the ./mystic_tuner_frontend/.env file. The file should contain:

   ```env
   AUTH0_SECRET=''
   APP_BASE_URL='http://localhost:3000'
   AUTH0_DOMAIN=''
   AUTH0_CLIENT_ID=''
   AUTH0_CLIENT_SECRET=''
   ```

2. Run the development server from the mystic_tuner_frontend directory:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Project Structure

As per guidelines from the next.js documentation, we will follow the following structure conventions:

```plaintext
|mystic_tuner_frontend
|
|---public (static assets to be served)
| | exampleImage.png
|
|---src (application source folder)
| |
| |---app (app router)
| | |
| | |---examplePage (page router)
| | | layout.js (shared layout)
| | | template.js
| | | error.js (React error boundary)
| | | loading.js (React suspense boundary)
| | | not-found.js (React error boundary)
| | | page.js (Actual page code)
| | | route.js (Used for API endpoints)
| | (Note that not all of these are need. It only requires page.js)
| |
| |---components (components to be used in pages)
| | | exampleButton.js

```
