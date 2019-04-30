import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name : "sort"
})

export class SortPipe implements PipeTransform {

  transform (value:any, props: any){

      return value.sort((a, b) => {
        if(a[props] > b[props])
          return 1;
        else return -1;
      });
  }

}
