import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { checkDateValidator } from '../directives/check-date.directive';

@Injectable({
  providedIn: 'root',
})
export class CreateCardService {
  private imgReg = '(https?://[^ ]*.(?:gif|png|jpg|jpeg))';
  private videoReg = '(https?://[^ ]*)';
  constructor() { }
  public card = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    description: new FormControl('', [Validators.maxLength(255)]),
    img: new FormControl('', [Validators.required, Validators.pattern(this.imgReg)]),
    link: new FormControl('', [Validators.required, Validators.pattern(this.videoReg)]),
    date: new FormControl('', [Validators.required, checkDateValidator()]),
  });
  public get title() {
    return this.card.get('title');
  }
  public get description() {
    return this.card.get('description');
  }
  public get img() {
    return this.card.get('img');
  }
  public get link() {
    return this.card.get('link');
  }
  public get date() {
    return this.card.get('date');
  }
  public create(): void {
    console.log(this.card);
  }
}
