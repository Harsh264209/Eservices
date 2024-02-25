

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { Link, useNavigate } from 'react-router-dom';
// import { useUserAuth } from '../../Context/UserAuthContext';

// const pages = ['About', 'Explore', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const { auth, logout } = useUserAuth();
//   const Navigate = useNavigate();

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const handleLogout = () => {
//     logout();
//     // Redirect to login page after logout
//   };

//   const getAvatarContent = () => {
//     if (auth.user) {
//       const userName = auth.user.username; // Extracting username from the user object
//       const firstLetter = userName.charAt(0).toUpperCase();
//       return <Avatar alt="User Avatar">{firstLetter}</Avatar>;
//     } else {
//       return null;
//     }
//   };

//   const handleLogin = () => {
//     Navigate('/login');
//   };

//   return (
//     <AppBar position="static" sx={{ boxShadow: "none" }}>
//       <Container maxWidth="xl" sx={{ backgroundColor: "white", color: "black" }}>
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontWeight: 700,
//               letterSpacing: '.1rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LearnHub
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//                  {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}

            
           
//           {/* </Box> */}
//             </Menu>
//           </Box>

//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontWeight: 700,
//               letterSpacing: '.1rem',
//               color: 'Black',
//               textDecoration: 'none',
//             }}
//           >
//             LearnHub
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 component={Link}
//                 to={`/${page.toLowerCase()}`}
//                 sx={{ my: 2, color: 'black', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           {auth.user ? (
//             <>
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   {getAvatarContent()}
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: '45px' }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => {
//                   if (setting === 'Logout') {
//                     return (
//                       <MenuItem key={setting} onClick={handleLogout}>
//                         <Typography textAlign="center">{setting}</Typography>
//                       </MenuItem>
//                     );
//                   } else if (setting === 'Dashboard') {
//                     return (
//                       <MenuItem
//                         key={setting}
//                         onClick={() =>
//                           Navigate(
//                             auth.user.role === 'user'
//                               ? '/dashboard/user'
//                               : '/dashboard/admin'
//                           )
//                         }
//                       >
//                         <Typography textAlign="center">{setting}</Typography>
//                       </MenuItem>
//                     );
//                   } else {
//                     return (
//                       <MenuItem key={setting} onClick={handleCloseUserMenu} component={Link} to={`/${setting.toLowerCase()}`}>
//                         <Typography textAlign="center">{setting}</Typography>
//                       </MenuItem>
//                     );
//                   }
//                 })}
//               </Menu>
//             </>
//           ) : (
//             <>
//               <Button color="inherit" onClick={() => Navigate('/register')} sx={{ backgroundColor: "none", padding: "10px 16px", border: "1px solid black", borderRadius: "16px", fontWeight: "700", marginRight: "6px", textTransform: "capitalize" }} >
//                 Register
//               </Button>
//               <Button onClick={handleLogin} color="inherit" sx={{ backgroundColor: "none", padding: "10px 16px", border: "1px solid black", borderRadius: "16px", fontWeight: "700", textTransform: "capitalize" }} >
//                 Login
//               </Button>
//             </>
//           )}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;




import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../Context/UserAuthContext';
import style from './Style.css'

const pages = ['About', 'Explore', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { auth, logout } = useUserAuth();
  const Navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logout();
    // Redirect to login page after logout
  };

  const getAvatarContent = () => {
    if (auth.user) {
      const userName = auth.user.username; // Extracting username from the user object
      const firstLetter = userName.charAt(0).toUpperCase();
      return <Avatar alt="User Avatar">{firstLetter}</Avatar>;
    } else {
      return null;
    }
  };

  const handleLogin = () => {
    Navigate('/login');
  };

  return (
    <AppBar className='appbar' position="stati" sx={{ boxShadow: "none"}}>
      <Container maxWidth="xl" sx={{ backgroundColor: "white", color: "black" }}>
        <Toolbar disableGutters>
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
            }}
          >
            LearnHub
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
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

          {auth.user ? (
            <>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {getAvatarContent()}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => {
                  if (setting === 'Logout') {
                    return (
                      <MenuItem key={setting} onClick={handleLogout}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    );
                  } else if (setting === 'Dashboard') {
                    return (
                      <MenuItem
                        key={setting}
                        onClick={() =>
                          Navigate(
                            auth.user.role === 'user'
                              ? '/dashboard/user'
                              : '/dashboard/admin'
                          )
                        }
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    );
                  } else {
                    return (
                      <MenuItem key={setting} onClick={handleCloseUserMenu} component={Link} to={`/${setting.toLowerCase()}`}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    );
                  }
                })}
              </Menu>
            </>
          ) : (
            <>
              <Button className='register-btn' color="inherit" onClick={() => Navigate('/register')} sx={{ backgroundColor: "none", padding: "10px 16px", border: "1px solid black", borderRadius: "16px", fontWeight: "700", marginRight: "6px", textTransform: "capitalize" }} >
                Register
              </Button>
              <Button className='login-btn' onClick={handleLogin} color="inherit" sx={{ backgroundColor: "none", padding: "10px 16px", border: "1px solid black", borderRadius: "16px", fontWeight: "700", textTransform: "capitalize" }} >
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { Link, useNavigate } from 'react-router-dom';
// import { useUserAuth } from '../../Context/UserAuthContext';

// const pages = ['About', 'Explore', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const { auth, logout } = useUserAuth();
//   const Navigate = useNavigate();

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const handleLogout = () => {
//     logout();
//     // Redirect to login page after logout
//   };

//   const getAvatarContent = () => {
//     if (auth.user) {
//       const userName = auth.user.username; // Extracting username from the user object
//       const firstLetter = userName.charAt(0).toUpperCase();
//       return <Avatar alt="User Avatar">{firstLetter}</Avatar>;
//     } else {
//       return null;
//     }
//   };

//   const handleLogin = () => {
//     Navigate('/login');
//   };

//   return (
//     <AppBar position="static" sx={{ boxShadow: "none" }}>
//       <Container maxWidth="xl" sx={{ backgroundColor: "white", color: "black" }}>
//         <Toolbar disableGutters>
//           <IconButton
//             size="large"
//             aria-label="menu"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             aria-hidden="false"
//             onClick={handleOpenNavMenu}
//             color="inherit"
//             sx={{
//               display: { md: 'none' },
//               paddingRight: { xs: 0 },
//               overflow:{xs:'none'}
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component={Link}
//             to="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontWeight: 700,
//               letterSpacing: '.1rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LearnHub
//           </Typography>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 component={Link}
//                 to={`/${page.toLowerCase()}`}
//                 sx={{ my: 2, color: 'black', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={`/${page.toLowerCase()}`}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           {auth.user ? (
//             <>
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   {getAvatarContent()}
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: '45px' }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => {
//                   if (setting === 'Logout') {
//                     return (
//                       <MenuItem key={setting} onClick={handleLogout}>
//                         <Typography textAlign="center">{setting}</Typography>
//                       </MenuItem>
//                     );
//                   } else if (setting === 'Dashboard') {
//                     return (
//                       <MenuItem
//                         key={setting}
//                         onClick={() =>
//                           Navigate(
//                             auth.user.role === 'user'
//                               ? '/dashboard/user'
//                               : '/dashboard/admin'
//                           )
//                         }
//                       >
//                         <Typography textAlign="center">{setting}</Typography>
//                       </MenuItem>
//                     );
//                   } else {
//                     return (
//                       <MenuItem key={setting} onClick={handleCloseUserMenu} component={Link} to={`/${setting.toLowerCase()}`}>
//                         <Typography textAlign="center">{setting}</Typography>
//                       </MenuItem>
//                     );
//                   }
//                 })}
//               </Menu>
//             </>
//           ) : (
//             <>
//               <Button color="inherit" onClick={() => Navigate('/register')} sx={{ backgroundColor: "none", padding: "10px 16px", border: "1px solid black", borderRadius: "16px", fontWeight: "700", marginRight: "6px", textTransform: "capitalize" }} >
//                 Register
//               </Button>
//               <Button onClick={handleLogin} color="inherit" sx={{ backgroundColor: "none", padding: "10px 16px", border: "1px solid black", borderRadius: "16px", fontWeight: "700", textTransform: "capitalize" }} >
//                 Login
//               </Button>
//             </>
//           )}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;

