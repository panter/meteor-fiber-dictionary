# meteor-fiber-dictionary

a key value store that can be used as singleton, but stores its values per fiber

## Usage

(server only)

```
import {FiberDictionary} from 'meteor/panter:fiber-dictionary'


const myKeyValueStore = new FiberDictionary("mykey");
// myKey is used to distinguish the different dictionarys. If you use the same one twice, they will share the data.
```
