import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [Navbar, Sidebar],
  imports: [CommonModule, MatToolbarModule,
    MatButtonModule, MatSidenavModule,
    MatIconModule],
  exports: [
    Navbar,
    Sidebar   // 👈 IMPORTANT
  ]
})
export class LayoutModule { }
