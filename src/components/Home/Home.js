import React from 'react';
import Room from '../Room/Room';
import singleImage from '../../images/Single.png';
import doubleImage from '../../images/Double.png';
import familyImage from '../../images/Family.png';
import trainImage from '../../images/Train.png';

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const rooms = [
        {
            title: 'Motorbike',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: singleImage,
            bed: 1,
            capacity: 1,
            bedType: 'Single',
            avatar: 'S',
            price: 119
        },
        {
            title: 'Taxi',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: doubleImage,
            bed: 1,
            capacity: 2,
            bedType: 'Double',
            avatar: 'D',
            price: 149
        },
        {
            title: 'Bus',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: familyImage,
            bed: 2,
            capacity: 4,
            bedType: 'Family',
            avatar: 'F',
            price: 199
        },
        {
            title: 'Train',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: trainImage,
            bed: 1,
            capacity: 2,
            bedType: 'Double',
            avatar: 'D',
            price: 149
        }
    ]
    return (
        <div>
            <h1 style={{color:'black', marginTop:'5rem'}}>Select your tourmate: </h1>
            <div style={style}>
            
            {
                rooms.map(room => <Room key={room.bedType} room={room}></Room>)
            }
        </div>
        </div>
        
    );
};

export default Home;