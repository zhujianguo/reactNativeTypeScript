// 从半角符号到全角符号的转换   
///全角空格为12288，半角空格为32 
///其他字符半角(33-126)与全角(65281-65374)的对应关系是：均相差65248 

// 半角转换为全角函数
export function ToDBC(txtstring:string):string {
  let tmp="";  
  for(let i=0;i<txtstring.length;i++){ 
    if(txtstring.charCodeAt(i)==32){ 
      tmp=tmp+String.fromCharCode(12288);
    }
    if(txtstring.charCodeAt(i)>=127){
      tmp=tmp+String.fromCharCode(txtstring.charCodeAt(i));
    } 
    if(txtstring.charCodeAt(i)<127){
      tmp=tmp+String.fromCharCode(txtstring.charCodeAt(i)+65248);
    }         
 }
 tmp.replace(/\s+/g,""); 
return tmp;     
}

//全角转换为半角函数
export function ToCDB(str:string):string{   
      let tmp="";   
      for(let i=0;i<str.length;i++) {   
         if(str.charCodeAt(i)>65248&&str.charCodeAt(i)<65375)   {   
              tmp+=String.fromCharCode(str.charCodeAt(i)-65248);   
         }   
         else{   
              tmp+=String.fromCharCode(str.charCodeAt(i));   
        }   
    }   
  return tmp   
} 