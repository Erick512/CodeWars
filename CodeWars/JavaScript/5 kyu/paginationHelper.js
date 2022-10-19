// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection
    this.itemsPerPage = itemsPerPage

    this.pages = _ => {
        let arr = []

        for(let i = 0; i <= collection.length; i += itemsPerPage){
            arr.push(collection.slice(i, i + itemsPerPage))
        }
        return arr
    }
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  return this.pages()[pageIndex] != undefined ? this.pages()[pageIndex].length : -1
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  let item = this.collection[itemIndex]
  let index
  this.pages().forEach((x, i) => x.forEach(el => {
      if(el === item){

          index = i
        }
  }))
  return index == undefined ? -1 : index
}

// example

var helper = new PaginationHelper([ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 10);

console.log(helper.pageIndex(2))
console.log(helper.pages())
