import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemId: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id');
    });
  }

  goToDetails() {
    this.router.navigate(['details'], { relativeTo: this.route });
  }

  goToList() {
    this.router.navigate(['list'], { relativeTo: this.route, queryParams: { list: 1, enable: true } });
  }
}