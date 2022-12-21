import Router from './router/Routes'
import './App.css';
import ThemeProvider from './theme';
import ScrollToTop from './utils/components/ScrollToTop';

const App = () => {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
}

export default App;
