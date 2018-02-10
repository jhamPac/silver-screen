admin = db.getSiblingDB('admin');

admin.createUser({
  user: 'xyz',
  pwd: 'xxxxxxxx',
  roles: [
    { role: 'userAdmin', db: 'admin' }
  ]
});

db.getSiblingDB().auth('xyz', 'passwordHere');

db.getSiblingDB('admin').createUser({
  user: 'replicaAdmin',
  pwd: 'xxxxxxx',
  roles: [
    { role: 'clusterAdmin', db: 'admin' }
  ]
}).
