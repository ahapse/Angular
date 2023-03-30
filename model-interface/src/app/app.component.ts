import { Component } from '@angular/core';

interface dataType{
  name:string,
  id:number,
  indian:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'model-interface';
  getData(){
    const data : dataType = {
      name:'AVD',
      id:100,
      indian:true
    };
    return data;
  }
}
