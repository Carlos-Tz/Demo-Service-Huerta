import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { SurveyService } from '../shared/survey.service';


@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {
  public surveyForm: FormGroup;
  _show : boolean = false;
  constructor(
    public toastr: ToastrService,
    public surveyApi: SurveyService,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.surveyApi.GetSurveysList();
    this.sForm();
    this.onChanges();
  }

  sForm() {
    this.surveyForm = this.fb.group({
      name: ['', [Validators.required]],
      order: ['', [Validators.required]],
      date: ['', [Validators.required]],
      adviser: ['',[Validators.required]],
      group1: ['', [Validators.required]],
      group2: ['', [Validators.required]],
      group3: ['', [Validators.required]],
      group3b: [''],
      group4: ['', [Validators.required]],
      group5: ['', [Validators.required]],
      group6: ['', [Validators.required]],
      group7: [''],
      group8: [''],
      group9: [''],
      group10: [''],
      group11: [''],
      group12: [''],
      group13: [''],
      group14: [''],
      group15: [''],
      group16: [''],
      group17: [''],
      group18: [''],
      group19: [''],
      group20: [''],
      group21: [''],
      group22: [''],
      group23: ['']
    });
  }

  ResetForm() {
    this.surveyForm.reset();
    this._show = false;
  }

  submitSurveyData() {
    this.surveyApi.AddSurvey(this.surveyForm.value);
    this.toastr.success('Encuesta Enviada!');
    this.ResetForm();
  }

  onChanges(){
    this.surveyForm.get('group1').valueChanges
    .subscribe(selected => {
      if((selected === '9' || selected === '10') ){
      }else{
        this._show = true;
      }
    });
    this.surveyForm.get('group2').valueChanges
    .subscribe(selected => {
      if((selected === '9' || selected === '10')){
      }else{
        this._show = true;
      }
    });
    this.surveyForm.get('group3').valueChanges
    .subscribe(selected => {
      if(selected === 'SI'){
      }else{
        this._show = true;
      }
    });
    this.surveyForm.get('group4').valueChanges
    .subscribe(selected => {
      if((selected === '9' || selected === '10')){
      }else{
        this._show = true;
      }
    });
    this.surveyForm.get('group5').valueChanges
    .subscribe(selected => {
      if((selected === '9' || selected === '10') ){
      }else{
        this._show = true;
      }
    });
    this.surveyForm.get('group6').valueChanges
    .subscribe(selected => {
      if((selected === '9' || selected === '10')){
      }else{
        this._show = true;
      }
    });
    
  }
}
