var array = [{
    td1: 'Имя пользователя',
    td2: 'E-mail',
    td3: 'Дата регистрации',
    td4: 'Рейтинг',
    td5: '',
}];
var array1 = [{
    color1: 'Username',   
    color2: 'test@test.ru',
    color3: '23.09.19',
    color4: '12',
    color5: '-',
},
{
    color1: 'Username',   
    color2: 'test@test.ru',
    color3: '23.09.19',
    color4: '12',
    color5: '-',
},
{
    color1: 'Username',   
    color2: 'test@test.ru',
    color3: '23.09.19',
    color4: '12',
    color5: '-',
},
{
    color1: 'Username',   
    color2: 'test@test.ru',
    color3: '23.09.19',
    color4: '12',
    color5: '-',
},
{
    color1: 'Username',   
    color2: 'test@test.ru',
    color3: '23.09.19',
    color4: '12',
    color5: '-',
},
{
    color1: 'Username',   
    color2: 'test@test.ru',
    color3: '23.09.19',
    color4: '12',
    color5: '-',
},
{
    color1: 'Username',   
    color2: 'test@test.ru',
    color3: '23.09.19',
    color4: '12',
    color5: '-',
},
{
    color1: 'Username',   
    color2: 'test@test.ru',
    color3: '23.09.19',
    color4: '12',
    color5: '-',
},
{
    color1: 'Username',   
    color2: 'test@test.ru',
    color3: '23.09.19',
    color4: '12',
    color5: '-',
}];
(function () {
    var tbl = document.getElementsByTagName('table')[0];
    for (var j = 0; j < array.length; j++)
    {
        var arr = array[0];
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var txt1 = document.createTextNode(arr.td1);
        var txt2 = document.createTextNode(arr.td2);
        var txt3 = document.createTextNode(arr.td3);
        var txt4 = document.createTextNode(arr.td4);
        var txt5 = document.createTextNode(arr.td5);
        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(txt3);
        td4.appendChild(txt4);
        td4.appendChild(txt5);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tbl.appendChild(tr);
    }
    for (var i = 0; i < array1.length; i++) 
    {
        var arr = array1[i];
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var txt1 = document.createTextNode(arr.color1);
        var txt2 = document.createTextNode(arr.color2);
        var txt3 = document.createTextNode(arr.color3);
        var txt4 = document.createTextNode(arr.color4);
        var txt5 = document.createTextNode(arr.color4);
        td1.appendChild(txt1);
        td2.appendChild(txt2);
        td3.appendChild(txt3);
        td4.appendChild(txt4);
        td5.appendChild(txt5);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tbl.appendChild(tr);
    }
})();
const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const clear = document.querySelector('.clear');
icon.onclick = function(){
    search.classList.toggle('active')
};
clear.onclick = function(){
    document.getElementById('mySearch').value = ''
}