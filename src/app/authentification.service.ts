import { Utilisateur } from "./utilisateur";

export class AuthentificationService {
  // utilisateur = {
  //   pseudo: 'admin',
  //   motPasse: 'admin'
  // };

  constructor() { }

  public Login(userData: Utilisateur)
  {
   localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public isLogged()
  {
   return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout() 
  {
    return localStorage.removeItem('ACCESS_TOKEN');
  }  
}
