import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.html.scss']
})

export class CalculatorComponent implements OnInit {



  constructor() { }

  ngOnInit() { }

  quicksort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let smallest = arr[i];
      if (isNaN(smallest)) {
        arr[i] = 'ø';
        continue;
      }
      for (let j = i + 1; j < arr.length; j++) {
        const compareTo = arr[j];
        if (compareTo < smallest) {
          smallest = compareTo;
        } else {
          console.log(smallest + ' is now smaller than ' + compareTo)
        }
      }
      const temp = arr[smallest];
      arr[smallest] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
}
