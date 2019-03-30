import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Badge from '@material-ui/icons/Badge';
import IconButton from '@material-ui/icons/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const styles = {
    bar :{
        marginBottom:20
    },
    title:{
	   marginLeft:20,
       flexGrow: 1
    }
};

class Header extends React.Component {
    state = {
        anchorEl :null,
        open :false
    }

    menuOpen = (e) => {
        this.setState ({
            anchorEl :e.currentTarget,
            open :true
        })
    }

    menuClose = () => {
        this.setState({
            anchorEl : null,
            open :false
        });
    }
    render() {
        return (
        	<AppBar position="static" style={styles.bar}>
        		<ToolBar>
                    <Badge color="secondary" badgeContent={this.props.count}>
            		      <DoneAllIcon style={styles.logo} />
                    </Badge>
        			<Typography variant="h6" color="inherit"> 
	        			Todo List
                	</Typography>
                    <IconButton color="inherit" onClick={this.menuOpen}>
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={this.menuClose} >
                        <MenuItem onClick={this.menuClose} >
                            Clear All Done
                        </MenuItem>
        		</ToolBar>
        	</AppBar>
        )
    }
}

export default Header;