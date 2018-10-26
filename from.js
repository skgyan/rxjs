import { fromEvent } from "rxjs";

const click$ = fromEvent(document, "click");

const subscription = click$.subscribe(ev => console.log(ev.clientX));

setTimeout(() => subscription.unsubscribe(), 4000);
