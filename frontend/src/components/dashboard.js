import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const  Dashboard = () => (
    <Card style={styles.Card}>
        <CardContent>
            <Typography style={styles.cardtitle}>
                Splitwiser
            </Typography>
            <Typography style={styles.cardcontent}>

            </Typography>

        </CardContent>
    </Card>
    
        
    );

const styles = {
    // container:{
    //     display: 'flex',
    //     backgroundColor: '#C5E4E7',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '100vh',
    // },
    Card: {
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#C5E4E7',
        borderRadius: '8px',
    },
    cardtitle: {
        fontSize: '24px',
    },
    cardcontent: {

    }

}


export default Dashboard;