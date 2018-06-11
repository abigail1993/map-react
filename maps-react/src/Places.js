import React, {Component} from 'react';

class Places extends Component {
    render(){
        const list = this.props.data.map((data, i)=>{
            return(
                <li>{data.Name}</li>
            )
        })
        return(
            <div>
                <ol>
                    {list}
                </ol>
            </div>
        )

    }
}
export default Places;