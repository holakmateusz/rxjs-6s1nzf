import './style.css';

import { of, map, Observable } from 'rxjs';
import axios from 'axios';

// Open the console in the bottom right to see results.

const controller = new AbortController();

const dataApiObservable = new Observable((subscriber) => {
  axios
    .get('https://random-data-api.com/api/name/random_name', {
      signal: controller.signal,
    })
    .then((response) => subscriber.next(response.data.first_name));
  return () => controller.abort();
});

dataApiObservable.subscribe((value) => console.log('1 subscriber: ', value));

dataApiObservable.subscribe((value) => console.log('2 subscriber: ', value));

dataApiObservable.subscribe((value) => console.log('3 subscriber: ', value));

const rxjsButton = document.querySelector('button#rxjs_test_button');
console.log(rxjsButton.tagName);

const buttonClickObservable = new Observable<MouseEvent>((subscriber) => {
  rxjsButton.addEventListener('click', (event) => {
    subscriber.next(event);
  });
});

buttonClickObservable.subscribe((event) =>
  console.log('Subscriber 1: ', event.x)
);

buttonClickObservable.subscribe((event) =>
  console.log('Subscriber 2: ', event.x)
);
