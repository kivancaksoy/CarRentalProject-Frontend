import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/car/carDetailDto';

@Pipe({
  name: 'filterCarPipe',
})
export class FilterCarPipePipe implements PipeTransform {
  transform(value: CarDetailDto[], filterText: string): CarDetailDto[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (cd: CarDetailDto) =>
            cd.carName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
