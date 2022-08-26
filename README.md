It is a simple example of how to use Next-Auth with [Next.js](https://nextjs.org/) v4.
I have used OAuth and Credentials provider for authentication. I hope you will find it useful. 😄

I will try to add email provider for magicLink authentication.
in the nearest future.

## Getting Started

Manually download the code or clone it from the repository:

```bash
git clone
```

install all the dependencies:

```bash
npm install
```

Open code editor and create .env file with the following content:

```bash
NEXTAUTH_URL="Your domain link"


GOOGLE_CLIENT_ID="Your google client id"
GOOGLE_CLIENT_SECRET="Your google client secret"

MONGO_URI=mongodb:"Your mongo uri"
```

<br />

> if you are using the app for testing/developement you can use <br/><br/>NEXTAUTH_URL=http://localhost:3000 <br/>MONGO_URI=mongodb://localhost:27017/DatabaseName

<br />

> if you are using the app for production you can use <br/><br/>NEXTAUTH_URL=https://yourdomain.com <br/>MONGO_URI=[your cloud DB URI](https://www.mongodb.com/docs/v5.2/reference/connection-string/)

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
