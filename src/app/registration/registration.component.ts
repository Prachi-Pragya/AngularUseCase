import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name:string
  email:string
  password:string
  address:string
  phone:string
  constructor(private postService: PostService ) { }

  ngOnInit(): void {
  }
  onSubmit(value:any){
    console.log(value);
    this.postService.PostValue(value);
  }

}
