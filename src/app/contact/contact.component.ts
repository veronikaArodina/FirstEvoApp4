import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
constructor(private router: Router) {}
  goToMain() {
    this.router.navigate(['/main']);
  }
  goToAbout() {
    this.router.navigate(['/about']);
  }
  goToItems() {
    this.router.navigate(['/item']);
  }
}
