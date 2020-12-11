import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Book } from "../../models/book";
import { User } from "../../models/user";


 
@Injectable()
export class PostService {
 
    httpRequest :string ='http://localhost:3000/';
    constructor(private http: HttpClient) { }
 
    FetchPost() {
        this.http.get(this.httpRequest+'posts')
            .subscribe(res =>  console.log(res));
    }
    FetchPost2() {
       //return this.http.get(this.httpRequest+'posts');
       return this.http.get<User[]>(this.httpRequest+'userData');
          
    }
    PostValue(obj: any){
            this.http.post(this.httpRequest+'posts',obj)
            .subscribe(res=> console.log(res));
    }
    FetchAllBooks(){
       return this.http.get<Book[]>(this.httpRequest+'book');
    }
    FetchPost1() {
        this.http.get(this.httpRequest+'posts')
            .subscribe({
                next: function(res){
                console.log(res);
            },
            error: function(error){
            console.log(error);
            
            }
             
        }) 
        
    }
}