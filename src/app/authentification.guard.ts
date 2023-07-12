import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthentificationService } from './authentification.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard  implements CanActivate {

  constructor(private AuthentificationService: AuthentificationService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state:RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.AuthentificationService.isLogged();
  }

}
  