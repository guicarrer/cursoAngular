import {Component} from '@angular/core';
import {Profile} from './profile.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {

  profile: Profile | undefined;

  constructor(
    private router: Router
  ) {
  }

  navegar(): void {
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle(): void {

  }

  isLoggedIn(): boolean {
    // Para saber se o profile está populado
    return !!this.profile;
  }

}
