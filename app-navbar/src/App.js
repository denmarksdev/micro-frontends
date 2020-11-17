import React from 'react'
import { Link, BrowserRouter} from 'react-router-dom'

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {useStyles} from './AppStyles'

const App = ({ name }) => {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function ListItemLink(props) {
    return <ListItem button component={Link} {...props} />;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
             Microfrontends CROS & FX
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
          <List>
          <BrowserRouter>
                <ListItemLink button key='Home' to='/' >
                  <ListItemIcon> <InboxIcon /></ListItemIcon>
                  <ListItemText primary='Home' />
                </ListItemLink>
                <ListItemLink button key='Customer' to='/customer'  >
                  <ListItemIcon> <InboxIcon /></ListItemIcon>
                  <ListItemText primary='Customer' />
                </ListItemLink>
                </BrowserRouter>
            </List>
        <Divider />
        <List>
          <BrowserRouter>
                <ListItemLink button key='Routes' to='/Routes'  >
                      <ListItemIcon> <InboxIcon /></ListItemIcon>
                      <ListItemText primary='Routes' />
                 </ListItemLink>
                 <ListItemLink button key='Route' to='/route'  >
                      <ListItemIcon> <InboxIcon /></ListItemIcon>
                      <ListItemText primary='Route' />
                 </ListItemLink>
                 <ListItemLink button key='Lazy' to='/app-lazy'  >
                      <ListItemIcon> <InboxIcon /></ListItemIcon>
                      <ListItemText primary='Lazy' />
                 </ListItemLink>
            </BrowserRouter>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}

  


  // <BrowserRouter>
  //   <header>
  //     <h1>{name}</h1>
  //     <nav>
  //       <ul>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/customer">Customer</Link>
  //         </li>
  //         <li>
  //           <Link to="/parcel">Parcel</Link>
  //         </li>
  //         <li>
  //           <Link to="/routes">Routes</Link>
  //         </li>
  //         <li>
  //           <Link to="/route">Route</Link>
  //         </li>
  //         <li>
  //           <Link to="/app-lazy">Lazy</Link>
  //         </li>
  //       </ul>
  //     </nav>
  //   </header>
  // </BrowserRouter>
// )

export default App