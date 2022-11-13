let todoList = document.getElementById('todoList')
let doingList = document.getElementById('doingList')
const doneList = document.getElementById('doneList')
const add = document.querySelector('button')


add.addEventListener('click',addTask)
function addTask(){

    //增加操作
    let task = document.createElement('li')
    let allLi = document.getElementsByTagName('li')
    task.className = "task-item"
    for(let k = 0;k < allLi.length;k++){
    task.innerHTML = '<input type = "checkbox" name="checkVal" data-index='+ k +' />' +
    '<span>' + todoList.value + '</span>' + '<button class="del">' + '</button>'} 
    // k后面： + 'value=' + todoList.value 
    //console.log(task);
    doingList.insertBefore(task,allLi[0])
    
    
    //删除操作 
    let btn = document.querySelectorAll('button')
    for(var i = 1;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
         doingList.removeChild(this.parentNode)
         //window.location.reload();
    })}


    //事件迁移
    let checkBoxs = document.getElementsByName('checkVal')
    for(var i = 0;i<checkBoxs.length;i++){
        checkBoxs[i].addEventListener('change', function() {
            //let parentLi = event.target.parentNode
            //parentLi.style.textDecoration = 'line-through'
           
            //console.log(doneTask);
            //console.log(allLi[0]);
            //for(var i = checkBoxs.length;i==0;i--){
            var id = allLi[i].childNodes[0].getAttribute('data-index')
        //}
            console.log(id);
            let doneTaskList = document.createElement('p')
            let allP = document.getElementsByTagName('p')

            doneTaskList.innerText = task.innerText
            doneTaskList.style.textDecoration = 'line-through'
            if(id == i+1){
            doneList.insertBefore(doneTaskList,allP[0])
        }
            // for(var i = 1;i<btn.length;i++){
            //     btn[i].addEventListener('click',function(){
            //          doingList.removeChild(this.parentNode)
            //     })}
    })
}



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