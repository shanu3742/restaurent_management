import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoServiceComponent } from './demo/demo.service.component';
import { DemoActiveComponent } from './component/demo-active/demo.active.component';
import { DemoInActiveComponent } from './component/demo-inactive/demo-inactive.component';



@NgModule({
  declarations: [DemoServiceComponent,DemoActiveComponent,DemoInActiveComponent],
  imports: [
    CommonModule
  ],
  exports:[DemoServiceComponent,DemoActiveComponent,DemoInActiveComponent]
  
})
export class DemoServiceModule { }
