const nums = [];
for (let i = 0; i<10; i++) {
    nums[i] = i+1
}
let temp;
console.log(nums);

for (let i = 0; i<nums.length; i++) {
    const random = Math.floor(Math.random()*10)
    temp = nums[i];
    console.log(random);
    nums.splice(i, 1, nums[random]);
    nums[random] = temp;
};


console.log(nums);


//
for (let i = 0; i<nums.length; i++) {
    const body = document.querySelector("body");
    const divCreate = document.createElement("div");
    divCreate.innerHTML = nums[i];
    body.appendChild(divCreate);
}






