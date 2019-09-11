
import { Pipe , PipeTransform} from '@angular/core';


//arg=15

@Pipe({
    name:'content'
})


export class contentPipe implements PipeTransform
{
    transform(val,arg){

        //  if(arg==='undefined'){return val;}

        //  if(val.length >= arg){return val.substring(0,arg)+'...'}


        if(arg =='true')
        {
            return val.replace('http','https');
        }
        if(arg == 'false')
        {
            return val.replace('http','http');
        }
         
    }
}