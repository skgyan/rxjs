import { combineLatest, of } from "rxjs";

const length$ = of(5);
const width$ = of(3);
const height$ = of(2, 3);

const volume$ = combineLatest(
  length$,
  width$,
  height$,
  (length, width, height) => length * width * height
);

volume$.subscribe(function(volume) {
  console.log(volume);
});
