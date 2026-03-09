import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { PageLoaderComponent } from './shared/page-loader/page-loader';
import { LoaderService } from './shared/page-loader/loader.service';

@Component({
  selector: 'app-root',
  imports: [MatCardModule, RouterOutlet, PageLoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('beachUp_front');

  constructor(public loaderService: LoaderService) {}
}
