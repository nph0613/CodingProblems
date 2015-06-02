function evalPostfix(exp){
    var expAsArray = exp.split(",");
    var stack = [];
    for(var i=0; i<expAsArray.length; i++){
        if(expAsArray[i] == "*" || expAsArray[i] == "/" || expAsArray[i] == "+" || expAsArray[i] == "-"){
            var y = stack.pop();
            var x = stack.pop();
            var ans;
            switch(expAsArray[i]){
                case "*":
                    ans = x*y;
                    break;
                case "/":
                    ans = x/y;
                    break;
                case "+":
                    ans = x+y;
                    break;
                case "-":
                    ans = x-y;
                    break;
            }
            stack.push(ans);
        } else {
            stack.push(Number(expAsArray[i]));
        }
    }
    return stack;
}