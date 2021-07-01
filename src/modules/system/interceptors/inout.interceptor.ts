
import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class InOutInterceptor implements NestInterceptor {
  private readonly logger = new Logger("DebugRequest");
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.getArgByIndex(0);
    const incomingData = {
      "body": request.body,
      "query": request.query,
      "params": request.params
    }
    this.logger.debug(`Request: ${request.url}`);
    this.logger.debug(incomingData);
    const now = Date.now();
    return next
      .handle()
      .pipe(
        map(
          (value) => {
            this.logger.debug(`Finished Executing in: ${Date.now() - now}ms`);
            if(typeof value != "object"){
              return `{ "err": 0, "errmsg": null, "data": "${value}"}`
            } else {
              return `{ "err": ${value.err}, "errmsg": ${value.msg}, "data": "${value.data}"}`
            }
          }
        )
      );
  }
}
