import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'component'
})
export class ComponentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
