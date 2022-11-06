import './style.css';

import { of, map, Observable } from 'rxjs';
import axios from 'axios';

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

// Open the console in the bottom right to see results.




const dataApiObservable = new Observable((subscriber=>{
  axios.get('https://random-data-api.com/api/name/random_name').then((response)=>subscriber.next(response.data.first_name))
}));

dataApiObservable.subscribe((value)=>console.log("1 subscriber: ",value))

dataApiObservable.subscribe((value)=>console.log("2 subscriber: ",value))

dataApiObservable.subscribe((value)=>console.log("3 subscriber: ",value))