//    numip   opbtn  
var arr=[];
var num="";
$('button').on("click",function(){
 var val=$(this).attr("value");

   if(val=='CE'){
        results=$("#inputs").text();
     results=results.trim();
        l=results.length;
         results=results.substring(0,l-1);
         $("#inputs").html(results);
          val="";
     console.log("AFTER DELETING");
     console.log(results);
  }
   if(val=='='){
     var ans=0;
     results=$("#inputs").text();
     results=results.trim();
     last=results.substr(-1);
     console.log(last+"LAST IS OPERANd OR NOT");
     if(!results.includes('e')){
      if(results!="Infinity" && results!="NaN"){ 
     if(last!='+' && last!='-' && last!='x' && last!='/' && last!='.'){
        $("#inputs").html("");
      $("#outputs").html(results);
     console.log("BELOW IS THE DATA TO VALUATE");
     console.log(results);
      //  console.log(arr);
     // numdata=results.split(/[+*/-]+/g);   retuns [n1,n1,n3,.]
       operands=results.match(/[+x/-]+|[0-9e.]+/g);
    //   operands = results.replace(/\w/g,"");
     //  console.log(numdata); 
       console.log(operands);
      
       operandsL=operands.length;
    //   ans=parseInt(operands[0]);
        while(operands.includes('/')){
         if(operands.includes('/')){
            min=operands.indexOf('/');
            if(min<1){
             operands.unshift("0");
             console.log("ADDED zero");
               console.log(operands);   
             min=1;

           }
           ans=parseFloat(operands[min-1])/parseFloat(operands[min+1]);
          // operands[max]='+';
          // operands[max-1]=ans;
           if(!Boolean(ans)){
             ans=0;
           }
           ans=ans.toString();
           operands.splice(min-1,3,ans);
         }
        
       }
        console.log("after division");
       console.log(operands);
      
        while(operands.includes('x')){
         if(operands.includes('x')){
            min=operands.indexOf('x');
         //  console.log(operands);
         //  console.log(min+"checking");
            if(min<1){
             operands.unshift("0");
             console.log("ADDED zero");
               console.log(operands);   
             min=1;

           }   
           console.log(operands[min+1]);
            console.log(operands[min-1]);
           ans=parseFloat(operands[min-1])*parseFloat(operands[min+1]);
           console.log(ans);
           ans=ans.toString();
          // operands[max]='+';
          // operands[max-1]=ans;
           operands.splice(min-1,3,ans);
           console.log(operands);
          // console.log(operands+"------"+i+"-------"+operands.length);
         }
        
       }
        console.log("after multiplication");
       console.log(operands);
         while(operands.includes('-')){
         if(operands.includes('-')){
            min=operands.indexOf('-');
           console.log("PROBLEM ! andminimun value "+min);
           console.log(operands);
         //  var lll=operands.length;
           if(min<1){
             operands.unshift("0");
             console.log("ADDED ZERO");
               console.log(operands);   
             min=1;

           }
           ans=parseFloat(operands[min-1])-parseFloat(operands[min+1]);
           ans=ans.toString();
          operands.splice(min-1,3,ans);
         }
       }
         console.log("after subtraction");  
        console.log(operands);
          while(operands.includes('+')){
         if(operands.includes('+')){
            min=operands.indexOf('+');
            if(min<1){
             operands.unshift("0");
             console.log("ADDED ZERO");
               console.log(operands);   
             min=1;

           }
           ans=parseFloat(operands[min-1])+parseFloat(operands[min+1]);
           ans=ans.toString();
           console.log(ans+"VERIFYNG ans");
          operands.splice(min-1,3,ans);
         }
       }
        console.log("after addition"); 
     //  operands=operands.join();
        
        $("#inputs").html(operands.join(''));
       console.log(operands.join(''));
       
         
        
       
       
       
       
     }
     else{
       res=$("#inputs").text();
       $("#outputs").html(res);
     }
      }
     }
     else{
       $("#outputs").html("Sorry Max Limit Exceeded");
       
     }
   val="";
  }
  if(val=='AC'){   
    $("#inputs").html("");
    $("#outputs").html("Have a Nice Day");   
    val="";
    arr=[];
    results="";
    checkop="";
    num="";
    min=0;
  }
 
  if(val=='+' || val=='-' || val=='/' || val=='x' || val=='.'){
     checkop=$("#inputs").text();
   //  console.log(checkop);
    checkop=checkop.trim();
     console.log(checkop);
    if(checkop!="Infinity" && checkop!="NaN"){
    if(val=='.'){
     var strr=checkop.split(/[+x/-]+/g);
    strr=strr.pop();
    // operands=results.match(/[+x/-]+|[0-9e.]+/g);
    console.log("showing results belowwww");
    console.log(strr);
    if(strr.includes('.')){
      val='';
      console.log(val);
    }
     console.log("showing results aboveee");
    }
    console.log(checkop);
    var last=checkop.substr(-1);
    console.log(last);
    if(last!='+' && last!='-' && last!='/' && last!='x' && last!='.'){
      $("#inputs").append(val);
      results=$("#inputs").text();
      results=results.trim();
      console.log("AFTER OPERAND ADDED INPUTS ARE");
      console.log(results);
    }
   num="";
    }
  }
  var isnum = /^\d+$/.test(val);
  if(isnum){
   //um=num.concat(val);
   //onsole.log(num+"(number i/p section * flag)");   
     results=$("#inputs").text();
     results=results.trim();
   // console.log(results);
    if(results!="Infinity" && results!="NaN"){
       $("#inputs").append(val);
    results=$("#inputs").text();
    results=results.trim();
    console.log("ADDING VALUES");
    console.log(results);
    }
    
    }
 /*  if(val=="."){
   //um=num.concat(val);
   //onsole.log(num+"(number i/p section * flag)");
    
    results=$("#inputs").text();
    results=results.trim();
       var last=results.substr(-1);
    console.log(last);
     if(last!='.'){
        console.log("ADDING VALUES");
       console.log(results);
        $("#inputs").append(val);
     }
   
    }  */
  
 
 
});


/* 
var arr=[];
var num="";
var logg=0;
var opm=0;
var flag=0;
var count=0;
var reusenum="";
$('button').on("click",function(){
 var val=$(this).attr("value");

   if(val=='CE'){
     console.log("Repeat"+flag+"loggggg"+logg);
    if(flag==0 && logg>count){
      console.log("Repeat 1");
        results=$("#inputs").text();
        l=results.length;
         results=results.substring(0,l-1);
       reusenum=reusenum.slice(0,-1);
       console.log(reusenum);
       count++;
       console.log("if block");
       console.log(arr);
      num=reusenum;
            if(count==logg && count!=0){
             arr.pop();
             console.log(arr);
              flag=1;
              count=0;
              logg=0;
              if(arr.length>0){
                 $("#inputs").html(results);
                   //   var max=arr.length;
                   
                    reusenum=arr[max-2];
               // console.log(flag+"FLAG");
                  // console.log(reusenum);
                }
              
           }
     }
     else{
       console.log("repeat 2");
        strr=arr.pop();
       flag=0;
       count=0;
       console.log(strr+" else part");
        console.log(arr);
       
         results=$("#inputs").text();
        l=results.length;
         results=results.substring(0,l-1);
        num=reusenum;
       if(arr.length==0){
         num=results;
       }
      
       console.log(num+"--else part number value");
     }
 
      $("#inputs").html(results);
  
      val="";
  }
   if(val=='='){
     var ans=0;
     if(arr.length>0){
       
    results=$("#inputs").text();
    $("#outputs").html(results);
     arr.push(num);
       console.log(arr);
       ans=parseInt(arr[0]);
     for(var i=1;i<arr.length;i++){
           if(isNaN(arr[i])){
             op=arr[i];
           //   console.log(op);
            if(op=='+'){
                ans=ans+parseInt(ans[i+1]);
              i=i+1;
            } if(op=='-'){
              ans=ans-parseInt(ans[i+1]);
            } if(op=='*'){
              ans=ans*parseInt(ans[i+1]);
            }
              if(op=='/'){
              ans=ans/parseInt(ans[i+1]);
            }
       
           }
       
      // console.log(arr[i]);
      // ans=parseInt(ans)+parseInt(arr[i]);
     }     
     
     }
     $("#inputs").html(ans);
     val="";
  }
  if(val=='AC'){
    $("#inputs").html("");
    $("#outputs").html("");
    val="";
    arr=[];
    num="";
     logg=0;
 opm=0;
 flag=0;
 count=0;
 reusenum="";
  }
 
  if(val=='+' || val=='-' || val=='/' || val=='*'){
 //   console.log(num);
    if(num!=""){
       arr.push(num);
         arr.push(val);
      console.log("Added operands and values ");
      console.log(arr);
         $("#inputs").append(val);
      //data=("#inputs").text();
      //  $("#outputs").html(data);
      reusenum=num;
      console.log(reusenum+"(operand section used to modify)");
      logg=reusenum.length;
    //  console.log(logg);
      flag=1;
    }
   num="";
  }
  var isnum = /^\d+$/.test(val);
  if(isnum){
    num=num.concat(val);
    console.log(num+"(number i/p section * flag)"+flag);
     $("#inputs").append(val);
  //  opm="";
    flag=0;
    count=0;
    reusenum=num;
   // console.log(arr);
  }
// arr.push(val);
 // console.log(arr);

 
 
});



*/

