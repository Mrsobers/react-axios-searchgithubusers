import React from 'react'
import axios from 'axios'

class UsersList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            init:true,
            loading:false,
            users:null,
            errMsg:null
        }
    }
    //组件接受新的属性时
    componentWillReceiveProps(newProps){
        const {searchName} = newProps;
        this.setState({
            init:false,
            loading:true,
        })
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then(response=>{
                const result = response.data;
                console.log(result);
                let users = result.items.map(item=>({name:item.login,avatarUrl:item.avatar_url,htmlUrl:item.html_url}));
                this.setState({loading:false,users})
            }).catch(error=>{
                this.setState({errMsg:error.message})
            })
    }

    render() {
        const {init,loading,users,errMsg} = this.state;
        
        if(init){
            return <h2>请输入你想搜索的关键字</h2>
        }else if(loading){
            return <h2>正在搜索，请等待...</h2>
        }else if(errMsg){
            return <h2>{errMsg}</h2>
        }else {
            return (
                <div className='row'>
                    {
                        users.map((user,index)=>(
                            <div className='user-item' key={index}>
                                <div><img src={user.avatarUrl} alt="..." style={{width:100}}/></div>
                                <p><a href={user.htmlUrl} target='_black'>{user.name}</a></p>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}
export default UsersList
