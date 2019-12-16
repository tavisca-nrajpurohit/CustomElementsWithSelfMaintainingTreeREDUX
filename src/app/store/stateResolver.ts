
export function StateResolver(path:string, Ostate){
    //console.log("heooooooooooooooooooooooooooooo");
    let temp:string[] = path.split('.');
    for(let i=0;i<temp.length;i++){
      Ostate = Ostate[temp[i]];
      //console.log(i);
      //console.log(Ostate);
    }
    return Ostate;
}