import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import App from "../App.tsx";
import {Navbar} from "../components/navbar/Navbar.tsx";
import ListProducts from "../pages/produtos/ListProducts.tsx";
const ComponentPreviews = () => {
  return (
      <Previews palette={<PaletteTree/>}>
        <ComponentPreview path="/App">
          <App/>
        </ComponentPreview>
        <ComponentPreview path="/Navbar">
          <Navbar/>
        </ComponentPreview>
        <ComponentPreview path="/ListProducts">
          <ListProducts/>
        </ComponentPreview>
      </Previews>
  );
};

export default ComponentPreviews;