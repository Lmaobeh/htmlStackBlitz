console.log("hello");

function run(){
  document.getElementById("aOutput").innerHTML=JSON.stringify(a);
  document.getElementById("feildOut").innerHTML=a.feild1 +" "+ a["feild2"];
  document.getElementById("print").innerHTML= a.printObject;
  document.getElementById("run").innerHTML=a.printObject();
  document.getElementById("objectFeild").innerHTML=b.objectFeild.cfeild;
}

//objbect notation one
let a = { };
a.feild1 = "feild1";
//key value pair notation
a["feild2"] = "feild2";
a.arrayFeild = [1,2,3];
a.printObject = function (){
  return this.feild1 + " " + this.feild2 + "\n Array" + this.arrayFeild;
}

//Object notation two
let b = { 
  feild1: "hello",
  array: [1,2,3],
  printObject: function(){
    return this.feild1+" " + this.array;
  },
  objectFeild:  c= {
    cfeild: "hello"
  }
}
console.log(b.printObject());
console.log(b.objectFeild.cfeild);