/**
 *
 * Asynchronously loads the component for SummaryZone
 *
 */

import Loadable from "react-loadable";

export default Loadable({
  loader: () => import("./index"),
  loading: () => null
});
