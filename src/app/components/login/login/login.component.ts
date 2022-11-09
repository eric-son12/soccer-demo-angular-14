import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, switchMap, timer } from 'rxjs';
import { Login } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4)], this.validateUserNameFromApi(authService)],
      passWord: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  validateUserNameFromApi(api: AuthService) {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(300).pipe(
        switchMap(() => {
          return api.validateUserNameDuplicate(control.value).pipe(
            map((isValid: boolean) => {
              return isValid ? { usernameDuplicated: true } : null;
            })
          );
        })
      )
    };
  };

  submitForm() {
    if (this.loginForm.valid) {
      let loginData: Login = {
        username: this.loginForm.get('userName')?.value,
        password: this.loginForm.get('passWord')?.value,
      }
      this.authService.login(loginData)
      .subscribe(rs => rs ? this.router.navigate(['']) : null);
    }
  }

}
