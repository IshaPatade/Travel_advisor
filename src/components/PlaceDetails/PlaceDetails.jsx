import React from 'react';
import {Box, Typography,Grid, Button , Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';


import useStyles from './styles.js';

const PlaceDetails=({place, selected, refProp})=>{

    const classes = useStyles();
    if(selected) refProp?.current?.scrollIntoView({behavior:"smooth", block:"start"});

    return(
        <Card elevation={6}  >
           <Grid container>
        <Grid item xs={12} sm={6}>
        <CardMedia
          style={{ height: '100%', objectFit: 'cover' }}
          image={place.photo ? place.photo.images.large.url : 'https://unsplash.com/s/photos/night-blur'}
          title={place.name}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <CardContent>
          <Typography gutterBottom variant="h6">{place.name}</Typography>
          <Box display="flex" justifyContent="space-between" my={2}>
            <Rating name="read-only" value={Number(place.rating)} readOnly />
            <Typography component="caption"  style={{ fontSize: '15px' }}>{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography component="body2">Price</Typography>
            <Typography gutterBottom variant="subtitle2"  style={{ fontSize: '14px' }}>
              {place.price_level}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography component="legend"  mr={5}>Ranking</Typography>
            <Typography gutterBottom variant="body2"  >
              {place.ranking}
            </Typography>
          </Box>
          {place?.awards?.map((award) => (
            <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
              <img src={award.images.small} />
              <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
            </Box>
          ))}
          {place?.cuisine?.map(({ name }) => (
            <Chip key={name} size="small" label={name} className={classes.chip} />
          ))}
          {place.address && (
            <Typography gutterBottom variant="caption" color="textSecondary" className={classes.subtitle}>
              <LocationOnIcon />{place.address}
            </Typography>
          )}
          {place.phone && (
            <Typography variant="body2" color="textSecondary" className={classes.spacing}>
              <PhoneIcon  size='small'/> {place.phone}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
            Trip Advisor
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
            Website
          </Button>
        </CardActions>
        </Grid>
      </Grid>
      </Card>
    );
}

export default PlaceDetails;
