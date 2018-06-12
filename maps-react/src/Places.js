import React, {Component} from 'react';
import './App.css';
//esto se dejo en la vista, pero la idea es que donde esta ahora esta información sea el espacio
//donde se agreguen los lugares favoritos.

class Places extends Component {
    render(){
        const list = this.props.data.data.map((data, i)=>{
            return(
                <li key={i} >{data.Name} <a type="button" className="btn color"><i className="far fa-heart"></i></a>
                </li>        
            )
        })
        return(
            <div className= "App-container-fluid">
              <div className="App-row">
                <div className="App-col-8">
                  <ol>
                    {list}
                  </ol>
                </div>
              </div>
            </div>
        )
      }
    }
export default Places;