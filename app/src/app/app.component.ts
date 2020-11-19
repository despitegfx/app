import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //@ViewChild ('f') loginForm: NgForm;

  // hey: string = "https://trade-client-connectivity.herokuapp.com/clients/all";

  constructor( private http: HttpClient ) { 
  //   this.http.get(this.hey).toPromise().then(data => {console.log(data);});
  // }

  this.http.get( 'https://trade-client-connectivity.herokuapp.com/clients/all').subscribe(responseData =>{
  console.log(responseData);
  });

}
