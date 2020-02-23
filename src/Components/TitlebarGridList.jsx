import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  GridList,
  Grid,
  GridListTile,
  GridListTileBar
} from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import imagesList from "./imagesList";
import { FormDialog } from "./FormDialog";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: theme.palette.background.paper,
    height: "100vh"
  },
  gridList: {
    width: "auto",
    height: "auto"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  appBar: {
    position: "relative"
  }
}));

const TitlebarGridList = props => {
  useEffect(() => {
    props.fetchImageList();
    return () => {};
  }, ["imagesList"]);
  const classes = useStyles();
  const [imgObj, setimgObj] = React.useState(
    props.imagesList && props.imagesList[0]
  );
  const [open, setOpen] = React.useState(false);
  const childRef = useRef(); //To get the reference

  return (
    <div className={classes.root}>
      <GridList cols={3}>
        className={classes.gridList}
        {props.imagesList &&
          props.imagesList.length &&
          props.imagesList.map(tile => (
            <GridListTile rows={2} key={tile.id}>
              <img src={tile.src} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                    onClick={() => {
                      setimgObj({ ...tile });
                      setOpen(true);
                    }}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
      </GridList>

      {open && (
        <FormDialog
          disableUpdate={props.disableUpdate}
          imgObjForDialog={imgObj}
          open={open}
          setOpen={setOpen}
          handleSubmit={props.updateImageList}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  imagesList: state.gallary.gallaryData
});

const mapDispatchToProps = dispatch => ({
  fetchImageList: () =>
    dispatch({
      type: "FETCH_IMAGE_LIST"
    }),
  updateImageList: data =>
    dispatch({
      type: "UPDATE_IMAGE_LIST",
      payload: data
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(TitlebarGridList);
