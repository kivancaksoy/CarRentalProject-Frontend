import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color/color';

@Pipe({
  name: 'filterColorPipe',
})
export class FilterColorPipePipe implements PipeTransform {
  transform(value: Color[], filterText: string): Color[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter((c: Color) =>
          c.colorName.toLocaleLowerCase().indexOf(filterText)
        )
      : value;
  }
}
