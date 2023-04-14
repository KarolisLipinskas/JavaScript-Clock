
//digital
let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

//analog
let r = document.querySelector(':root');

setInterval(() => 
{
    //digital
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if(h<10) h="0"+h;
    if(m<10) m="0"+m;
    if(s<10) s="0"+s;

    hour.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;

    //analog
    let hh = h * 30 + (m*6/12);
    let mm = m * 6;
    let ss = s * 6;
    r.style.setProperty('--anglhour', hh);
    r.style.setProperty('--anglmin', mm);
    r.style.setProperty('--anglsec', ss);
});
