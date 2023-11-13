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
    if(this.show){
        this.vcr.createEmbeddedView(this.templateRef)
    }
}


}