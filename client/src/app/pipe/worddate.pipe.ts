import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'worddate'
})
export class WorddatePipe implements PipeTransform {

  transform(time: Date): string {
    let hours = time.getHours();
    let minute = time.getMinutes();
    return this.timeInWords(hours, minute);
  }

  timeInWords(h: number, m: number): string {
    const uniqueNums: string[] = ["midnight", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine"];
    let hour: string;
    let minute: string;
    if(h>12){
      h=h%12;
    }
    if(m > 31){
        h+=1;
    }

    if (h<13){hour = uniqueNums[h];}
    else if (h == 13){ hour = uniqueNums[1];}

    if(m == 0){ return(hour + " o' clock");}
    if(m == 1){ return("one minute past " + hour);}
    if(m == 15){ return("quarter past " + hour);}
    if(m == 30){ return("half past " + hour);}
    if(m == 45){ return("quarter to " + hour);}
    if(m == 59){ return("one minute till " + hour);}
    if(m<30){
        return(uniqueNums[m] + " minutes past " + hour);
    } else {
        let f = 60 - m;
        return(uniqueNums[f] + " minutes to " + hour);
    }
            
       
            
    }

}
