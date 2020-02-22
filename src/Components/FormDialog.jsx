import React, { forwardRef, useImperativeHandle } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ImageItemForm } from "./FormHooks";

export const FormDialog = forwardRef(({ imgObjForDialog, open, setOpen, handleSubmit, disableUpdate }) => {

  const handleClose = () => {
    setOpen(false);
    setOpen(false)
  };

  const onSubmit = (data) => {
    handleClose();
    handleSubmit(data);
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Author : {imgObjForDialog && imgObjForDialog.author}
          </DialogContentText>
          <ImageItemForm
            imgObjForForm={imgObjForDialog}
            handleSubmit={onSubmit}
            disableUpdate={disableUpdate} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
