Url shortener Readme
=======

Project Functions:
-----------

1. Creation of short links
2. Redirection of links


Installation:
-----------
```bash
npm run i && npm run start
```

Execution:
-----------

1. Open a browser window and input any url; the app will give you a shortened version.
2. Hit the shortened url and the client/user will be redirected to the original url.

You can also run only the server and use the urlShortener api.


Test:
-----------
```bash
npm run test
```

Extra Resources:
-----------
   - [Postman Collection](https://app.getpostman.com/join-team?invite_code=89b0e34e299c1d94ba1d893935a83cf7&target_code=22b4d82fddaec84ab635d9f6a4d07c83)

   - [App Online](https://short-url-rn.herokuapp.com/)

Future Work:
-----------
1. Cache implementation.
2. Improvement of the client application.
3. Create more comprehensive unit tests. I began to spend too much time figuring out how to mock lowdb on unit tests. Implementing a different db should helpe streamline this process.
