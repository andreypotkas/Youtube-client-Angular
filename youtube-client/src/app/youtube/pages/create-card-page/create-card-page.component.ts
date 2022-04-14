import { Component } from '@angular/core';
import { CreateCardService } from '../../services/create-card.service';

@Component({
  selector: 'app-create-card-page',
  templateUrl: './create-card-page.component.html',
  styleUrls: ['./create-card-page.component.scss'],
})
export class CreateCardPageComponent {
  constructor(
    public createService: CreateCardService,
  ) {}
}
