import React from 'react'
import {createRoot }from 'react-dom/client'
import './todolist.css'
const container = document.getElementById('root')
const root = createRoot(container)
class TodoList extends React.Component{
    constructor(props){
        super(props)

        //初始化list数组
        this.state = {
            list:[
                // {
                //     content:'高数考试',
                //     ischecked:true
                // },
                // {
                //     content:'化学考试',
                //     ischecked:true
                // },   
                // {
                //     content:'英语水平测试',
                //     ischecked:true
                // }
            ],

            //文本框内容
            txt : ''
        }
    }

    //获取文本框内容
    getConTent = (e) => {
        const{name,value} = e.target
        this.setState(
            {
                [name]:value
            }
        )
        }

    //添加事项之待办事项
    addTodo = () =>   {
       const {list,txt} = this.state
       if(txt === ''){
        //可不能输入空的内容哦
        alert('去你🐎的🐕东西不输内容')
        return
    }
        //创建新数组
        const newList = [{
            content: txt,
            ischecked: false
        },...list]

        //更新数组
        this.setState(
            {
                list:newList,
                txt : ''
            }
        )
        //console.log(newList);
        
    }

    //删除待办事项
    deleteTodo = (index) => {
            const newList = this.state.list
            newList.splice(index,1)
            this.setState({
                list:newList
            })
        }

    //删除所有事项
    deleteAlltoDo = () => {
        const newlist = this.state.list
        this.setState({
            list:newlist.filter(item => item.ischecked ===true)
        })
    }

    //勾选来完成待办事项的迁移
    moveTodo = (index) => {
        const newList = this.state.list
        newList[index].ischecked = !newList[index].ischecked
        this.setState({
            list:newList
       })
    }
    

    //渲染待办事项区域
    renderTodoList(){
        const {list} = this.state
            return list.length === 0
        ? (<div className='no-thing'><strong>Don't go to seed!</strong></div>)
        : (
            <ul>
                {
                this.state.list.map((value,index) => {
                    if(!value.ischecked){
                    return (
                        <li>
                            <input key={index} 
                            type='checkbox'
                            checked = {value.ischecked}
                            onChange={this.moveTodo.bind(this,index)}></input>
                            {value.content}
                            <button onClick={this.deleteTodo.bind(this,index)}>删除</button>
                        </li>
                    )
                    }
                })
            }
            </ul> 
        )
    }

        
    //渲染已完成事项区域
    renderDonelist(){
        //const {list} = this.state
            return(
            <div>
                <div className='no-thing'><strong>To do what you want!</strong> </div>
            <ul>    
                {
                this.state.list.map((value,index) => {
                    if(value.ischecked){
                    return (
                        <li>
                            <input key={index} 
                            type='checkbox'
                            checked = {value.ischecked}
                            onChange={this.moveTodo.bind(this,index)}></input>
                            <span style={{textDecoration:'line-through'}}>
                            {value.content}</span>
                        </li>
                    )
                    }
                })
            }
            </ul> 
             </div>
        )
    }

    //渲染整体结构
    render(){
        const {txt} = this.state
        return(
           <div>
            <div className='topBox'>
                <h1>TodoList</h1>
                <input type='text' name='txt' value={txt} onChange={this.getConTent}></input>
                <button onClick={this.addTodo}>Add</button>
            </div>

            {/*待办 */}
            <div className='doingBox'>
                <h2 className='h2'>Tings haven't been done</h2>
                <button className='deleteAllbtn' onClick={this.deleteAlltoDo}>Delete All</button>           
                <hr></hr>
                {this.renderTodoList()}
            </div>

            {/*已办 */}
            <div className='doneBox'>
                <h2>Things have been done</h2>
                <hr></hr>
                {this.renderDonelist()}
            </div>
           </div>
        )
    }
    
}
export default TodoList