import { Injectable } from '@angular/core';
import { Survey } from '../shared/survey';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  surveysList: AngularFireList<any>;
  surveyObject: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  AddSurvey(survey: Survey) {
    this.surveysList.push({
      name: survey.name,
      order: survey.order,
      date: survey.date,
      adviser: survey.adviser,
      group1: survey.group1,
      group2: survey.group2,
      group3: survey.group3,
      group3b: survey.group3b,
      group4: survey.group4,
      group5: survey.group5,
      group6: survey.group6,
      group7: survey.group7,
      group8: survey.group8,
      group9: survey.group9,
      group10: survey.group10,
      group11: survey.group11,
      group12: survey.group12,
      group13: survey.group13,
      group14: survey.group14,
      group15: survey.group15,
      group16: survey.group16,
      group17: survey.group17,
      group18: survey.group18,
      group19: survey.group19,
      group20: survey.group20,
      group21: survey.group21,
      group22: survey.group22,
      group23: survey.group23
    });
  }

  GetSurveysList() {
    this.surveysList = this.db.list('surveys-list', ref =>
      ref.orderByChild('date')
    );
    return this.surveysList;
  }
}
