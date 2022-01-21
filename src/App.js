import HomePage from './pages/HomePage';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import routes from './config/routes'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes
} from 'react-router-dom'
// 待引入Rouate

const AppRoutes = () => {
  let approutes = useRoutes(routes)
  return approutes
}

function App(props) {
  console.log('props in App', props);
  return (
    <>
    <Router>
      <AppRoutes/>
      {/* <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/about" exact element={<About/>} />
        <Route path="/services" exact element={<Services/>} />
        <Route path="/contact" exact element={<Contact/>} /> 
      </Routes>  */}
      {/* Refactor for using routes config
          {routes.map((route, i) => {
          const { path, exact, routes } = route;
          return (
            <Route
              key={i}
              path={path}
              exact={exact}
              render={(routeProps) => (
                <route.component routes={routes} {...routeProps} />
              )}
            />
          );
        })} */}
    </Router>
    </>
    );
}

export default App;
