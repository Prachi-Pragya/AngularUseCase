import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { HttpClientModule}  from '@angular/common/http';
import { SuccessComponent } from './success/success.component';
  





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
