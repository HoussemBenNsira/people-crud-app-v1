import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  name = "Houssem Ben Nsira";
  imageUrl = "assets/images/logo.png";
  hello (myname:string){
    alert('WELCOME '+myname);
  }


  constructor() { }
  ngOnInit(): void {
  }

}