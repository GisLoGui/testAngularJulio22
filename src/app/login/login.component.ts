import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService } from '../../app/_services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit, OnDestroy {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    private subscription: Subscription;
    mensaje: any;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            user: [''],
            password: ['', Validators.required],
        });

        this.subscription = this.alertService.getMessage().subscribe(mensaje => { 
            this.mensaje = mensaje; 
        });

        this.loginForm = new FormGroup({
            user: new FormControl(null),
            password: new FormControl(null, [Validators.required])
          });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    get input() {
        return this.loginForm.get('user');
     } 

     get pattern() {
      return this.loginForm.get('password');
   } 

    
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;

                this.authenticationService.login(this.f.user.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => { 
                    this.alertService.error(error);
                }); 
    }

   
}


