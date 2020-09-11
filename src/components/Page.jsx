/**
 * Create a single page with header, content and a "printable" version (hidden on screen).
 *
 * By default scrolling the page make a `TopFab` appear.
 */

import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Print, NoPrint } from "./Print";
import TopFab from "./TopFab";

export default function Page({
  content = null,
  header = null,
  print = null,
  topFab = true
}) {
  // TODO: When ready use Condition?
  return (
    <Fragment>
      <NoPrint>
        {topFab && <TopFab />}
        {!!header && header}
        {!!content && content}
      </NoPrint>
      <Print>{!!print && print}</Print>
    </Fragment>
  );
}

Page.propTypes = {
  topFab: PropTypes.bool,
  content: PropTypes.element,
  header: PropTypes.element,
  print: PropTypes.element
};
