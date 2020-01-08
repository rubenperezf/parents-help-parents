import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function Dialog({ props }) {
  console.log(props);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false)
  const { loading, user } = useAuth0();

  const handleWriteReview = () => {
    props.handlePost(
      props.familyName,
      props.familyId,
      props.rating,
      props.review
    );
    setOpen(true);
  };

const handleInterested = () => {
  props.handlePutInterested (
    props.interested.concat(user.email),
    );
    setOpen(true)
  };

const handleContactUs = () => {
  props.handlePostContactUs(
    props.name,
    props.email,
    props.message
  );
  setOpen(true)
};

const handleOpinion = () => {
  props.handlePostOpinion (
    props.userName,
    props.opinino,
    props.rating
  );
  setOpen(true)
};
const handleClose = () => {
  setOpen(false);
};

const handlePostCreateFamily = () => {
  props.handlePostFamily(
    props.familyName,
    props.parentsName,
    props.parentsAge,
    props.numberOfKids,
    props.kidsName,
    props.kidsAge,
    props.location,
    props.images,
    props.description
  )
  
}

  return (
    <div>
      {props.page==="writeReviews" &&<button className="button" type="button" onClick={handleWriteReview}>
        <span>Send</span>
      </button>}
      {props.page==="interested" &&  <button className="button button-interested" onClick={handleInterested}><span>Like it</span></button>}
      {props.page==="contactUs" &&         <button className="button" onClick={e => { e.preventDefault(); handleContactUs(props.name, props.email, props.message)}}><span>Send</span></button>}
      {props.page==="opinion" &&  <button className="button" onClick={e => { e.preventDefault(); handleOpinion(props.name, props.email, props.message)}}><span>Send</span></button>}
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className="dialog">
          <div className={classes.paper}>
            {props.page === "writeReviews" && `Review done thank you so much!`}
            {props.page === "interested" && `We send a notification to this family with your email. They will conect with you in case they are interested`}
            {props.page === "contactUs" && `Thanks for contact us. We will contact you as faster we can a chance!`}
            {props.page === "opinion" && `Thanks for evaluate or webpage. We appreciate your opinion!`}
          </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
