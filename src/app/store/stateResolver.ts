
export function StateResolver(path:string, Ostate){
    let temp:string[] = path.split('.');
    for(let i=0;i<temp.length;i++){
      Ostate = Ostate[temp[i]];
    }
    return Ostate;
}