import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginPageComponent } from './containers/login-page.component';
import { LoginFormComponent } from './components/login-form.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthEffects } from './store/auth.effects';
import { reducers } from './store/auth.reducers';
import { MaterialModule } from '../shared/material.module';
import { AuthRoutingModule } from './auth-routing.module';

export const COMPONENTS = [LoginPageComponent, LoginFormComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [AuthService, AuthGuard],
    };
  }
}

@NgModule({
  imports: [
    AuthModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class RootAuthModule {}
