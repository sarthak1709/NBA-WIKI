import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';



const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.black,
    color: '#fff',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

export default function CustomizedTooltips(props) {
  return (
    <div>
    
      <HtmlTooltip
        title={
          <React.Fragment>
        <Typography color="inherit">{props.full_name} ({props.abb})</Typography>

        <Typography color="inherit">City: {props.city}</Typography>
        <Typography color="inherit">Conference: {props.conf}</Typography>
        <Typography color="inherit">Division : {props.division}</Typography>

          </React.Fragment>
        }
        arrow
        placement="right"

      >
        <Button>{props.children}</Button>
      </HtmlTooltip>
    </div>
  );
}
