// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneService } from './registrazione.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppComponent
  ],
  providers: [RegistrazioneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
