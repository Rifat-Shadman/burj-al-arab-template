import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from 'react-router-dom';
import { Card, CardDeck, Col, Container, Figure, Image, Row } from 'react-bootstrap';

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
  }

}));

export default function Room({ room }) {
  const classes = useStyles();
  const history = useHistory()
  const handleBook = (bedType) => {
    history.push(`/book/${bedType}`);
  }
  return (
    // <Card className={classes.img} style={{ height: '200px', padding: '10px' }}>
    //   <Grid row lg-4 sm-1>
    //     <CardMedia
    //       onClick={() => handleBook(room.bedType)}
    //       className={classes.media}
    //       image={room.imgUrl}
    //       title={room.title}
    //       style={{ width: '15rem', height: '3rem', cursor: 'pointer' }}
    //     />
    //   </Grid>
    <div > 
      {/* <CardDeck>
        <Card style={{margin: '10px', padding:'3px', border:'1px solid black'}}>

          <Card.Img variant="top" src={room.imgUrl}
            onClick={() => handleBook(room.bedType)}
            style={{ height: '10rem', width:'15rem', backgroundColor:'wheat', cursor:'pointer'  }}
          />

        </Card>
      </CardDeck> */}

      {/* <Col xs={6} md={4} sm={12}>
        <Image src={room.imgUrl} rounded fluid 
        onClick={() => handleBook(room.bedType)}
        />
      </Col> */}


      <Figure style={{alignItems:'center',  borderRadius:'4px', boxShadow:'cornsilk' ,padding:'3rem', height:'60%', marginTop:'3rem'}}>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={room.imgUrl}
          onClick={() => handleBook(room.bedType)}
          style={{cursor:'pointer'}}
        />
        
      </Figure>
    </div>

    // <Container>
    //   <Row xs={4} sm={12}>
    //     <Col >
    //       <Image src={room.imgUrl} rounded style={{height:'150px'}} />
    //     </Col>
    //     </Row>
    // </Container>





  );
}
