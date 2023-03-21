const container = document.querySelector("#container");
const select = document.querySelector("select");
const h1 = document.querySelector("h1");
const btnGo = document.querySelector("#btnGo");
const btnRematch = document.querySelector("#btnRematch");
const nums = [];
for (let i = 0; i<12; i++) {
    nums[i] = i+1;
}

//커서이벤트 막기
const preventCursor = function () {
    container.style.pointerEvents = "none";
};


// 배열에 들어있는 숫자요소 섞기
for (let i = 0; i<nums.length; i++) {
    const random = Math.floor(Math.random()*11 +1)
    let temp;
    temp = nums[i];
    nums.splice(i, 1, nums[random]);
    nums[random] = temp;
};


// 숫자를 가진 박스 만들기
for (let i = 0; i<nums.length; i++) {
    const container = document.querySelector("#container");
    const divCreate = document.createElement("div");
    divCreate.classList.add("numbox");
    divCreate.innerHTML = nums[i];
    container.appendChild(divCreate);
}
const divs = document.querySelectorAll(".numbox");


// 유저가 고른 숫자 확정하는 go버튼
const go = function () {
    container.style.display = "flex";
    h1.innerHTML = `"${select.value}" is selected`;
    btnGo.style.display = "none";
    select.style.display = "none";
    
};
btnGo.addEventListener("click", go)


//숫자박스 클릭했을때 이벤트
for (let i=0; i<nums.length; i++) {
    const clickNum = function () {
        if (nums[i] === parseInt(select.value)) {
            h1.innerHTML = "GOOD!";
        } else {
            h1.innerHTML = "FAIL!"
        }
        for (let j=0; j<nums.length; j++) {
            divs[j].style.color = "white";
        }
        divs[i].style.border = "2px solid darkred";
        preventCursor();
        btnRematch.style.display = "inline";
    };
    divs[i].addEventListener("click",clickNum);
    // divs[i].addEventListener("mouseover",clickNum);
    
}

// 리매치버튼
const rematch = function () {
    location.reload();
};
btnRematch.addEventListener("click", rematch);

