import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <h1>Current Theme: {theme}</h1>;
}

export default Toolbar;
