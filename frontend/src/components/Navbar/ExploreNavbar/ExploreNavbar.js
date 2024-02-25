

// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import axios from 'axios'
// import {useNavigate,Link} from 'react-router-dom'
// import {useUserAuth} from '../../../Context/UserAuthContext'
// import {useCart} from '../../../Context/CartContext'
// import {useSearch} from '../../../Context/SearchContext'


// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// const PrimarySearchAppBar = () => {
//   const [cart] = useCart();

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const navigate=useNavigate()
//  const[values,setValues]=useSearch()

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const handleSearchChange = (event) => {
//     setValues({...values,keyword:event.target.value})
//     // setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const {data} = await axios.get(`http://localhost:5000/api/course/search/${values.keyword}`);

//       setValues({...values,results:data})
//       console.log(data)
//       navigate('/search')
//       // Handle the response data (e.g., update state with search results)
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//       // Handle errors (e.g., show error message)
//     }
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' } }}
//           >
//            LearnHub
//           </Typography>
         


//           <div className="input-search-bar">
//             <form action="" onSubmit={handleSearchSubmit}>
//               <input type="text" placeholder='search' value={values.keyword} onChange={(e)=>setValues({...values,keyword:e.target.value})} />
//               <button type='submit'>Search</button>
//             </form>
//           </div>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             <MenuItem component={Link} to="/cart">
//               <IconButton size="large" color="inherit">
//                 <Badge badgeContent={cart?.length} color="error">
//                   <ShoppingCartIcon />
//                 </Badge>
//               </IconButton>
//               <p>Cart</p>
//             </MenuItem>
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls="primary-search-account-menu"
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >-
//               <AccountCircle />
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls="primary-search-account-menu-mobile"
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default PrimarySearchAppBar

// import React, { useState } from 'react';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';
// import { Badge, IconButton, Menu, MenuItem } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios'
// import { useCart } from '../../../Context/CartContext';
// import { useSearch } from '../../../Context/SearchContext';
// import './style.css'; // Assuming you have defined some CSS for styling

// const ExploreNavbar = () => {
//   const [cart] = useCart();
//   const [values, setValues] = useSearch();
//   const navigate = useNavigate();
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleSearchChange = (event) => {
//     setValues({ ...values, keyword: event.target.value });
//   };

//   const handleSearchSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const { data } = await axios.get(
//         `https://learnhub-eservices.onrender.com/api/course/search/${values.keyword}`
//       );

//       setValues({ ...values, results: data });
//       console.log(data);
//       navigate('/search');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="nav-container">
//       <div className="logo">
//         <h5>LearnHub</h5>
//       </div>
//       <div className="pages">
//         <ul className="nav-pages">
//           <Link to="/" className="link">
//             <li>HOME</li>
//           </Link>
//           <Link to="/about" className="link">
//             <li>ABOUT</li>
//           </Link>
//           <Link to="/blog" className="link">
//             <li style={{ linkStyle: 'none' }}>BLOG</li>
//           </Link>
//           <Link to="/contact" className="link">
//             <li>CONTACT</li>
//           </Link>
//         </ul>
//       </div>
//       <div className="search-container">
//         <form onSubmit={handleSearchSubmit}>
//           <input
//             type="text"
//             className="nav-input"
//             placeholder="search"
//             value={values.keyword}
//             onChange={handleSearchChange}
//           />
//           <button className="nav-search-btn">Search</button>
//         </form>
//       </div>
//       <div className="nav-cart">
//         <Badge count={cart.length}>
//           <IconButton onClick={handleMenuOpen}>
//             <ShoppingCartOutlinedIcon />
//           </IconButton>
//         </Badge>
//         <Menu
//           id="menu-appbar"
//           anchorEl={anchorEl}
//           anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           keepMounted
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           open={Boolean(anchorEl)}
//           onClose={handleMenuClose}
//         >
//           {/* Your cart items */}
//         </Menu>
//       </div>
//     </div>
//   );
// };

// export default ExploreNavbar;


import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import {  Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {  Badge } from 'antd';
import { useCart } from '../../../Context/CartContext';
import { useSearch } from '../../../Context/SearchContext';
import './style.css'; // Assuming you have defined some CSS for styling

const ExploreNavbar = () => {
  const [cart] = useCart();
  // console.log(cart.length)
  const [values, setValues] = useSearch();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSearchChange = (event) => {
    setValues({ ...values, keyword: event.target.value });
  };

  const pages = ['Home', 'About', 'Blog', 'Contact']; // Define your pages here

  return (
    <div className="nav-container">

       <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              marginLeft:{xs: 'none', md: '50px' }
            }}
          >
            LearnHub
          </Typography>

      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="open navigation menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={`/${page.toLowerCase()}`}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

    
      <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'Black',
              textDecoration: 'none',
              marginLeft:'30px'
            }}
          >
            LearnHub
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          
      {/* Search Input Bar (visible only on small screens) */}
      <Box sx={{ display: { xs: 'block', md: 'block' } }}>
        <div className="search-container">
          <input
            type="text"
            className="nav-input"
            placeholder="Search"
            value={values.keyword}
            onChange={handleSearchChange}
          />
          <button className="nav-search-btn">Search</button>
        </div>
      </Box>

      {/* Cart Icon (visible only on small screens) */}
      <Box sx={{ display: { xs: 'block', md: 'block' } }}>
        <div className="nav-cart">
          <Badge count={cart?.length}>
            <IconButton component={Link} to="/cart" color="inherit">
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Badge>
        </div>
      </Box>

{/* 
      <div className="search-container">
        <input
          type="text"
          className="nav-input"
          placeholder="Search"
          value={values.keyword}
          onChange={handleSearchChange}
        />
        <button className="nav-search-btn">Search</button>
      </div>

      <div className="nav-cart">
        <Badge count={cart.length}>
          <IconButton component={Link} to="/cart" color="inherit">
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Badge>
      </div> */}

     
    </div>
  );
};

export default ExploreNavbar;




