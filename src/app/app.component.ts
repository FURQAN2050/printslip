import { Component ,OnInit} from '@angular/core';

let obj : AppComponent;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = 'Angular 5 csv file parser example';
  dataList : any[];
  ngOnInit(){
    obj = this;
  }
  
}
