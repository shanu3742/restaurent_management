import {Directive, Input,TemplateRef,ViewContainerRef} from "@angular/core";
@Directive({
selector:'[appIf]'
})
export class CustomIf{

private show =false;

@Input('appIf') set  onCondition(condition:boolean){
    this.show=condition;
    /**
     * FIRST CLEAR the existing  element
     */
    this.vcr.clear()
    /**
     * check and update 
     */
     this.displayElement()
}
@Input() appElseIf?:TemplateRef<unknown>;

constructor(private templateRef:TemplateRef<unknown>, private vcr: ViewContainerRef){

}

ngOnInit(){
      /**
     * FIRST CLEAR the existing  element
     */
      this.vcr.clear()
      /**
       * check and update 
       */
     this.displayElement()
}
displayElement(){
    console.log('templateRef',this.templateRef)
    console.log('else if ',this.appElseIf)
    if(this.show){
        this.vcr.createEmbeddedView(this.templateRef)
    }else if(this.appElseIf){
        console.log('else if ',this.appElseIf)

        this.vcr.createEmbeddedView(this.appElseIf as any)
    }
}


}