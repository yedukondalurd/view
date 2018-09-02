/**
 *
 * Asynchronously loads the component for ActionToolbar
 *
 */

import Loadable from "react-loadable";

export default Loadable({
  loader: () => import("./index"),
  loading: () => null
});
