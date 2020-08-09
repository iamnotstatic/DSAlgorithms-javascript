/* HashTable **/

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    const newArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        newArray.push(this.data[i][0][0]);
      }
    }

    return newArray;
  }

  values() {
    const newValues = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        newValues.push(this.data[i][0][1]);
      }
    }

    return newValues;
  }
}

myHashTable = new HashTable(50);
myHashTable.set('grapes', 50);
myHashTable.set('apples', 100);
myHashTable.set('oranges', 10);
myHashTable.set('dedos', 100);
myHashTable.set('milk', 150);
myHashTable.values();
