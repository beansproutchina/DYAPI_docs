# dyapi.js

The core module of DYAPI2. It contains the core functions of DYAPI2, such as middleware registration, controller registration, and model registration.

## Classes
### Container
The base class for all containers.

There are two builtin containers:
- **JSONContainer** `/dyapi/JsonContainer.dyapi.js`
- **SQLiteContainer** `/dyapi/SQLiteContainer.dyapi.js`

As a developer, you are supposed to only use the constructor of these two containers. Other functions are not supposed to be called directly.

### 