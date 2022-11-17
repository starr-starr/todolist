#React完成的Todolist<hr>
1.这是我于2022.11.13初步学习完React后做出的Todolist，包含增加待办事项、勾选实现未完到已完、删除所有待办事项<br>
2.在组件方面，我将实现所有功能的方法放在了同一个组件中，从而避免了繁琐的组件之间的通讯（其实是因为懒）；等以后学精通了再回头来拆分各个方法并借此锻炼组件之间的通讯<br>
3.解构赋值，当一个量用到多次时，这样可以少写一些...<br>
4.通过写这个todolist，复习到了对数组中元素的一些操作：<br>
  >1>.split:<br>
  >>str.split([separator [, limit] ])<br>
  >>其中separator指拆分标志，limit是一个整数，限定返回的分割片段数量，返回以数组形式返回<br>
  >2>.splice:<br>
  >>Array.prototype.splice(start, deleteCount, item1, item2, itemN)<br>
  >>start指定修改的开始位置（从 0 计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从 -1 计数，这意味着 -n 是倒数第 n 个 元素并且等价于 array.length-n）；如果负数的绝对值大于数组的长度，则表示开始位置为第 0 位。<br>
  >>deleteCount为整数，表示要移除的数组元素的个数。如果 deleteCount 大于 start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。如果 deleteCount 被省略了，或者它大于或者等于start之后的所有元素的数量，那么start之后数组的所有元素都会被删除。如果 deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。<br>
  >>itemN为要添加进数组的元素，从start 位置开始。如果不指定，则 splice() 将只删除数组元素。<br>
  >3>.filter:<br>
  >>较多，如下：<br>
  >>https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter<br>

