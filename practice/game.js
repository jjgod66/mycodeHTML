const container = document.querySelector("#container");
const select = document.querySelector("select");
const h1 = document.querySelector("h1");
const btnGo = document.querySelector("#btnGo");
const btnRematch = document.querySelector("#btnRematch");
const nums = [];
for (let i = 0; i<12; i++) {
    nums[i] = i+1;
}


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


// 고른 숫자 확정
const go = function () {
    container.style.display = "flex";
    h1.innerHTML = `"${select.value}" is selected`;
    btnGo.style.display = "none";
    select.style.display = "none";
    btnRematch.style.display = "inline";
};
btnGo.addEventListener("click", go)


//클릭했을때 이벤트
for (let i=0; i<nums.length; i++) {
    const func = function () {
        if (nums[i] === parseInt(select.value)) {
            for (let j=0; j<nums.length; j++) {
                divs[j].style.color = "white";
            }
            h1.innerHTML = "GOOD!"
            btnRematch.style.display = "inline";
        } else if (nums[i] !== parseInt(select.value)) {
            divs[i].style.color = "white";
            h1.innerHTML = "FAIL!"
        }
    };
    divs[i].addEventListener("click",func);
}

// 리매치?
const rematch = function () {
    location.reload();
};
btnRematch.addEventListener("click", rematch);


















