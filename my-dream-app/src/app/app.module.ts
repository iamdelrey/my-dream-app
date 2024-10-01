import { HttpClientModule } from '@angular/common/http'; // импортируйте HttpClientModule
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component'; // замените на правильный путь к вашему компоненту
import { ContactListComponent } from './contact-list/contact-list.component'; // замените на правильный путь к вашему компоненту

@NgModule({
  declarations: [AppComponent, ContactListComponent, ContactDetailsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // добавьте HttpClientModule для работы с HTTP запросами
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
