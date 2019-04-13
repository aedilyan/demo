import './site.css'
//import './reactElem';
import util from './utils';
import {
    getUsers
} from './api/userApi';


console.log(`value from utils is: ${util.value}`);

getUsers().then(result => {
    let node = '';

    result.forEach(user => {
        node += `<div>Id: ${user.id}</div>`
    });

    global.document.getElementById('users_node').innerHTML = node;
})