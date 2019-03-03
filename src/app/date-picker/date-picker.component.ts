import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {


  showCalendar = true;
  maxView = 'year';
/*  minuteStep = 5; */
  minView = 'minute';
  startView = 'day';
  views = ["minute", "hour", "day", "month", "year"];

  selectedDate: Date;
  ngOnInit() {
  }
 

}
