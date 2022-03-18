import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('Type') Type: ElementRef = new ElementRef('input');
  @ViewChild('isRemberMeChecked') isRemberMeChecked: ElementRef = new ElementRef('input');
  @ViewChild('email') email: ElementRef = new ElementRef('input');
  @ViewChild('password') password: ElementRef = new ElementRef('input');
  loginUserData = new UserData('', '');
  constructor(private _auth: AuthService, private router: Router) { }
  ngAfterViewInit(): void {
    console.log(localStorage.getItem('Remamber'));
    console.log(localStorage.getItem('type'));
    console.log(this.isRemberMeChecked.nativeElement.value);
    
    if(localStorage.getItem('Remamber')=='true'){
      if(localStorage.getItem('type')=='client'){this.router.navigate(['client/']);}
      else if(localStorage.getItem('type')=='admin'){this.router.navigate(['Admain/']);}
      else if(localStorage.getItem('type')=='agency'){this.router.navigate(['Agency/']);}
      else if(localStorage.getItem('type')=='maintenancemanager'){this.router.navigate(['Resmange/']);}
    }
  }

  ngOnInit(): void {
  }
  loginUser() {
    this.loginUserData = new UserData(this.email?.nativeElement.value, this.password?.nativeElement.value);
    console.log(this.loginUserData);
    if (this.Type.nativeElement.value == 'admin' || this.Type.nativeElement.value == 'client') {
      this._auth.loginUser(this.loginUserData).subscribe(
        (res) => {
          console.log(res['data'].type);
          
          console.log("res['data']");
          console.log(res['data']);
          localStorage.setItem('id', res['data'].id);
          localStorage.setItem('name', res['data'].name);
          localStorage.setItem('cin', res['data'].cin);
          localStorage.setItem('type', res['data'].type);
          localStorage.setItem('email', res['data'].email);
          localStorage.setItem('address', res['data'].address);
          localStorage.setItem('contact', res['data'].contact);
          if (res['data'].type == 'admin') {
            alert("Login successful Admin");
            this.router.navigate(['Admain/']);
          }
          else {
            alert("Login successful client");
            this.router.navigate(['client/']);
          }
        },
        (err) => {
          console.log(err);
          alert("Login UnSuccessful");
        }
      );
    }
    else if (this.Type.nativeElement.value == 'agency') {
      this._auth.loginAgency(this.loginUserData).subscribe(
        (res) => {
          console.log("res['data'].id");
          console.log(res['data'].id);
          localStorage.setItem('id', res['data'].id);
          localStorage.setItem('name', res['data'].name);
          localStorage.setItem('type', res['data'].type);
          localStorage.setItem('email', res['data'].email);
          localStorage.setItem('address', res['data'].address);
          localStorage.setItem('contact', res['data'].contact);
          alert("Login successful agency");
          this.router.navigate(['Agency/']);
        },
        (err) => {
          console.log(err);
          alert("Login UnSuccessful");
        }
      );
    }
    else if (this.Type.nativeElement.value == 'maintenancemanager') {
      this._auth.loginResManager(this.loginUserData).subscribe(
        (res) => {
          console.log("res['data'].email");
          console.log(res['data'].email);
          localStorage.setItem('id', res['data'].id);
          localStorage.setItem('name', res['data'].name);
          localStorage.setItem('type', res['data'].type);
          localStorage.setItem('email', res['data'].email);
          localStorage.setItem('address', res['data'].address);
          localStorage.setItem('contact', res['data'].contact);
          alert("Login successful resmange");
          this.router.navigate(['Resmange/']);
        },
        (err) => {
          console.log(err);
          alert("Login UnSuccessful");
        }
      );
    }
  }
  loginUserViewer() { this.router.navigate(['client/']); }
  checkRemember() {
    console.log(this.isRemberMeChecked.nativeElement.value);
    
    if (this.isRemberMeChecked) {
      localStorage.setItem('Email', this.email?.nativeElement.value);
      localStorage.setItem('Password', this.password?.nativeElement.value);
      localStorage.setItem('Remamber', 'true');
    }
    else {
      localStorage.setItem('Remamber', 'false');
    }
  }
}
