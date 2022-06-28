import Dexie from "dexie";

export const db = new Dexie('foo');
db.version(1).stores({
  contrats: 'id, nom'
});

db.on('populate', ()=>{
  db.contrats.bulkAdd([{
    id: 1,
    nom: "Josephine"
  },{
    id: 2,
    nom: "Per"
  }]);
})