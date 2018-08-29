/**
 *
 * Asynchronously loads the component for SummarySensor
 *
 */

import Loadable from "react-loadable";

export default Loadable({
  loader: () => import("./index"),
  loading: () => null
});
