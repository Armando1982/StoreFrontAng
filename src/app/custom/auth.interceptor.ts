import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  //console.log("interceptor have process")
  if(req.url.indexOf("Login") > 0) return next(req);
  //if(req.url.indexOf("Customer") > 0) return next(req);

  const token = localStorage.getItem("token");
  const cloneRequest=req.clone({
    setHeaders:{
      Authorization: `Bearer ${token}`
    }
  })
  return next(cloneRequest);
};
