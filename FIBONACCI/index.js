const App = {
  number: [0, 1],
  limit: 10,
  i: 0,
  fibonacci: () => {
    // Recursive function
    if (App.i < App.limit) {
      App.number.push(App.number[App.i] + App.number[App.i + 1]);
      App.i++;
      App.fibonacci();
    } else {
      console.log(App.number);
    }
    // Iterative function
    // for(let i = 2 ; i < App.limit ; i++) {
    //     App.number[i] = App.number[i-1] + App.number[i-2];
    // }
    // return App.number;
  }
}

App.fibonacci();

// console.log(App.fibonacci());