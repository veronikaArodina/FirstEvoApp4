import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FirstPipePipe } from "./first-pipe.pipe";

@Component({
  standalone: true, 
  selector: "app-root",
  imports: [CommonModule, FirstPipePipe],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  array_surname = [
    { name: 'Petrov'},
    { name: 'Ivanov'},
    { name: 'Sidorov'},
    { name: 'Panin'}
  ]
  date_now = new Date();
  number = 23;
}