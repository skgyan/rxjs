import { Observable } from "rxjs";

const click$ = Observable.create(function subscribe(observer) {
  console.log(observer);
  const listner = ev => observer.next(ev);
  const complete = () => observer.complete();
  // complete();

  document.addEventListener("click", listner);

  return () => {
    complete();
    console.log("unsubscribing...");
    document.removeEventListener("click", listner);
  };
});

const subcription = click$.subscribe({
  next: ev => console.log("clientX -> ", ev.clientX),
  error: () => console.log("error"),
  complete: () => {
    console.log("complete");
  }
});

setTimeout(() => subcription.unsubscribe(), 4000);
