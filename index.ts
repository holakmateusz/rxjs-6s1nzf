import './style.css';

import { of, map, Observable, filter, fromEvent, debounceTime } from 'rxjs';
import axios from 'axios';

// Open the console in the bottom right to see results.

// const controller = new AbortController();

// const dataApiObservable = new Observable((subscriber) => {
//   axios
//     .get('https://random-data-api.com/api/name/random_name', {
//       signal: controller.signal,
//     })
//     .then((response) => subscriber.next(response.data.first_name));
//   return () => controller.abort();
// });

// dataApiObservable.subscribe((value) => console.log('1 subscriber: ', value));

// dataApiObservable.subscribe((value) => console.log('2 subscriber: ', value));

// dataApiObservable.subscribe((value) => console.log('3 subscriber: ', value));

// const rxjsButton = document.querySelector('button#rxjs_test_button');
// console.log(rxjsButton.tagName);

// const buttonClickObservable = new Observable<MouseEvent>((subscriber) => {
//   rxjsButton.addEventListener('click', (event) => {
//     subscriber.next(event);
//   });
// });

// buttonClickObservable.subscribe((event) =>
//   console.log('Subscriber 1: ', event.x)
// );

// buttonClickObservable.subscribe((event) =>
//   console.log('Subscriber 2: ', event.x)
// );

interface NewsItem {
  category: 'Business' | 'Sports';
  content: string;
}

// const newsFeed = new Observable<NewsItem>((subscriber) => {
//   setTimeout(
//     () =>
//       subscriber.next({
//         category: 'Business',
//         content: 'A',
//       }),
//     1 * 1000
//   );
//   setTimeout(
//     () =>
//       subscriber.next({
//         category: 'Sports',
//         content: 'B',
//       }),
//     2 * 1000
//   );
//   setTimeout(
//     () =>
//       subscriber.next({
//         category: 'Business',
//         content: 'C',
//       }),
//     3 * 1000
//   );
//   setTimeout(
//     () =>
//       subscriber.next({
//         category: 'Sports',
//         content: 'EE',
//       }),
//     4 * 1000
//   );
//   setTimeout(
//     () =>
//       subscriber.next({
//         category: 'Business',
//         content: 'FF',
//       }),
//     5 * 1000
//   );
// });

// newsFeed
//   .pipe(filter((item) => item.category === 'Sports'))
//   .subscribe((value) => console.log(value));

const sliderInput = document.querySelector('input#volume');
fromEvent(sliderInput, 'input')
  .pipe(
    debounceTime(100),
    map((event) => event.target['value'])
  )
  .subscribe((value) => console.log(value));
