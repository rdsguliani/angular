import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name : "reverse"
})

export class ReversePipe implements PipeTransform {

  transform (value:any, filteredString: any, props: any){

      return value.split("").reverse().join("");


  }

}
