import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { fuseAnimations } from 'shared/animations';
import { FuseAlertComponent, FuseAlertType } from 'shared/components/alert';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';
// import { AuthService } from '../services/auth.service';



@Component({
    selector     : 'sign-in',
    templateUrl  : './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
    standalone   : true,
    imports      : [RouterLink,MaterialModuleModule, NgIf, FuseAlertComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatProgressSpinnerModule],
})
export class SignInComponent implements OnInit
{@ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: '',
    };
    signInForm: UntypedFormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    // constructor(
    //     private _activatedRoute: ActivatedRoute,
    //     // private _authService: AuthService,
    //     private _formBuilder: UntypedFormBuilder,
    //     private _router: Router,
    // )
    // {
    // }

    /**
     * On init
     */
    ngOnInit(): void
    {

    }

    loginForm: FormGroup;
    hidePassword = true;

    constructor(private fb: FormBuilder) {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        secondaryProfile: [false]
      });
    }

    onSubmit() {
      if (this.loginForm.valid) {
        console.log('Login submitted', this.loginForm.value);
        // Implement your login logic here
      }
    }



}
