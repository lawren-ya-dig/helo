import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



class Nav extends Component {
    


      nextPath(path) {
          this.props.history.push(path);
      }

    render() {
        

        return ( 
            <div>
                <button
                    onClick={() => this.nextPath('/dashboard')}> Home
                </button>
                <button
                    onClick={() => this.nextPath('/new')}> New Post
                </button>
                <button
                    onClick={() => this.nextPath('/')}> Logout
                </button>
            </div>
         );
    }
}
 
export default withRouter (Nav);