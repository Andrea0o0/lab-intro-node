class SortedList {
  constructor() {
    let list
    this.items = []
    this.length = 0
  }

  add(item) {
    if(this.length==0||this.length<=2||this.length>1){
      this.items.push(item)
      this.items = this.items.sort((a, b) => a - b)
      this.length++
    }
  }

  get(pos) {
    if(this.items[pos]!=undefined){
      return this.items[pos]
    }
    else{
      return error      
    }
  }

  max() {
    if(this.items.length>0){
      return Math.max(...this.items) 
    }
    else{
      return error
    }
  }

  min() {
    if(this.items.length>0){
      return Math.min(...this.items) 
    }
    else{
      return error
    }
  }

  sum() {
    if(this.items.length>0){
      return this.items.reduce(
        (accum, currentV) => accum + currentV) 
    }
    else{
      return 0
    }
  }

  avg() {
    if(this.items.length>0){
      return this.sum()/this.items.length
    }
    else{
      return error
    }
  }
}

module.exports = SortedList;


