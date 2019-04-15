import * as React from "react"

interface IProps {
    data:{
        title:string,
        content:string,
        img:string
    },
}

export default class ListView extends React.Component<IProps>{
    
    public render(){
        return (
            <div>
                <p>{ this.props.data.title }</p>
                <p>{ this.props.data.content }</p>
                <p>{ this.props.data.img }</p>
            </div>
        )
    }
}
  