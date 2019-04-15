import * as React from "react"
import ListView from "../components/ListView"

interface IState {
    dataInfo:{
        chengpinInfo:[]
    }
}

export default class List extends React.Component<{},IState>{

    constructor(props:any){
        super(props);
        this.state = {
            dataInfo:{
                chengpinInfo:[]
            }
        }
    }

    // v16.7有一个很大的更新，hooks
    public componentDidMount(){
        fetch("http://wwtliu.com/sxtstu/blueberrypai/getChengpinInfo.php")
        .then(res =>res.json())
        .then(data => {
            this.setState({
                dataInfo:data
            })
        })
    }

    public render(){
        return(
            <div>
                {
                    this.state.dataInfo.chengpinInfo.length >0 
                    ?
                    <ul>
                        {
                            this.state.dataInfo.chengpinInfo.map((element,index) => {
                                return <ListView key={index} data={ element } />
                            })
                        }
                    </ul>
                    :
                    <div>数据正在请求。。。</div>
                }
            </div>
        )
    }
}