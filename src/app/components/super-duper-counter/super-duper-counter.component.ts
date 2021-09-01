import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-super-duper-counter',
  templateUrl: './super-duper-counter.component.html',
  styleUrls: ['./super-duper-counter.component.css']
})
export class SuperDuperCounterComponent implements OnInit {
  @Input() superDC: any
  @Input() create: () => {}
  // @Output() create: EventEmitter<any> = new EventEmitter()
  timeInterval: any;

  constructor() { }


  ngOnInit(): void {
  }

  startTC(count: any){
    if(this.timeInterval){
      return
    }
    this.timeInterval = setInterval(()=>{
      count.value += 1
      if(count.value%20 === 0){
        this.create()
      }
    }, 1000)
  }

  stop(){
    clearInterval(this.timeInterval)
    this.timeInterval= '';
  }

}
