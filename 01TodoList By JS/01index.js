let todoList = document.getElementById('todoList')
let doingList = document.getElementById('doingList')
const doneList = document.getElementById('doneList')
const add = document.querySelector('button')
//const btn = document.querySelectorAll('button')
//let task = document.createElement('li')


add.addEventListener('click',addTask)
function addTask(){
    let task = document.createElement('li')
    let allLi = document.getElementsByTagName('li')
    task.className = "task-item"
    task.innerHTML = '<input type = "checkbox" name="checkVal" value=' + todoList.value + ' />' +
    '<span>' + todoList.value + '</span>' + '<button class="del">' + '</button>' 
    //console.log(task);
    doingList.insertBefore(task,allLi[0])
}
//console.log(btn);
    window.btn = document.querySelectorAll('button')
    for(var i = 1;i<btn.length;i++){
    btn[i].addEventListener('click',delTask)
}
function delTask(){ 
    console.log(btn);
}



// let checkBoxs = document.getElementsByName('checkVal')
// for (var i = 0; i < checkBoxs.length; i++) {
//     //因为都是个数组，所以获取批量的时间，然后再获取当前的checkbox的时间
//      //然后再得到他的父节点，给父节点加上字母截断的效果，然后再把这个从未完成中删除，添加进已完成中
//      checkBoxs[i].addEventListener('change', function(event) {
//      //var parentLi = this.parentNode; 
//      var parentLi = event.target.parentNode;
//      //console.log(parentLi);
//      parentLi.style.textDecoration = "line-through"
//      finishedArrs.push(parentLi.innerText)
//      for (var j = 0; j < arrs.length; j++) {
//          if (arrs[j] == parentLi.innerText) {
//              console.log(j)
//              //查到当前选中的是数组中的第几个，然后从未完成中删掉，加入已完成
//              arrs.splice(j, 1)
//              localStorage.setItem('unfinished', arrs)
//              //这一句是强制页面刷新
//              window.location.reload();
//          }
//      }
//      localStorage.setItem('finished', finishedArrs)
//      })
//     }