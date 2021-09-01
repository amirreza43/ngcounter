import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {

  @Input() superC: any;
  @Input() text: any;

  constructor() { }

  ngOnInit(): void {
  }

  decr(count: any, type: number){
    console.log('Super counter decr was called');

    if(type === 0){
      if(count.value > 0){
        count.value -= 1
      }
    } else if (type === 1) {
      if(count.value >= 3){
        count.value -= 3
      }
    }

  }

  incr(count: any, type: number){
    if(type === 0){
        count.value += 1
    } else if (type === 1) {
        count.value += 3
    }
  }

}
