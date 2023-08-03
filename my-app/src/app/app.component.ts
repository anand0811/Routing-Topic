import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  querprams = '';

  constructor(private route:Router, private actroute:ActivatedRoute) {}

  navi(){
    this.route.navigate(['about'],{queryParams:{jwt:123}})
    
    this.actroute.queryParams.subscribe((data)=>{
      console.log(data);
      this.querprams = data['jwt']
    })
  }

}