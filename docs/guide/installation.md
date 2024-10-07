# Installation

1. Run these commands in an empty directory:
```bash
npm init
npx -p dyapi create
```

2. Start the server:
```bash
npm run start
```

3. It's done! :tada:
4. (If you want to update to the latest version, run `npx -p dyapi update`.)

Now, visit [http://localhost:3000/api/users](http://localhost:3000/api/users) in your browser and you're supposed to see:

```json
{
    "code": 200,
    "data": [],
    "total": 0,
    "pages": 0
}
```

