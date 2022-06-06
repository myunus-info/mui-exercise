import Accordions from './components/Accordions/Accordions';
import AlertComp from './components/AlertComp/AlertComp';
// import Appbar from './components/Appbar/Appbar';
import Autocompletes from './components/Autocompletes/Autocompletes';
import Boxes from './components/Boxes/Boxes';
import Buttons from './components/Button/Button';
import Cards from './components/Cards/Cards';
import Containers from './components/Containers/Containers';
import DataGridComp from './components/DataGridComp/DataGridComp';
import Dialogs from './components/Dialogs/Dialogs';
import DrawerComp from './components/DrawerComp/DrawerComp';
import GridLayout from './components/GridLayout/GridLayout';
// import ImagesLists from "./components/ImagesLists/ImagesLists";
import Links from './components/Links/Links';
import ListNested from './components/ListNested/ListNested';
import Lists from './components/Lists/Lists';
import Menus from './components/Menus/Menus';
import Modals from './components/Modals/Modals';
import Progressbar from './components/Progressbar/Progressbar';
import RatingComp from './components/RatingComp/RatingComp';
import ResponsiveNavbar from './components/ResponsiveNavbar/ResponsiveNavbar';
import SnackbarComp from './components/SnackbarComp/SnackbarComp';
import StyledComp from './components/StyledComp/StyledComp';
import Tabss from './components/Tabss/Tabss';
import TextFields from './components/TextFields/TextFields';
import Theming from './components/Theming/Theming';
import Texting from './components/Typography/Typography';

function App() {
  return (
    <>
      <ResponsiveNavbar />
      {/* <Appbar /> */}
      <Tabss />
      <Dialogs />
      <Modals />
      <Links />
      <Boxes />
      <Containers />
      <Lists />
      <ListNested />
      <Accordions />
      <Autocompletes />
      <Cards />
      <Menus />
      <Texting />
      <Buttons />
      <TextFields />
      <GridLayout />
      <DrawerComp />
      <AlertComp />
      <SnackbarComp />
      <Progressbar />
      <RatingComp />
      {/* <ImagesLists /> */}
      <DataGridComp />
      <StyledComp />
      <Theming />
    </>
  );
}

export default App;
