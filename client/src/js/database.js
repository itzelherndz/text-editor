import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Logic to a method that accepts some content and adds it to the database
export const putDb = async ( content) => {
  console.log('PUT to the database');
  const textDb = await openDB('jate',1);
  const tx = textDb.transaction('jate','readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({text: content});
  const result = await request;
  console.log('Data saved to the database', result);
};

// Logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the database');
  const textDb = await openDB('jate',1);
  const tx = textDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('Result: ', result);
  console.log('Last Entry:',result[result.length-1].text);
  return result[result.length-1].text;
};

initdb();
