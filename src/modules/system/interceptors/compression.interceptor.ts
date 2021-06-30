
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CompressionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Request Logger');
    const request = context.getArgByIndex(0);
    const incomingData = {
      "url": request.url,
      "body": request.body,
      "query": request.query,
      "params": request.params
    }
    console.log(incomingData);
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => 
        {
          console.log(`Finished Executing in: ${Date.now() - now}ms`)
        }),
      );
  }
}
