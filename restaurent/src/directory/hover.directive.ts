import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector:'[app-hover]'
})

export class AppHover {
    @Input('app-hover') textColor:{color:string,hoverColor:string}={color:'inherit',hoverColor:"orange"}
    // @Input()  color ='inherit'
    @HostBinding('style.color') background :string='inherit';
    @HostListener('mouseenter') mouseMove(){
        this.background=this.textColor.hoverColor;
    }
    @HostListener('mouseout') mouseOut(){
        this.background=this.textColor.color
    }

    ngOnInit(){
        // this.background='orange'
        this.background=this.textColor.color
        console.log(this.background)
    }

}