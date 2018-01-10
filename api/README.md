# Art Portfolio API Spec

### Authentication Header:

`Authorization: Token jwt.token.here`


## JSON Objects returned by API:

### Users (for authentication)

```JSON
{
  "user": {
    "username": "artist",
    "token": "jwt.token.here"
  }
}
```

### Single Collection

```JSON
{
  "collection": {
    "slug": "the-sea-of-palaces",
    "title": "The Sea of Palaces",
    "createdAt": "2017-08-14T00:10:59.720Z",
    "updatedAt": "2017-08-14T00:10:59.720Z"
  }
}
```

### Single Unit

```JSON
{
  "unit": {
    "pos": "a0",
    "image": "image.link",
    "text": "Philosophy",
    "createdAt": "2017-08-13T18:40:39.425Z",
    "updatedAt": "2017-08-13T18:40:39.425Z"
  }
}
```

### Multiple Units

```JSON
{
  "units": [{
    "pos": "a0",
    "image": "image.link",
    "text": "Philosophy",
    "createdAt": "2017-08-13T18:40:39.425Z",
    "updatedAt": "2017-08-13T18:40:39.425Z"
  }, {
    "pos": "a1",
    "image": "image.link",
    "text": "Hope and Fear",
    "createdAt": "2017-08-14T08:49:12.255Z",
    "updatedAt": "2017-08-14T08:49:12.255Z"
  }],
  "unitsCount": 2
}
```

### Errors and Status Codes

If a request fails any validations, expect a 422 and errors in the following format:

```JSON
{
  "errors":{
    "body": [
      "can't be empty"
    ]
  }
}
```

#### Other status codes:

401 for Unauthorized requests, when a request requires authentication but it isn't provided

404 for Not found requests, when a resource can't be found to fulfill the request


## Endpoints (with browser):

### Get Units from Collection

`GET /api/collections/:slug/units`

Authentication optional, returns [multiple Units](#multiple-units)

### Retrieve Collection

`GET /api/collections/:slug`

Authentication optional, returns [single Collection](#single-collection)


## Endpoints (with postman):

### Authentication (Admin.):

`POST /api/users/login`

Example request body:
```JSON
{
  "user":{
    "username": "artist",
    "password": "password"
  }
}
```

No authentication required, returns a [User](#users-for-authentication)

Required fields: `username`, `password`

### Registration (Admin.):

`POST /api/users`

Example request body:
```JSON
{
  "user":{
    "username": "artist",
    "password": "password"
  }
}
```

No authentication required, returns a [User](#users-for-authentication)

Required fields: `username`, `password`

### Get Current User (Admin.)

`GET /api/user`

Authentication required, returns a [User](#users-for-authentication) that's the current user

### Update User (Admin.)

`PUT /api/user`

Example request body:
```JSON
{
  "user":{
    "password": "newPassword"
  }
}
```

Authentication required, returns the [User](#users-for-authentication)

Optional field: `password`

### Create Collection

`POST /api/collections`

Example request body:

```JSON
{
  "collection": {
    "title": "The Sea of Palaces"
  }
}
```

Authentication required, returns the [Collection](#single-collection)

Required field: `title`

### Update Collection

`PUT /api/collections/:slug`

Example request body:

```JSON
{
  "collection": {
    "title": "Linkage"
  }
}
```

Authentication required, returns the updated [Collection](#single-collection)

Optional field: `title`

### Delete Collection

`DELETE /api/collections/:slug`

Authentication required, returns `{}`

### Add Unit to Collection

`POST /api/collections/:slug/units`

Example request body:

```JSON
{
  "unit": {
    "pos": "a0",
    "image": "image.link",
    "text": "Yo!"
  }
}
```

Authentication required, returns the [Unit](#single-unit)

Required fields: `pos`, `image`, `text`

### Update Unit

`PUT /api/collections/:slug/units/:id`

Example request body:

```JSON
{
  "unit": {
    "image": "new.image.link"
  }
}
```

Authentication required, returns the updated [Unit](#single-unit)

Optional fields: `pos`, `image`, `text`

### Delete Unit

`DELETE /api/collections/:slug/units/:id`

Authentication required, returns `{}`
