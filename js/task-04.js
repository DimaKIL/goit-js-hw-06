const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector("#value"),
  };
  
  const counter = {
    value: 0,
    decrement() {
      this.value -= 1;
    },
    increment() {
      this.value += 1;
    },
  };
  refs.decrementBtn.addEventListener("click", function () {
    counter.decrement();
    refs.value.textContent = counter.value;
  });
  
  refs.incrementBtn.addEventListener("click", function () {
    counter.increment();
    refs.value.textContent = counter.value;
  });

