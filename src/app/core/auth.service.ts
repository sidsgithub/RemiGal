import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  authState :any =null;//variable to store authStatae(user object for firebase)

  constructor(public afAuth: AngularFireAuth,private storage : AngularFireStorage) {
    this.afAuth.authState.subscribe(data => this.authState = data) 
   }
   //helper functions 
   get authenticated():boolean{
     return this.authState !== null
   }
   get currentUserId():string{
     return this.authenticated ? this.authState.uid :null; 
   }

  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider ())
  }
  logout(){
    this.afAuth.auth.signOut()
  }
  

}
