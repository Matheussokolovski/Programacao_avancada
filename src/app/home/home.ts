import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { LoaderService } from '../shared/page-loader/loader.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatAnchor, MatIcon],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
[x: string]: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private loader: LoaderService,
  ) {}

  irPara(rota: string) {
    this.loader.show();

    setTimeout(() => {
      this.router.navigate([rota]);
      this.loader.hide();
    }, 1000);
  }
}
