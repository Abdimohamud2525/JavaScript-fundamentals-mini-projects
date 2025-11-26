//Counting Population
let raw_arr = [] // original data array
let ans = 0 // final answer

for (var i = 0; i < raw_arr.length; i++) {
  for (var j = 0; j < raw_arr[i].length; j++) {
    if (raw_arr[i][j] !== null) {
      if (raw_arr[i][j]["temp"] <= 10.0) {
        ans += raw_arr[i][j]["population"]
      }
    }
  }
}

console.log(raw_arr)
