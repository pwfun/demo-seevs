---
sidebar_position: 2
---

# API Reference

This is an example of what API documentation might look like in a docs-as-code system.

## Authentication

All API requests require authentication using an API key in the header:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.example.com/v1/users
```

## Endpoints

### GET /users

Retrieve a list of users.

**Parameters:**

- `limit` (optional) - Number of results to return (default: 10, max: 100)
- `offset` (optional) - Number of results to skip (default: 0)

**Example request:**

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.example.com/v1/users?limit=20&offset=0"
```

**Example response:**

```json
{
  "data": [
    {
      "id": "usr_123",
      "email": "user@example.com",
      "name": "Jane Doe",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "limit": 20,
    "offset": 0,
    "total": 150
  }
}
```

### POST /users

Create a new user.

**Request body:**

```json
{
  "email": "newuser@example.com",
  "name": "John Smith",
  "role": "developer"
}
```

**Example response:**

```json
{
  "id": "usr_456",
  "email": "newuser@example.com",
  "name": "John Smith",
  "role": "developer",
  "created_at": "2024-10-19T14:22:00Z"
}
```

## Error codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Invalid API key |
| 404 | Not Found - Resource doesn't exist |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error |  
| 501 | Not implementtted |

## Rate limiting

API requests are limited to 1000 requests per hour per API key. The current rate limit status is returned in the response headers:

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 995
X-RateLimit-Reset: 1697729400
```

## Cool code sample

To illustrate these principles, here's an amazing code sample:

```javascript
const broken = "missing closing quote
console.log(broken)
```
