<script>

  function square(x){
    return x*x;
  }
  function double(y){
    return y*2;
  }
  function compose(square,double,num){
    return square(double(num));
  }

  function compose(double,square,num){
    return double(square(num));
  }

  function f1(num1){
    console.log(compose(square,double,num1));
  }

  function f2(num1){
    console.log(compose(double,square,num1));
  }

f1(5);
f1(10);