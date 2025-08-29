import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  Paper,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from '@mui/material';
import { PlayArrow as PlayIcon } from '@mui/icons-material';
import Confetti from 'react-confetti';
import useQuizStore from '../store/quizStore';
import routes from '../constants/routes';

const ConfigurationSection = ({ isLastItem = false, children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: 1,
        borderRadius: '12px',
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.main,
        marginBottom: isLastItem ? 0 : 1,
      }}
    >
      {children}
    </Box>
  );
};

export default function BalanceSheetQuizCard() {
  const theme = useTheme();

  const navigate = useNavigate();

  const { configuration, setConfiguration } = useQuizStore();

  const [showSettings, setShowSettings] = useState(false);

  const handleConfigurationToggled = () => setShowSettings((prevState) => !prevState);

  const handleConfigurationChanged = (event) => {
    const { name, checked } = event.target;

    setConfiguration({ [name]: checked });
  };

  const handleQuizModeChanged = (event) => setConfiguration({ isHardMode: event.target.value === 'hard' });

  const isAnyCategorySelected = useMemo(() => {
    return [
      configuration.includeFixedAssets,
      configuration.includeCurrentAssets,
      configuration.includeEquity,
      configuration.includeNonCurrentLiabilities,
      configuration.includeCurrentLiabilities,
    ].some(Boolean);
  }, [configuration]);

  const handleStartQuiz = () => navigate(routes.balanceSheetQuiz);

  return (
    <Paper
      sx={{
        width: {
          xs: '100%',
          md: '50%',
        },
        borderRadius: '12px',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.disabled,
        padding: 3,
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='h4'>Bilans stanja</Typography>
        <Typography variant='h6'>Klasifikacija stavki bilansa stanja</Typography>
      </Box>
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant='body1'>Za najbolje iskustvo, prilagodi kviz po svojoj mjeri</Typography>
        <Button
          size='small'
          variant='contained'
          color='secondary'
          onClick={handleConfigurationToggled}
          sx={{
            color: theme.palette.text.primary,
            minWidth: 120,
            maxWidth: 120,
          }}
        >
          Podešavanja
        </Button>
      </Box>
      <Collapse in={showSettings} timeout={400}>
        <Box sx={{ marginTop: 2 }}>
          <ConfigurationSection>
            <Typography variant='body1'>Redoslijed pitanja</Typography>
            <FormGroup sx={{ marginTop: 1 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={configuration.shuffleQuestions}
                    name='shuffleQuestions'
                    onChange={handleConfigurationChanged}
                  />
                }
                label='Promiješaj pitanja'
              />
            </FormGroup>
          </ConfigurationSection>
          <ConfigurationSection>
            <Typography variant='body1'>Nivo</Typography>
            <FormGroup sx={{ marginTop: 1 }}>
              <RadioGroup
                row
                value={configuration.isHardMode ? 'hard' : 'easy'}
                name='isHardMode'
                onChange={handleQuizModeChanged}
              >
                <FormControlLabel value='easy' control={<Radio />} label='Osnovni' />
                <FormControlLabel value='hard' control={<Radio />} label='Napredni' />
              </RadioGroup>
            </FormGroup>
          </ConfigurationSection>
          <ConfigurationSection isLastItem={true}>
            <Typography variant='body1'>Bilansne kategorije</Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={configuration.includeFixedAssets}
                    name='includeFixedAssets'
                    onChange={handleConfigurationChanged}
                  />
                }
                label='Stalna sredstva'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={configuration.includeCurrentAssets}
                    name='includeCurrentAssets'
                    onChange={handleConfigurationChanged}
                  />
                }
                label='Tekuća sredstva'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={configuration.includeEquity}
                    name='includeEquity'
                    onChange={handleConfigurationChanged}
                  />
                }
                label='Kapital'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={configuration.includeNonCurrentLiabilities}
                    name='includeNonCurrentLiabilities'
                    onChange={handleConfigurationChanged}
                  />
                }
                label='Dugoročne obaveze'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={configuration.includeCurrentLiabilities}
                    name='includeCurrentLiabilities'
                    onChange={handleConfigurationChanged}
                  />
                }
                label='Kratkoročne obaveze'
              />
            </FormGroup>
            {!isAnyCategorySelected && (
              <Typography variant='body2' sx={{ fontStyle: 'italic' }}>
                Da bi kviz imao smisla, odaberi bar jednu kategoriju.
              </Typography>
            )}
          </ConfigurationSection>
        </Box>
      </Collapse>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 2,
        }}
      >
        <Button
          variant='contained'
          size='large'
          onClick={handleStartQuiz}
          disabled={!isAnyCategorySelected}
          startIcon={<PlayIcon />}
          sx={{
            paddingY: 1.5,
            paddingX: 4,
            borderRadius: 3,
            fontWeight: 'bold',
            color: '#1D1939',
            backgroundColor: '#FEFCAE',
            border: '1px solid #FEFCAE',
          }}
        >
          Početak
        </Button>
      </Box>
    </Paper>
  );
}
