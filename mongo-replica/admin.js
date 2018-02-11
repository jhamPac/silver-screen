const ENV = require('./env.json');


admin = db.getSiblingDB('admin');

admin.createUser({
  user: ENV.MONGO_USER_ADMIN,
  pwd: ENV.MONGO_PASS_ADMIN,
  roles: [
    { role: 'userAdmin', db: 'admin' }
  ]
});

db.getSiblingDB().auth('xyz', 'passwordHere');

db.getSiblingDB('admin').createUser({
  user: ENV.MONGO_REPLICA_ADMIN,
  pwd: ENV.MONGO_PASS_REPLICA,
  roles: [
    { role: 'clusterAdmin', db: 'admin' }
  ]
}).
