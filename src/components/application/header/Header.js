import React, { Component } from 'react';
import axios from 'axios';
import Mobile from './Mobile';
import TopBar from './TopBar';
import Secondary from './Secondary';
import Primary from './Primary';
// import PushyPanel from './PushyPanel';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
      const url = 'http://localhost:3001/api/v1/utility/season_menu';
  
      axios.get(url)
      .then((response) => {
        console.log(response)
        this.setState({
          season: response.data
        })
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      });
    }

    render() { 
        return (
            <div>
                <Mobile />
                <header className="header header--layout-1">
                    <TopBar />
                    <Secondary />
                    <Primary 
                        season={this.state.season}
                    />
                </header>
            </div>
        );
    }
}
 
export default Header;