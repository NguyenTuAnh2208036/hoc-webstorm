function check(){
    var el = document.getElementById('name')
    if(this.value.length < 15){
        el.textContent = 'Cần nhập ít nhất 15 kí tự'
    }else{
        el.textContent = '';
    }
}
var el = document.getElementById('names');
el.onblur = check;

function check1(){
    var el1 = document.getElementById('name1')
    if(this.value.length < 8){
        el1.textContent = 'Cần nhập ít nhất 8 kí tự'
    }else{
        el1.textContent = '';
    }
}
var el1 = document.getElementById('password');
el1.onblur = check1;

function check2(){
    var el2 = document.getElementById('name2')
    if(this.value.length < 8){
        el2.textContent = 'Cần nhập ít nhất 8 kí tự'
    }else{
        el2.textContent = '';
    }
}
var el2 = document.getElementById('passwords');
el2.onblur = check2;

function check3(){
    var el3 = document.getElementById('name3')
    if(this.value.length < 15){
        el3.textContent = 'Email không đúng định dạng'
    }else{
        el3.textContent = '';
    }
}
var el3 = document.getElementById('email');
el3.onblur = check3;
