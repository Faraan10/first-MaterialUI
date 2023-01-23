import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function CardsMaterialUi(){
	return(

		<div>
			 <Card className="boxes" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.diabetes.co.uk/wp-content/uploads/2018/12/the-ball-stadion-football-the-pitch-46798.jpeg"
        title="Football"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Football
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Association football, more commonly known as football or soccer, is a team sport played between two teams of 11 players who primarily use their feet to propel a ball around a rectangular field called a pitch.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

     
    <Card className="boxes" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://eng-media.dhakatribune.com/?width=476&height=249&cropratio=16:9&quality=100&image=/uploads/2018/09/tennis-1537087991488.jpg"
        title="Tennis"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tennis
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tennis is a racket sport that is played either individually against a single opponent (singles) or between two teams of two players each (doubles).  over or around a net and into the opponent's court.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


    <Card className="boxes" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.etimg.com/thumb/msid-94321845,width-1070,height-580,imgsize-1157704,overlay-economictimes/photo.jpg"
        title="Cricket"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cricket
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

		</div>
	)
}
export default CardsMaterialUi






