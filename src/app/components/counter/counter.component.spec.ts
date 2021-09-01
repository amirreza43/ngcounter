import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('When Create button is clicked a new counter is rendered and added to counters array', ()=>{

    const crtBtn = fixture.nativeElement.querySelector('#createBtn')

    crtBtn.click()

    expect(fixture.componentInstance.counters.length).toEqual(1)
  })

  it('When Counter is created, it should have a value of 0', ()=>{
    const crtBtn = fixture.nativeElement.querySelector('#createBtn')

    crtBtn.click()

    expect(fixture.componentInstance.counters[0].value).toEqual(0)
  })

  it('When Counter\'s value is 0, Decrease button should not work', ()=>{
    const crtBtn = fixture.nativeElement.querySelector('#createBtn')

    crtBtn.click()

    component.decr(fixture.componentInstance.counters[0].value, 0);

    expect(fixture.componentInstance.counters[0].value).toEqual(0)
  })

  it('When Counter\'s value is 0, Increase button should increase the value', ()=>{
    const crtBtn = fixture.nativeElement.querySelector('#createBtn')

    crtBtn.click()

    component.incr(fixture.componentInstance.counters[0], 0);
    component.incr(fixture.componentInstance.counters[0], 0);

    expect(fixture.componentInstance.counters[0].value).toEqual(2)
  })

  it('3 counters creates 1 super counter', ()=>{
    const crtBtn = fixture.nativeElement.querySelector('#createBtn')

    crtBtn.click()
    crtBtn.click()
    crtBtn.click()
    crtBtn.click()

    expect(fixture.componentInstance.superCounter.length).toEqual(1)
  })

  it('The super counter will have a starting value equal to the value of the 3 Counters', ()=>{
    const crtBtn = fixture.nativeElement.querySelector('#createBtn')

    crtBtn.click()
    component.incr(fixture.componentInstance.counters[0], 0);
    component.incr(fixture.componentInstance.counters[0], 0);

    crtBtn.click()
    component.incr(fixture.componentInstance.counters[0], 0);

    crtBtn.click()
    crtBtn.click()

    expect(fixture.componentInstance.superCounter[0].value).toEqual(3)
  })

  it('When super counter\'s value is 0, Decrease button should not work', ()=>{
    const crtBtn = fixture.nativeElement.querySelector('#createBtn')

    crtBtn.click()
    crtBtn.click()
    crtBtn.click()
    crtBtn.click()

    component.decr(fixture.componentInstance.superCounter[0].value, 1);
    console.log(fixture.componentInstance.superCounter[0].value);

    expect(fixture.componentInstance.superCounter[0].value).toEqual(0)
  })

  it('When super counter\'s value is 0, Increase button should increase the value by 3', ()=>{
    const crtBtn = fixture.nativeElement.querySelector('#createBtn')

    crtBtn.click()
    crtBtn.click()
    crtBtn.click()
    crtBtn.click()

    component.incr(fixture.componentInstance.superCounter[0], 1);
    component.incr(fixture.componentInstance.superCounter[0], 1);

    expect(fixture.componentInstance.superCounter[0].value).toEqual(6)
  })

  it('when we have 2 counters and 2 super counter and crate button is clicked, a super duper counter will be added', ()=>{
    const crtBtn = fixture.nativeElement.querySelector('#createBtn')

    //super
    crtBtn.click()
    crtBtn.click()
    crtBtn.click()
    //super
    crtBtn.click()
    crtBtn.click()
    crtBtn.click()
    //counter
    crtBtn.click()
    crtBtn.click()
    //initiates super duper
    crtBtn.click()


    expect(fixture.componentInstance.superDuperCounter.length).toEqual(1)
  })

  it('The super duper counter will have a starting value equal to the value of the 3 super counters', ()=>{
    const crtBtn = fixture.nativeElement.querySelector('#createBtn')

    //super
    crtBtn.click()
    crtBtn.click()
    crtBtn.click()
    component.incr(fixture.componentInstance.superCounter[0], 1)
    component.incr(fixture.componentInstance.superCounter[0], 1)
    component.incr(fixture.componentInstance.superCounter[0], 1)
    //super
    crtBtn.click()
    crtBtn.click()
    crtBtn.click()
    component.incr(fixture.componentInstance.superCounter[0], 1)
    component.incr(fixture.componentInstance.superCounter[0], 1)
    //counter
    crtBtn.click()
    crtBtn.click()
    //initiates super duper
    crtBtn.click()

    expect(fixture.componentInstance.superDuperCounter[0].value).toEqual(15)
  })

  it('a Super Duper Counter with value of 0 When the start button is clicked Then the counter will automatically increment its value by 1 every second', <any>fakeAsync(()=>{
    const crtBtn = fixture.nativeElement.querySelector('#createBtn')

    //super
    crtBtn.click()
    crtBtn.click()
    crtBtn.click()
    //super
    crtBtn.click()
    crtBtn.click()
    crtBtn.click()
    //counter
    crtBtn.click()
    crtBtn.click()
    //initiates super duper
    crtBtn.click()

    component.startTC(fixture.componentInstance.superDuperCounter[0])
    tick(1000)
    expect(fixture.componentInstance.superDuperCounter[0].value).toEqual(1)

  }))


});
