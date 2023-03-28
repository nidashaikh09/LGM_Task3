let form = document.getElementById('form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let website = document.getElementById('website');
let imglink = document.getElementById('imglink');
let skills = document.getElementById('skills');
let gender = document.getElementById('inputState');

form.addEventListener('submit',(e)=>{


    e.preventDefault();
    let newdiv = document.createElement('div')
    newdiv.classList.add("cardd")
    document.getElementById('cooo').append(newdiv)

    if(imglink.value!=""){
        var aaa=  `<img src="${imglink.value}" alt="">`
    }else{
        var aaa =`<img src="ic-icon.jpg" alt="">`
    }

    newdiv.innerHTML=`<div class="cardd">
    <div class="icon-img">${aaa} </div>
    <div class="info-cont">
        <div>
        <span class="strong" >Name : </span><span > ${name.value} </span></div>
        <div><span class="strong">Email : </span><span > ${email.value} </span></div>
        <div><span class="strong" >Website : </span><span >${website.value}  </span></div>
        <div><span class="strong" >Skills : </span><span > ${skills.value} </span></div>
        <div><span class="strong" >Gender : </span><span > ${gender.value} </span></div>
    </div>  
</div>`

name.value='';
email.value='';
website.value='';
imglink.value='';
skills.value='';
gender.value='';
})