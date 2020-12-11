import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: any = {};
  constructor(private router: Router) { }
  username:String;
  password:string;
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.model.email === "admin123@gmail.com" && this.model.password === "Admin@123") {
      this.router.navigateByUrl('/AdminLogin');
    } 
    else {
      alert('Invalid Credentials')
    }
  }
}
