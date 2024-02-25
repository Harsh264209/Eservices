

import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemButton from '@mui/material/ListItemButton'; // Import ListItemButton
import ListItemText from '@mui/material/ListItemText';
// Import the components you want to render
import CategoryComponent from '../../pages/AdminDashboard/Category';
// import DashboardComponent from '../../pages/AdminDashboard/Dashboard';
// import OrdersComponent from '../../pages/AdminDashboard/Orders';
import CustomersComponent from '../../pages/AdminDashboard/Users';
import ProductComponent from '../../pages/AdminDashboard/Courses';
import CreateProductComponent from '../../pages/AdminDashboard/CreateCourse/CreateCourse';
import CreateCategory from '../../pages/AdminDashboard/CreateCategory'
import AllOrdersComponent from '../../pages/AdminDashboard/Orders';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [selectedComponent, setSelectedComponent] = React.useState('Dashboard');

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Function to handle list item click and change the selected component
  const handleListItemClick = (component) => {
    setSelectedComponent(component);
  };

  // Map of list items to render specific components
  const mainListItems = [
    { text: 'Orders', component: <AllOrdersComponent /> },

    { text: 'Users', component: <CustomersComponent /> },
    { text: 'Courses', component: <ProductComponent /> },
    { text: 'Create Product', component: <CreateProductComponent /> },
    { text: 'Category', component: <CategoryComponent /> },
    { text: 'Create category', component: <CreateCategory /> },
  ];

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Admin Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems.map((item, index) => (
              <ListItemButton key={index} onClick={() => handleListItemClick(item.text)}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
             {selectedComponent === 'Orders' && <AllOrdersComponent />}
        
             {selectedComponent === 'Create Product' && <CreateProductComponent />}  
             {selectedComponent === 'Courses' && <ProductComponent />} 
            {selectedComponent === 'Users' && <CustomersComponent />}
            {selectedComponent === 'Category' && <CategoryComponent />}
            {selectedComponent === 'Create category' && <CreateCategory />}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}





