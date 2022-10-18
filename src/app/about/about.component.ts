import { Component } from "@angular/core"

    @Component({
    selector:"app-about",
    templateUrl:'./about.component.html',
    styleUrls:['./about.component.css']
})
export class AboutComponent
{
    title='SureshBabu'
    name:string=""
    updatename(event:any){
        this.name=event.target.value;
    }
    isDisable:boolean=false;
    showhide:boolean=true;
}

