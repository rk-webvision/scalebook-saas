import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';

@NgModule({
  declarations: [Navbar, Sidebar],
  imports: [CommonModule],
  exports: [
    Navbar,
    Sidebar   // 👈 IMPORTANT
  ]
})
export class LayoutModule {}
