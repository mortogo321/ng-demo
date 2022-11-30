import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, EmployeeComponent, WelcomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
