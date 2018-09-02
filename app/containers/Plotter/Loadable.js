/**
 *
 * Asynchronously loads the component for Plotter
 *
 */

import Loadable from "react-loadable";

export default Loadable({
  loader: () => import("./index"),
  loading: () => null
});
