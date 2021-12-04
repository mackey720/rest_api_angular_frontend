import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }

  getAuthenticatedUser() {

    console.log('authenticated user' + sessionStorage.getItem('authenticatedUser'))
    return sessionStorage.getItem('authenticatedUser')
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
    
      return false
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }

  executeAuthenticationService(username: string, password: string) {

    console.log(username + ' and ' + password)
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)

    console.log('Auth String: ' + basicAuthHeaderString)

    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    //return basicAuthHeaderString
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicAuth`,
    {headers : header}).pipe( //what should be done if the request succedded
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString)
          return data
        }
      )
    )

  }

  createBasicAuthenticationHtpHeader(){}
}

export class AuthenticationBean{
  constructor(public message:string) { }
}
