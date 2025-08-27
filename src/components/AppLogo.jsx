import { useTheme } from '@mui/material';

export default function AppLogo({ size = 40 }) {
  const theme = useTheme();
  const logoColor = theme.palette.primary.main;

  return (
    <svg width={size} height={size} viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
      {/* Background circle with subtle gradient effect */}
      <circle cx='50' cy='50' r='46' fill={logoColor} opacity='0.08' />

      {/* Main border circle */}
      <circle cx='50' cy='50' r='42' stroke={logoColor} strokeWidth='2.5' fill='none' />

      {/* Calculator/ledger base */}
      <rect x='25' y='30' width='50' height='45' rx='4' stroke={logoColor} strokeWidth='2.5' fill='none' />

      {/* Calculator display/header */}
      <rect x='29' y='34' width='42' height='8' rx='2' fill={logoColor} opacity='0.15' />

      {/* Ledger lines (accounting rows) */}
      <line x1='29' y1='48' x2='71' y2='48' stroke={logoColor} strokeWidth='1.5' opacity='0.7' />
      <line x1='29' y1='54' x2='71' y2='54' stroke={logoColor} strokeWidth='1.5' opacity='0.7' />
      <line x1='29' y1='60' x2='71' y2='60' stroke={logoColor} strokeWidth='1.5' opacity='0.7' />
      <line x1='29' y1='66' x2='71' y2='66' stroke={logoColor} strokeWidth='1.5' opacity='0.7' />

      {/* Vertical separator (like accounting columns) */}
      <line x1='55' y1='45' x2='55' y2='72' stroke={logoColor} strokeWidth='1.5' opacity='0.5' />

      {/* Dollar sign ($) symbol */}
      <path
        d='M48 20 C45 20 43 22 43 25 C43 27 45 28 47 28 L53 28 C55 28 57 30 57 32 C57 35 55 37 52 37 L48 37 M50 18 L50 39'
        stroke={logoColor}
        strokeWidth='2.5'
        strokeLinecap='round'
        fill='none'
      />

      {/* Small decorative elements (corner dots) */}
      <circle cx='20' cy='80' r='1.5' fill={logoColor} opacity='0.4' />
      <circle cx='80' cy='20' r='1.5' fill={logoColor} opacity='0.4' />
    </svg>
  );
}
