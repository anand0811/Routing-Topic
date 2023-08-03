import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit{

  id = 0;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {

     console.log(this.route.snapshot.params);

     this.route.params.subscribe((res)=>{
       console.log(res); 
       this.id = res['id'];
     }) 

  }

}
