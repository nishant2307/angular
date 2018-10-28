import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {enableProdMode} from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/Forms';
import { DataService } from './services/data.service';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
