require('dotenv').config();


admin = db.getSiblingDB('admin');

admin.createUser({
  user: process.ENV.MONGO_USER_ADMIN,
  pwd: process.ENV.MONGO_PASS_ADMIN,
  roles: [
    { role: 'userAdmin', db: 'admin' }
  ]
});

db.getSiblingDB().auth('xyz', 'passwordHere');

db.getSiblingDB('admin').createUser({
  user: process.ENV.MONGO_REPLICA_ADMIN,
  pwd: process.ENV.MONGO_PASS_REPLICA,
  roles: [
    { role: 'clusterAdmin', db: 'admin' }
  ]
}).
