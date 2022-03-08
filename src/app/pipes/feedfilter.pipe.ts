import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedfilter'
})
export class FeedfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
