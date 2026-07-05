import { Component} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
constructor(private router: Router) {}
  goToMain() {
    this.router.navigate(['/main']);
  }
  goToContact() {
    this.router.navigate(['/contact']);
  }
  goToItems() {
    this.router.navigate(['/item']);
  }
}
