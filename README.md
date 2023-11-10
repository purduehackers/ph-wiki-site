# Purdue Hackers Wiki

We now have our own wiki page! It is a project built with NextJS and MongoDB. A more detailed description on the tech stack can be found in this post (link <- which is hosted in the wiki website how cool is that 👀)

## API Reference (tmp)

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Env

You will need the following variables to run this project locally. Please reach out to Willy (lien2@purdue.edu) if you are interested in contributing to this project.

```.env
MONGODB_URI=[replace with MongoDB URL]
DB_NAME=wiki
APP_URI='http://localhost:3000'
```
