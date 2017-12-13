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

### Single Project

```JSON
{
  "project": {
    "slug": "the-sea-of-palaces",
    "title": "The Sea of Palaces",
    "createdAt": "2017-08-14T00:10:59.720Z",
    "updatedAt": "2017-08-14T00:10:59.720Z"
  }
}
```

### Multiple Projects

```JSON
{
  "projects":[{
    "slug": "the-sea-of-palaces",
    "title": "The Sea of Palaces",
    "createdAt": "2017-08-14T00:10:59.720Z",
    "updatedAt": "2017-08-14T00:10:59.720Z"
  }, {
    "slug": "connect-points",
    "title": "Connect Points",
    "createdAt": "2017-08-13T18:24:36.162Z",
    "updatedAt": "2017-08-13T18:24:36.162Z"
  }],
  "projectsCount": 2
}
```

### Single Unit

```JSON
{
  "unit": {
    "id": 1,
    "Image": "image.link",
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
    "id": 1,
    "image": "image.link",
    "text": "Philosophy",
    "createdAt": "2017-08-13T18:40:39.425Z",
    "updatedAt": "2017-08-13T18:40:39.425Z"
  }, {
    "id": 2,
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

403 for Forbidden requests, when a request may be valid but the user doesn't have permissions to perform the action

404 for Not found requests, when a resource can't be found to fulfill the request


## Endpoints:

### Authentication:

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

### Get Current User

`GET /api/user`

Authentication required, returns a [User](#users-for-authentication) that's the current user

### Update User

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

Optional fields: `password`

### List Projects

`GET /api/projects`

Query Parameters:

Filter by `category`:

`?category=craft`

Limit number of projects (default is 10):

`?limit=10`

Offset number of projects (default is 0):

`?offset=0`

Authentication optional, returns [multiple projects](#multiple-projects), ordered by most recent first

### Retrieve Project

`GET /api/projects/:slug`

Authentication optional, returns [single Project](#single-project)
 
### Create Project

`POST /api/projects`

Example request body:

```JSON
{
  "project": {
    "category": "craft",
    "title": "The Sea of Palaces"
  }
}
```

Authentication required, returns the [Project](#single-project)

Required fields: `category`, `title`

### Update Project

`PUT /api/projects/:slug`

Example request body:

```JSON
{
  "project": {
    "title": "Linkage"
  }
}
```

Authentication required, returns the updated [Project](#single-project)

Optional fields: `category`, `title`

### Delete Project

`DELETE /api/projects/:slug`

Authentication required, returns `{}`

### Get Units from a Project

`GET /api/projects/:slug/units`

Authentication optional, returns [multiple Units](#multiple-units)

### Add Unit to a Project

`POST /api/projects/:slug/units`

Example request body:

```JSON
{
  "unit": {
    "image": "image.link",
    "text": "Yo!"
  }
}
```

Authentication required, returns the [Unit](#single-unit)

Required fields: `image`, `text`

### Update Unit

`PUT /api/projects/:slug/units/:id`

Example request body:

```JSON
{
  "unit": {
    "image": "new.image.link"
  }
}
```

Authentication required, returns the updated [Unit](#single-unit)

Optional fields: `image`, `text`

### Delete Unit

`DELETE /api/projects/:slug/units/:id`

Authentication required, returns `{}`
