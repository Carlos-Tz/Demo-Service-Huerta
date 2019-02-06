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

  constructor(
    public toastr: ToastrService,
    public surveyApi: SurveyService,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.surveyApi.GetSurveysList();
    this.sForm();
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
      group8: ['', [Validators.required]],
      group9: ['', [Validators.required]],
      group10: ['', [Validators.required]],
      group11: ['', [Validators.required]],
      group12: ['', [Validators.required]],
      group13: ['', [Validators.required]],
      group14: ['', [Validators.required]],
      group15: ['', [Validators.required]],
      group16: ['', [Validators.required]],
      group17: ['', [Validators.required]],
      group18: ['', [Validators.required]],
      group19: ['', [Validators.required]],
      group20: ['', [Validators.required]],
      group21: ['', [Validators.required]],
      group22: ['', [Validators.required]],
      group23: ['']
    });
  }

  ResetForm() {
    this.surveyForm.reset();
  }

  submitSurveyData() {
    this.surveyApi.AddSurvey(this.surveyForm.value);
    this.toastr.success('Encuesta Enviada!');
    this.ResetForm();
  }

}
