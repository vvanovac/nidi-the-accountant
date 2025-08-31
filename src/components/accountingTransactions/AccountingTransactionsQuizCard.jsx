import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Checkbox, Collapse, FormControlLabel, FormGroup, Paper, Typography, useTheme } from '@mui/material';
import QuizCardSettingsButton from '../shared/QuizCardSettingsButton';
import QuizCardConfigurationSection from '../shared/QuizCardConfigurationSection';
import StartQuizButton from '../shared/StartQuizButton';
import accountingTransactionsQuizStore from '../../store/accountingTransactionsQuizStore';
import routes from '../../constants/routes';

export default function AccountingTransactionsQuizCard() {
  const theme = useTheme();

  const navigate = useNavigate();

  const { configuration, setConfiguration } = accountingTransactionsQuizStore();

  const [showSettings, setShowSettings] = useState(false);

  const handleConfigurationToggled = () => setShowSettings((prevState) => !prevState);

  const handleConfigurationChanged = (event) => {
    const { name, checked } = event.target;

    setConfiguration({ [name]: checked });
  };

  const handleQuizStarted = () => navigate(routes.accountingTransactionsQuiz);

  return (
    <Paper
      sx={{
        width: {
          xs: '100%',
          md: '55%',
        },
        borderRadius: '12px',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.disabled,
        padding: 3,
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='h4'>Knjigovodstvene promjene</Typography>
        <Typography variant='h6'>Vježba knjiženja (nasumičnih) knjigovodstvenih promjena</Typography>
      </Box>
      <QuizCardSettingsButton onConfigurationToggled={handleConfigurationToggled} />
      <Collapse in={showSettings} timeout={400}>
        <Box sx={{ marginTop: 2 }}>
          <QuizCardConfigurationSection title='Redoslijed promjena'>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={configuration.shuffleQuestions}
                    name='shuffleQuestions'
                    onChange={handleConfigurationChanged}
                  />
                }
                label='Promiješaj promjene'
              />
            </FormGroup>
          </QuizCardConfigurationSection>
        </Box>
      </Collapse>
      <StartQuizButton onQuizStarted={handleQuizStarted} />
    </Paper>
  );
}
