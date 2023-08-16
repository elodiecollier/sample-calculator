import { Component } from '@angular/core';
import { ValueService } from '../services/value.service';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent {

  values:any;
  val: any = "___";
  timesTwo: any = "___";
  raisedTwo: any = "___";
  // "___" acts as a placeholder when no value is being used for calculations

  constructor(private valueService: ValueService) {

  } //constructor

  ngOnInit() {
    this.ValueList();
  } //ngOnInit

  ValueList( ){
    this.values = this.valueService.listValue().subscribe(
      value => {
        this.values = value;
        console.log(this.values); // outputs database contents in console
      } //value
    ) //.subscribe
  } //ValueList

  valueForm = new FormGroup({
    title: new FormControl('')
  });

  onSubmit() {
    const formData = this.valueForm.value;
  
    // Assuming your form control name is 'original'
    const originalValue = formData.title;

    // Create an object with the original value to send to the API
    const dataToSend = {
      original: originalValue
    };

    this.valueService.addValue(dataToSend).subscribe(
      response => {
        console.log('Value added successfully:', response);
      },
      error => {
        console.error('Error adding value:', error);
      }
    );
  } //onSubmit

  calculate(userInput: string) {
    this.val = parseInt(userInput);
    if (!isNaN(this.val)) {
      this.timesTwo = this.val * 2;
      this.raisedTwo = (this.val * 2) * (this.val * 2);
      
    } //if
    else {
      this.val = "___";
      this.timesTwo = "___";
      this.raisedTwo = "___";
    }
  } //calculates

} //FormFieldComponent
