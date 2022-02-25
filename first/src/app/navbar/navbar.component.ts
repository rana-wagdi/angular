import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  name : string = "Rana";
  
  isAdmin: boolean = false;
  userNames : Array<string> = [
  
  "Ahmed", "Karim", "Rana"]
  
  grade : number = 4;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
