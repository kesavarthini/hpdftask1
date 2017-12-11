import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Grid from 'material-ui/Grid';
import {GridList, GridTile} from 'material-ui/GridList';
import {Tabs, Tab, Subheader} from 'material-ui';
import TextField from 'material-ui/TextField';
import {orange500, blue500, cyan500, cyan700, grey400} from 'material-ui/styles';
import RaisedButton from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles';
import darkBaseTheme from 'material-ui/styles';
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  errorStyle: {
    color: orange500,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const customTheme = {
  palette: { 
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400
  }
};

const feedData = [
  {
  	id: 1,
    img: 'https://pbs.twimg.com/media/DQxRS38UEAAnQZq.jpg',
    title: 'Virat-Anushka',
    author: 'Ndtv',
    handle: '@ndtv',
    handle_img: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png',
  },
  {
  	id: 2,
    img: 'https://pbs.twimg.com/media/DQxRS38UEAAnQZq.jpg',
    title: 'Virat-Anushka',
    author: 'Ndtv',
    handle: '@ndtv',
    handle_img: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png',
  },
  {
  	id: 3,
    img: 'https://pbs.twimg.com/media/DQxRS38UEAAnQZq.jpg',
    title: 'Virat-Anushka',
    author: 'Ndtv',
    handle: '@ndtv',
    handle_img: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png',
  },
  {
  	id: 4,
    img: 'https://pbs.twimg.com/media/DQxRS38UEAAnQZq.jpg',
    title: 'Virat-Anushka',
    author: 'Ndtv',
    handle: '@ndtv',
    handle_img: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png',
  },
  {
  	id:5,
    img: 'https://pbs.twimg.com/media/DQxRS38UEAAnQZq.jpg',
    title: 'Virat-Anushka',
    author: 'Ndtv',
    handle: '@ndtv',
    handle_img: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png',
  }
 ]
//const theme = getMuiTheme(customTheme);

class TwitterFeed extends Component{
	render(){
		return (
			<div className="newsFeed" style={styles.root}>
				      {feedData.map((tile) => (
				      	<table style={styles.gridList} key={tile.id}>
				      	<tr >
				      	<td><span><img src={tile.handle_img}/></span>
				      	<span>{tile.handle}</span></td>
				      	</tr>
				      	<tr><td><div>{tile.title}</div></td>
				      	</tr>
				      	<tr><td><div><img src={tile.img}/></div></td>
				      	</tr>
				      	</table>
				      ))}
			</div>
		)
	}
}

class TwitterComponent extends Component{
	render(){
		return (
				<div>
			    	<Grid container className="twitterHead">
			    		<Grid item xs={5}>
			    			<Tabs>
			    				<Tab label="Home" className="tabUnderline">
			    					<div>Home</div>
			    				</Tab>
			    				<Tab label="Notifications">
			    					<div>Notifications</div>
			    				</Tab>
			    				<Tab label="Messages">
			    					<div>Messages</div>
			    				</Tab>
			    			</Tabs>
			    		</Grid>
			    		<Grid item xs={3}>
			    			<div className="twitter_icon">
			    				<img height="30px" width="30px" src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Twitter-icon.png"/>
			    			</div>
			    		</Grid>
			    		<Grid item xs={4}>
			    			<TextField/>
			    			<button width="100px" height="30px" label="Tweet">Tweet</button>
			    		</Grid>
			    	</Grid>
			    	<Grid container className="twitterHead">
			    		<Grid item xs={2}>
			    			<div className="profile_icon">
			    				<img height="200px" width="300px" src="http://preen.inquirer.net/files/2017/04/Emma-Watson_HighestPaid-e1492474736198.jpg"/>
			    			</div>
			    			<div>@harsha.nithu</div>
			    			<div>Keshu</div>
			    			<div>
			    				<table>
			    					<tr>
			    					<td><b>Tweets</b></td>
			    					<td><b>Following</b></td>
			    					</tr>
			    					<tr>
			    					<td>0</td>
			    					<td>20</td>
			    					</tr>
			    				</table>
			    			</div>
			    		</Grid>
			    		<Grid item xs={8}>
			    			<TwitterFeed />
			    		</Grid>
			    		<Grid item xs={2}>
			    			<div>Who to Follow</div>
			    			<ul>
			    				<li>Revathy</li>
			    				<li>Kesh</li>
			    				<li>Footru</li>
			    			</ul>
			    		</Grid>
			    	</Grid>
			    </div>
			);
	}
}


const searchData = [
  {
  	id: 1,
    img: 'https://pbs.twimg.com/media/DQfvHiuUIAIW0GN.jpg',
    title: 'How smart move by @ceo_uidai if my mobile is disconnected without @Aadhar linkage then automatically my Bank access for digital transaction, other allied services, ticketing,travel,online shopping will suffer automatically',
    author: 'Ndtv',
    handle: '@ndtv',
    handle_img: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png',
  },
  {
  	id: 2,
    img: 'https://pbs.twimg.com/media/DQwNbkCVAAAhbdr.jpg',
    title: 'Aadhar to be linked to Rajinikant by December 31st 2017 to avoid deactivation. ',
    author: 'Ndtv',
    handle: '@ndtv',
    handle_img: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png',
  },
  {
  	id: 3,
    img: 'https://pbs.twimg.com/media/DQxRS38UEAAnQZq.jpg',
    title: 'Friend in Surat says when he pressed button on EVM, his Aadhar was linked to his mobile phone number, and Paytm wallet linked with that number automatically transferred 500 rupees to BJP.',
    author: 'z',
    handle: '@z',
    handle_img: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png',
  },
  {
  	id: 4,
    img: 'https://pbs.twimg.com/media/DQfvHiuUIAIW0GN.jpg',
    title: 'Do not share your aadhar',
    author: 'y',
    handle: '@y',
    handle_img: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png',
  },
  {
  	id:5,
    img: 'https://pbs.twimg.com/media/DQxRS38UEAAnQZq.jpg',
    title: 'Virat-Anushka',
    author: 'Ndtv',
    handle: '@ndtv',
    handle_img: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png',
  }
 ]
//const theme = getMuiTheme(customTheme);

class TwitterSearchFeed extends Component{
	render(){
		return (
			<div className="newsFeed" style={styles.root}>
				      {searchData.map((tile) => (
				      	<table style={styles.gridList} key={tile.id}>
				      	<tr >
				      	<td><span><img src={tile.handle_img}/></span>
				      	<span>{tile.handle}</span></td>
				      	</tr>
				      	<tr><td><div>{tile.title}</div></td>
				      	</tr>
				      	<tr><td><div><img src={tile.img}/></div></td>
				      	</tr>
				      	</table>
				      ))}
			</div>
		)
	}
}

class TwitterSearchComponent extends Component{
	render(){
		return (
				<div>
			    	<Grid container className="twitterHead">
			    		<Grid item xs={5}>
			    			<Tabs>
			    				<Tab label="Home" className="tabUnderline">
			    					<div>Home</div>
			    				</Tab>
			    				<Tab label="Notifications">
			    					<div>Notifications</div>
			    				</Tab>
			    				<Tab label="Messages">
			    					<div>Messages</div>
			    				</Tab>
			    			</Tabs>
			    		</Grid>
			    		<Grid item xs={3}>
			    			<div className="twitter_icon">
			    				<img height="30px" width="30px" src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Twitter-icon.png"/>
			    			</div>
			    		</Grid>
			    		<Grid item xs={4}>
			    			<TextField/>
			    			<button width="100px" height="30px" label="Tweet">Tweet</button>
			    		</Grid>
			    	</Grid>
			    	<div className="bgcolor">
			    	Aadhar
			    	</div>
			    	<div>
			    		<Tabs>
		    				<Tab label="Top" className="tabUnderline">
		    					<div>Top</div>
		    				</Tab>
		    				<Tab label="Latest">
		    					<div>Latest</div>
		    				</Tab>
		    				<Tab label="People">
		    					<div>People</div>
		    				</Tab>
		    				<Tab label="Photos">
		    					<div>Photos</div>
		    				</Tab>
		    				<Tab label="Videos">
		    					<div>Videos</div>
		    				</Tab>
		    				<Tab label="News">
		    					<div>News</div>
		    				</Tab>
		    			</Tabs>
			    	</div>
			    	<Grid container className="twitterHead">
			    		<Grid item xs={2}>
			    			<div>
			    				<table>
			    					<tr>
			    					<td><b>Search Filters</b></td>
			    					<td><a>Show</a></td>
			    					</tr>
			    				</table>
			    			</div>
			    		</Grid>
			    		<Grid item xs={8}>
			    			<TwitterSearchFeed />
			    		</Grid>
			    		<Grid item xs={2}>

			    		</Grid>
			    	</Grid>
			    </div>
			);
	}
}

if(typeof window !== 'undefined' && document.getElementById('twitter')) {
	ReactDOM.render(<TwitterComponent />, document.getElementById('twitter'));
}
if(document.getElementById('twitterSearch') && document.getElementById('twitterSearch')){
	ReactDOM.render(<TwitterSearchComponent />, document.getElementById('twitterSearch'));
}

export default TwitterComponent;