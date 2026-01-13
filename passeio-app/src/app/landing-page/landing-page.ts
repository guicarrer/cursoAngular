import {Component, OnInit} from '@angular/core';
import {Profile} from './profile.model';
import {Router} from '@angular/router';
import {AuthGoogle} from '../auth-google';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage implements OnInit {

  profile: Profile | undefined;

  constructor(
    private router: Router,
    private loginsService: AuthGoogle
  ) {
  }

  ngOnInit(): void {
    this.loginsService.initConfiguration();
  }

  navegar(): void {
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle(): void {
    this.loginsService.login();
  }

  isLoggedIn(): boolean {
    const dadosGoole = this.loginsService.getLoggedProfile();
    console.log("Dados Google: " + dadosGoole);
    this.profile = dadosGoole;
    return !!this.profile;
  }

}
