import { combineLatest, of } from "rxjs";

const length$ = of(1, 10); // => takes only 10
const width$ = of(3, 2, 5); // => takes only 5
const height$ = of(2, 3, 4, 5, 6); // => takes all of them why?

const volume$ = combineLatest(
  length$,
  width$,
  height$,
  (length, width, height) => {
    // console.log(length, width, height);
    return length * width * height;
  }
);

volume$.subscribe(function(volume) {
  console.log(volume);
});

// output
// 100
// 150
// 200
// 250
// 300

// here is the answer for this phenomeon - https://staltz.com/primer-on-rxjs-schedulers.html
