const DataStore = require('hubot/es2015').DataStore;
const mysql = require('promise-mysql');

let json_typecast = function(field, next) {
  if (field.type == 'JSON') {
    return (JSON.parse(field.string())); 
  }
  return next();
}

class MysqlDataStore extends DataStore {
  constructor (host, user, password, database, charset) {
    super();
    this.pool = mysql.createPool({
      connectionLimit: 2,
      host: host,
      user: user,
      password: password,
      database: database,
      charset: charset,
    });
  }

  _get (key, table) {
    return this.pool.query({
      sql: `SELECT value FROM \`${table}\` WHERE \`key\` = ?`,
      values: [key],
      typeCast: json_typecast
    }).then((rows) => {
      if (rows.length > 0) {
        return rows[0].value;
      }
    });
  }

  _set (key, value, table) {
    let serialized = JSON.stringify(value);
    return this.pool.query(`INSERT INTO \`${table}\` (\`key\`, \`value\`) VALUES (?, ?) ON DUPLICATE KEY UPDATE \`value\` = ?`, [key, serialized, serialized]);
  }
}

exports = MysqlDataStore
