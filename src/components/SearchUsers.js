import React from 'react';

export default class SearchUsers extends React.Component{
    
    search = ()=>{
        const searchName = this.input.value.trim();

        if(searchName){
            this.props.setSearchName(searchName)
        }
    }
    
    render(){
        return (
            <div className='search'>
                <h2>请输入你想要搜索的用户</h2>
                <input type="text" ref={input => this.input=input}/>
                <button onClick={this.search}>提交</button>
            </div>
        )
    }
}
