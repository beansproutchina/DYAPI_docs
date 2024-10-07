# Model HTTP API

The HTTP API is the main interface for interacting with your data. It is designed to be simple and easy to use. It is also designed to be secure, so you can trust that your data is safe.

Once you have created your model, you can access it through the HTTP API, by at least 5 methods:  `POST`, `GET` (single item or item list), `PUT`, `DELETE`，which is also referred to as CRUD operations.

You should authenticate your requests with a valid JWT token first (see [Authentication](./authentication.md), or the request is defaulted to be `PUBLIC` role.

## Global Query Parameters

The following parameters are available for most of methods, except `POST`, mainly for filtering items:

| Parameter | Type | Description |
| --- | --- | --- |
| `id` | `number` | The ID of the item |
| `filter` | `object` | The [filter](./HTTPApi.html#filtering) object. Bypassed if `id` is provided |
| `orderBy` | `string` | The field to sort by |
| `orderDesc` | `bool` | Whether to sort in descending order |
| `limit` | `number` | The maximum number of items to return. Defaults to and cannot exceed 100, which is set in [Global Settings](../developing/globalSettings.md) |
| `offset` | `number` | The number of items to skip before returning results |
| `page` | `number` | The 0-based page number to return. |

### Filtering
DYAPI provides a useful filtering system that allows you to filter items by any field.

This is an example:

```json
{
    "$and": {
        "id": {
            "$contains": "92"
        },
        "content": {
            "$and": {
                "$start": "你",
                "$end": "23"
            }
        }
    }
}

```

#### Logical Operators

In the outermost layer, you can use `$and`, `$or`, `$not` nested to combine multiple conditions. If you want many `$and`s (`$or`s) in the same layer, add number to the end of `$and`, like `$and1`,`$and2`.

| Operator | Description |
|----------|-------------|
| $and     | Logical AND. It returns true only if all the conditions are true. |
| $or      | Logical OR. It returns true if any of the conditions is true.  |
| $not     | Logical NOT. It returns true if the condition is false and vice versa. |

The values of `$and`, `$or`, and `$not` keys are also objects. 


#### Comparison Operators

If the key is a field name, the value can be an object containing the Comparison operators, which will be applied to the field value:

| Operator | Description |
| :--- | :--- |
| $eq  | Equal to |
| $ne  | Not equal to |
| $gt  | Greater than |
| $gte | Greater than or equal to |
| $lt  | Less than |
| $lte | Less than or equal to |
| $in  | Whether the value is in the array |
| $nin | Whether the value is not in the array |
| $start | Whether the value starts with the given string |
| $end | Whether the value ends with the given string |
| $contains | Whether the value contains the given string | 
| $regex | Whether the value matches the given regular expression |

The value can also be a simple value, which will be compared with the field value using `$eq` or `$regex`.



## Creating an Item

::: tip
Creating an item requires current role having `C` permission on the model.
:::

`POST /api/<model>`
**Request Body**
```json
{
    "field": "value"
}
```

**Response**
```json
//Success
{
    "code": 200,
    "id": 114514,//The id of the created item. Might be string typed ObjectID or int.
}
//Failed
{
    "code": 500,
}
```

## Reading an Item or Items

::: tip
Reading an item (**Read One**) requires current role having `RO` or `R` permission on the model.

Reading items (**Read List**) requires current role having `RL` or `R` permission on the model.

For each field, it also requires current role having `r` permission on the field.
:::

### Read One

`GET /api/<model>/<id>`

**Query Parameters**:
- `fields`: fields to return
- `pop`: fields to populate. Which means we will find the related object whose id is the field value in the model named in the field. The result will be presented as the `<field>_pop` property in the result object. *Needs `p` permission on the field*
- [Global Query Parameters](./HTTPApi.html#global-query-parameters).

**Response**:
```json
{
    "code": 200,
    "data": {} // result item
}
```

### Read List
`GET /api/<model>`
**Query Parameters**:
- `fields`: fields to return
- `pop`: fields to populate. Which means we will find the related object whose id is the field value in the model named in the field. The result will be presented as the `<field>_pop` property in the result object. *Needs `p` permission on the field*
- [Global Query Parameters](./HTTPApi.html#global-query-parameters).

**Response**:
```json
{
    "code": 200,
    "data": [], // list of items
    "total": 21, // total number of items in the **Model**
    "pages": 1, // total number of pages
}
```

## Updating Items
:::tip
Updating items requires current role having `U` permission on the model.
For each field, current role must have `w` permission on the field.

If `multiUpdate` in [Global Settings](../developing/globalSettings.md) is `false` (false by default), You can only select an item using `id` to ensure only one item is updated.  
:::

`PUT /api/<model>/<id>`

`PUT /api/<model>`

**Query Parameters**:
- [Global Query Parameters](./HTTPApi.html#global-query-parameters).

**Response**:
```json
{
    "code": 200,
    "length": 1, // number of updated items
}
```

## Deleting Items
:::tip
Updating items requires current role having `U` permission on the model.

If `multiDelete` in [Global Settings](../developing/globalSettings.md) is `false` (false by default), You can only select an item using `id` to ensure only one item is deleted.  
:::

`DELETE /api/<model>`
`DELETE /api/<model>/<id>`


**Query Parameters**:
- [Global Query Parameters](./HTTPApi.html#global-query-parameters).

**Response**:
```json
{
    "code": 200, // No matter what, the code is always 200.
}
```


