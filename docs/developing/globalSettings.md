# Global Settings

The global settings file is `config/settings.js`. It contains global settings of a project.

```js
import crypto from "crypto";
const passwordHash=(password)=>{
    return crypto.createHash("md5").update(password+"ywy521").digest("hex");
}
export default{
    // API前缀
    urlPrefix:"api",
    // 服务器端口
    port: 3000,
    // 保存数据的间隔时间
    saveInterval: 60 * 1000,
    // web接口最大单次数据查询量
    maxLimit: 100,
    // web接口是否允许批量更新
    multiUpdate : 0,
    // web接口是否允许批量删除
    multiDelete : 0,
    // JWT过期时间
    jwtExpire: 1000 * 60 * 60 * 24,
    // JWT密钥
    jwtSecret: "nihao",
    // 是否将JWT放在cookie token中，否则放在header的X-DYAPI-Token中
    cookieLogin: true,
    // 密码哈希函数
    passwordHash,
    // 默认用户Model权限
    defaultModelPermission: "C,R,U,D,",
    // 默认用户Field权限
    defaultFieldPermission: "r,w,p,",
    // ObjectID生成时的设备ID。需要以很多0结尾。
    deviceId: "abc1230000000000",
    // Cron的时区
    cronTimezone: "Asia/Shanghai",
};
```
| key | type  | description |
| --- | ---  | --- |
| `urlPrefix` | string | The prefix of all the API routes. |
| `port` | number | The port of the server. |
| `saveInterval` | number | The interval of saving JSON data to the database. |
| `maxLimit` | number | The maximum number of records that can be returned in a single request. |
| `multiUpdate` | boolean | Whether to allow multiple updates in a single request. |
| `multiDelete` | boolean | Whether to allow multiple deletions in a single request. |
| `jwtExpire` | number | The expiration time of the JWT token, in milliseconds. |
| `jwtSecret` | string | The secret key used to sign the JWT token. |
| `cookieLogin` | boolean  | True to login according to the cookie. False to login according to the token in the request header. |
| `passwordHash` | function  | The function to hash the password. |
| `defaultModelPermission` | string | The default permission for the model. See [Permissions and Roles](../guide/authentication.html#permissions-and-roles) |
| `defaultFieldPermission` | string | The default permission for the field. See [Permissions and Roles](../guide/authentication.html#permissions-and-roles)|
| `deviceId` | string | The device id, used for generating ObjectId. It has to be 16 chars in length and end with many 0s. |
| `cronTimezone` | string | The timezone for cron jobs. See [Time Zone Database](https://www.iana.org/time-zones)|

