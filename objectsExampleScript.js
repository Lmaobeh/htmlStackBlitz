console.log("hello");
function run(){
  document.getElementById("change").innerHTML="hello";
}

//objbect notation one
let a = { };
a.field1 = "feild1";
//key value pair notation
a["feild2"] = "feild2";
a.arrayFeild = [1,2,3];
a.printObject = function (){
  return this.field1 + " " + this.feild2 + "\n Array" + this.arrayFeild;
}
