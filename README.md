# A Node Blog

A dynamic web app which remembers all the writes you ever wrote that hardly has been hiding down in your diaries right in the upper drawer of you bed.

### Dependencies

- Node.js
- Express.js
- Nunjucks
- Mongoose (for mongodb connectivity)

### Setup Guide

Forget all of the above dependencies and just do a:

```sh
npm install
node app
```

Then,
Open up your browser and head over to: http://127.0.0.1:3300/

This is all that is required to host an own blog server.

P.S: Don't forget to add in your MongoDB credentials inside DB_URI variable in the .env (you will need to rename .env.sample to .env)
