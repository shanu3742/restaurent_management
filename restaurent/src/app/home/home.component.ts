import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{
  intervalSub!:Subscription
  constructor() { }

  ngOnInit() {
    //rxjs obserbable

    // this.intervalSub= interval(1000).subscribe((count) => {
    //   console.log(count)
    //   })

    const customIntervalObservable = Observable.create((observer:Observer<number>) => {
      let count=0;
      setInterval(() => {
        if(count===50){
          observer.complete()
        }
        if(count>56){
          observer.error(new Error('Count is greater 3!'))
        }
             observer.next(count)
             count++
      },1000)

    })


    this.intervalSub= customIntervalObservable.pipe(map((data:number) => data*data),filter((data:number) => data%2===0)).subscribe(
      (data:number) => {
      console.log(data)
    },
    (error:any) =>{
      console.log(error)
      alert(error.message)
    },
    () => {
      console.log('observer is completed')
    }

    )
  }
  ngOnDestroy(): void {
    this.intervalSub.unsubscribe()
  }
}
