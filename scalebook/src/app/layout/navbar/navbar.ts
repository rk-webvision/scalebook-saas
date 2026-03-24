import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Navbar {
  @Output() toggleSidebar = new EventEmitter<void>();
  
  private authService = inject(AuthService);
  private router = inject(Router)
  user$ = this.authService.user$;

  isAuthPage(): boolean {
    return this.router.url.includes('/auth');
  }
}
