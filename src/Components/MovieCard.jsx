import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useHistory
} from "react-router-dom";

import Trailer from './Trailer/Trailer';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const MovieCard = ({ movie }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [like, setLike] = React.useState(false);

  const likeIcon = () => {
    setLike(!like);
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const history = useHistory();
  function linkToTrailer() {
    console.log('hi');
    try {
      history.push('/Trailer')
    }
    catch {

    }
  }
  const colorLike = like ? 'red' : 'grey'
  return (

    <Card style={{ margin: '10px' }} className={classes.root}>
      <CardHeader
        style={{ color: 'rgb(0,206,209)' }}
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={movie.title}
        subheader="September 14, 2016"
      />
      <Link to={{ pathname: '/Trailer', myCustomProps: movie }}>
        <CardMedia
          className={classes.media}
          image={movie.image}
          title="Paella dish"
        />
      </Link>


      <CardActions disableSpacing>
        <IconButton style={{ color: colorLike }} onClick={likeIcon} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MovieCard;





