import { observable, action, makeObservable } from "mobx";

class Store {
  constructor() {
    makeObservable(this);
  };

  @observable
  oldData

  @observable
  data

  @action
  updateData = () => {
    let array = []
    fetch('https://poloniex.com/public?command=returnTicker')
      .then(response => response.json())
      .then(data => {
        if(data.error){
          this.setError(data.error);
        }
        else{
          Object.keys(data).map(key => {
            array.push({id: data[key].id, name: key, lastBid: data[key].last, highestBid: data[key].highestBid, percentChange: data[key].percentChange})
          });
          this.setData(array);
        };
      })
      .catch((e) => {
        this.setError(e);
      });
  };

  @action
  setData = (data) => {
    typeof(this.oldData) === 'undefined' ? this.oldData = data : this.oldData = this.data;
    this.data = data;
    this.error = false;
  };

  @observable
  error = false

  @action
  setError = (e) => {
    console.log(e);
    this.error = true;
    !this.data ? this.data = [] : this.data = this.data;
  };
};

export default new Store();