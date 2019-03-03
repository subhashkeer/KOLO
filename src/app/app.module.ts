import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DatePickerComponent,
  ],
  imports: [
    BrowserModule,
    DlDateTimePickerDateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
