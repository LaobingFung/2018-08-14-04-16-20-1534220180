module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.counts()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    this.arr = input.sort();
  }

  minimum() {
    // Write your code here
    return this.arr[0];
  }

  // Write your code here
  maximum() {
    return this.arr[this.counts() - 1];
  }

  counts() {
    return this.arr.length;
  }

  average() {
    var sum=0;
    var ave
    for(var i=0;i<this.counts();i++){
      sum += this.arr[i];
    }
    ave = sum/this.counts();
    ave = ave.toFixed(2);
    return ave;
  }
}
