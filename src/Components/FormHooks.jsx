import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardMedia,
  makeStyles
} from "@material-ui/core";
import useInput from "./useInput";

const useStyles = makeStyles({
  root: {
    width: "30vw",
    paddingLeft: "45",
    paddingBottom: "20",
    paddingRight: "45",
    transitionDuration: "0.3s",
    display: "block"
  },
  media: {
    height: 140,
    paddingTop: "56.25%"
  }
});

export function ImageItemForm({ imgObjForForm, handleSubmit, disableUpdate }) {
  const classes = useStyles();
  const {
    value: authorName,
    bind: bindAuthorName,
    reset: resetAuthorName
  } = useInput(imgObjForForm.author);
  const {
    value: description,
    bind: bindDescription,
    reset: resetDescription
  } = useInput(imgObjForForm.description);
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput(
    imgObjForForm.title
  );

  const onSubmit = evt => {
    evt.preventDefault();
    handleSubmit({
      title: title,
      description: description,
      id: imgObjForForm.id
    })
    resetTitle();
    resetDescription();
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imgObjForForm.src}
        title={imgObjForForm.title}
      />

      <form onSubmit={onSubmit}>
        <br />
        <br />
        <TextField
          primary
          label="Title"
          type="search"
          variant="outlined"
          fullWidth="true"
          {...bindTitle}
        />
        <br />
        <br />
        <br />
        <TextField
          primary
          label="Description"
          type="search"
          variant="outlined"
          multiline="true"
          fullWidth="true"
          {...bindDescription}
        />
        {/* <span>Description</span>
        <br />
        <TextareaAutosize
          primary
          label="Description"
          type="search"
          variant="outlined"
          rowsMin={5}
          {...bindDescription} 
        />*/}
        <br />
        <br />
        <Button variant="contained" color="primary" type="submit" disabled={disableUpdate}>
          Submit
        </Button>
      </form>
    </Card>
  );
}
