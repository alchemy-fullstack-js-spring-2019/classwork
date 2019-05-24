export class Store {
  constructor(reducer) {
    this.reducer = reducer;
    this.state = this.reducer(undefined, {
      type: '@@INIT'
    });

    this.subscribers = [];
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(this.getState(), action);
    this.subscribers.forEach(fn => fn());
    return action;
  }

  subscribe(fn) {
    this.subscribers.push(fn);

    return () => {
      const index = this.subscribers.indexOf(fn);
      this.subscribers.splice(index, 1);
    };
  }

}

export function createStore(reducer) {
  return new Store(reducer);
}
