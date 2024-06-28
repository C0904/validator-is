## Descrition
**validator-is: Simplify Your Validation and Swagger Documentation**

validator-is is a powerful Javascript/TypeScript library that bridges the gap between class-validator and Swagger documentation. It provides a set of decorators that simultaneously validate your data using class-validator and generate corresponding Swagger/OpenAPI documentation.

Key Features:
- Single decorator for both validation and API documentation
- Seamless integration with class-validator and Swagger/OpenAPI
- Type-safe and easy to use with TypeScript
- Reduces code duplication and improves maintainability
- Customizable validation rules and Swagger properties
- Supports nested objects and complex data structures

Whether you're building a REST API or a full-stack application, validator-is simplifies your development process by unifying data validation and API documentation in one step. Say goodbye to inconsistencies between your validation logic and API specs, and hello to a more efficient, error-free development experience.

Compatible with NestJS Frameworks. MIT Licensed.

## Installation
```bash
$ npm install validator-is
```

## Using Example
```typescript
import { Is } from 'validator-is';

export class CreateUserDto {
  // Type: number, Required: true, Description: User ID
  @Is('number', true, 'User ID')
  userId: number;

  // Type: string, Required: false, Description: User Nickname
  @Is('string', false, 'User Nickname')
  nickname: string;
}
```
### swagger
<img width="1290" alt="image" src="https://github.com/C0904/validator-is/assets/154719919/377e6f13-a7d5-4067-8845-8b4ee09f4976">
<img width="287" alt="image" src="https://github.com/C0904/validator-is/assets/154719919/5342f225-4dd1-4113-9850-38d3e63a2eaa">

### class-validator
**Request**
```bash
curl -X 'POST' \
  'http://localhost:3003/api/v1/user' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "nickname": "string"
}'
```
**Response**
```json
{
  "statusCode": 400,
  "message": [
    "userId should not be empty",
    "userId must be a number conforming to the specified constraints"
  ],
  "error": "Bad Request"
}
```

