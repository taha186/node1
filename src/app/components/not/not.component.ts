import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not',
  standalone: true,
  imports: [CommonModule ,RouterLink],
  templateUrl: './not.component.html',
  styleUrls: ['./not.component.css']
})
export class NotComponent {

}
