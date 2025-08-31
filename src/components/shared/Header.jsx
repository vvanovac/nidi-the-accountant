import { useNavigate } from 'react-router-dom';
import { AppBar, Button, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import routes from '../../constants/routes';

export default function Header() {
  const navigate = useNavigate();

  const handleHomeButtonClicked = () => navigate(routes.home);
  return (
    <AppBar position='static' sx={{ marginBottom: 3 }}>
      <Toolbar>
        <Button color='secondary' startIcon={<HomeIcon />} onClick={handleHomeButtonClicked}>
          Početna
        </Button>
      </Toolbar>
    </AppBar>
  );
}
