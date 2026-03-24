import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Signup {}
