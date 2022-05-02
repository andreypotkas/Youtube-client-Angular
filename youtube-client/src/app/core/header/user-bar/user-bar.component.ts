import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss'],
})
export class UserBarComponent implements OnInit {
  constructor(
    public authService:AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.checkUser();
  }
}
