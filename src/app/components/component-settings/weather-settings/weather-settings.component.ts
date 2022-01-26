import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-weather-settings',
  templateUrl: './weather-settings.component.html',
  styleUrls: ['./weather-settings.component.scss']
})
export class WeatherSettingsComponent implements OnInit {

  form = new FormGroup({
    city: new FormControl('', Validators.required),
    showFull: new FormControl(false)
  });

  onSubmit() {
    console.log(this.form.value);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
