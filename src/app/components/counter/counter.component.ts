import { Component, OnInit } from '@angular/core';
import Counter from '../counter/Counter'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counters: any[] = []
  superCounter: any[] = []
  superDuperCounter: any[] = []
  timeInterval: any;

  constructor() { }

  ngOnInit(): void {
  }

  create(){
    if(this.counters.length >= 3){
      let values = this.counters.splice(0, 3)
      let addedValues: number = 0
      for(let vals of values){
        addedValues += vals.value
      }
      this.counters = []
      this.superCounter.push({ value: addedValues })
    } else if( this.superCounter.length > 2){
      let values = this.superCounter.splice(0, 3)
      let addedValues: number = 0
      for(let vals of values){
        addedValues += vals.value
      }
      this.superCounter = []
      this.superDuperCounter.push({ value: addedValues })

    } else {
      this.counters.push({ value: 0})
    }
  }

  decr(count: any, type: number){
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

  startTC(count: any){
    this.timeInterval = setInterval(()=>{
      count.value += 1
      if(count.value%20 === 0){
        this.create()
      }
    }, 1000)
  }

  stop(){
    clearInterval(this.timeInterval)
  }

}
