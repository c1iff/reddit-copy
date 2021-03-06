import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';


@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(input: Post[], category) {
    var output: Post[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].category === category) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
