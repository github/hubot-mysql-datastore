# hubot-mysql-datastore

This module provides an implementation of [Hubot](https://hubot.github.com)'s datastore backed by MySQL. Hubot's datastore provides a persistent, database-backed key-value store; for more information, see [Hubot's documentation](https://hubot.github.com/docs/).

## Installation

1. Add `hubot-mysql-datastore` to your Hubot's `package.json`.
2. Create a database; the required structure can be found in [the sample SQL schema](db/structure.sql).
3. Create a script, loaded early in Hubot's startup, which initializes this class and assigns it to `robot.datastore`. For example, your `scripts/0-mysql-datastore.js` might look like this:

```js
const MysqlDataStore = require('hubot-mysql-datastore')

module.exports = (robot) => {
  let host = process.env.HUBOT_DATASTORE_HOST;
  let user = process.env.HUBOT_DATASTORE_USER;
  let password = process.env.HUBOT_DATASTORE_PASSWORD;
  let database = process.env.HUBOT_DATASTORE_DATABASE;
  let port = process.env.HUBOT_DATASTORE_PORT; // optional

  robot.datastore = new MysqlDataStore(host, user, password, database, "utf8mb4", port);
}
```

## Support

If you need any help with this package, please [open an issue](https://github.com/github/hubot-mysql-datastore/issues/new) and provide as much relevant information as you can.

## Maintainer

`hubot-mysql-datastore`'s primary author is [@mistydemeo](https://github.com/mistydemeo).
