// // Отправляем данные с помощью AJAX в файл mail.php - Sending data by dint of AJAX into the "mail.php"
// var send_data = function (type, name, phone) {
//     var xhr = new XMLHttpRequest();
//     var body = 'type=' + encodeURIComponent(type) + '&name=' + encodeURIComponent(name) + '&phone=' + encodeURIComponent(phone);
//     xhr.open("POST", '/mail.php', true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     console.log(body);
//     xhr.send(body);
// };
// var send_order = function (stud,dob,age,sex,nat,arr,week,addit,contr,swim,trans,cname,cmob,cma,psn,pfo,pdate,addr,comm) {
//     var xhr = new XMLHttpRequest();
//     var body = 'stud='+encodeURIComponent(stud)+'&dob='+encodeURIComponent(dob)+'&age='+encodeURIComponent(age)+'&sex='+encodeURIComponent(sex)+'&nat='+encodeURIComponent(nat)+'&arr='+encodeURIComponent(arr)+'&week='+encodeURIComponent(week)+'&addit='+encodeURIComponent(addit)+'&contr='+encodeURIComponent(contr)+'&swim='+encodeURIComponent(swim)+'&trans='+encodeURIComponent(trans)+'&cname='+encodeURIComponent(cname)+'&cmob='+encodeURIComponent(cmob)+'&cma='+encodeURIComponent(cma)+'&psn='+encodeURIComponent(psn)+'&pfo='+encodeURIComponent(pfo)+'&pdate='+encodeURIComponent(pdate)+'&addr='+encodeURIComponent(addr)+'&comm='+encodeURIComponent(comm);
//     xhr.open("POST", '/order.php', true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     console.log(body);
//     xhr.send(body);
// };

// // Собираем данные с Input'ов и запускаем скрипт с этими данными 
// var getDataInputForm1 = function () {
//     var type = document.getElementById('typetxt1').value;
//     var name = document.getElementById('name1').value;
//     var phone = document.getElementById('phone1').value;
//     send_data(type,name,phone);
// };
// var getDataInputForm2 = function () {
//     var type = document.getElementById('typetxt2').value;
//     var name = document.getElementById('name2').value;
//     var phone = document.getElementById('phone2').value;
//     send_data(type,name,phone);
// };
// var getDataInputForm3 = function () {
//     var type = document.getElementById('typetxt3').value;
//     var name = document.getElementById('name3').value;
//     var phone = document.getElementById('phone3').value;
//     send_data(type,name,phone);
// };
// var getDataInputForm4 = function () {
//     var type = document.getElementById('typetxt4').value;
//     var name = document.getElementById('name4').value;
//     var phone = document.getElementById('phone4').value;
//     send_data(type,name,phone);
// };
// var getDataInputForm5 = function () {
//     var type = document.getElementById('typetxt5').value;
//     var name = document.getElementById('name5').value;
//     var phone = document.getElementById('phone5').value;
//     send_data(type,name,phone);
// };
// var getDataInputForm6 = function () {
//     var stud = document.getElementById('student-name').value;
//     var dob = document.getElementById('DOB').value;
//     var age = document.getElementById('age').value;
//     var sex = document.getElementById('sex').value;
//     var nat = document.getElementById('nationality').value;

//     var arr = document.getElementsByName('arrival').value;
//     var week = document.getElementsByName('weeks').value;
//     var addit = document.getElementsByName('addit').value;
//     var contr = document.getElementsByName('contraind').value;
//     var swim = document.getElementsByName('swiming').value;
//     var trans = document.getElementsByName('transfer').value;

//     var cname = document.getElementById('customer-name').value;
//     var cmob = document.getElementById('customer-mobile').value;
//     var cma = document.getElementById('customer-mail').value;
//     var psn = document.getElementById('pass-serialnum').value;
//     var pfo = document.getElementById('pass-foundation').value;
//     var pdate = document.getElementById('pass-date').value;
//     var addr = document.getElementById('address').value;
//     var comm = document.getElementById('comments').value;

//     send_order(stud,dob,age,sex,nat,arr,week,addit,contr,swim,trans,cname,cmob,cma,psn,pfo,pdate,addr,comm);
// };

function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    console.log($(this).serialize());
    var msg = {
        data: JSON.stringify($(this).serializeArray())
    }
    $.ajax({
        type: 'POST',
        url: '/mail.php',
        data: msg,
        success: function(data) { 
            alert('Ваш запрос отправлен');
            console.log(data);
            // console.log(msg);
        }
    })
    // return false;
}

for (var i=0;i<recall.length;i++) {

    if (recall[i].attachEvent) {
        recall[i].attachEvent("submit", processForm);
    } 
    else {
        recall[i].addEventListener("submit", processForm);
    }

}