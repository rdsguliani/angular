import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name : "filtered"
})

export class FilteredPipe implements PipeTransform {

  transform (value:any, filteredString: any, props: any){
      let arr = [];
      for (let item of value){
        if(item[props].indexOf(filteredString) != -1){
          arr.push(item);
        }
      }
      return arr;

  }

}
