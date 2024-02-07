import { CanActivateFn, Router } from '@angular/router';
import { AuthAccessService } from '../access/auth-access.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authAccessService: AuthAccessService = inject(AuthAccessService);
  const router: Router = inject(Router);
  const flag = !!authAccessService.getAuth();
  
  if (!flag) {
    router.navigateByUrl('/auth');
  }

  return flag;
};