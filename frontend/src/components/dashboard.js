import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import splitwiser_logo from '/Users/deepshah/Deep_documents/TipApp/frontend/src/assets/splitwiser_logo.svg'

const Dashboard = () => (
    <div style={styles.container}>

        <div style={styles.logoContainerContainer}>
            <img src={splitwiser_logo} alt='spliwiser logo' style={styles.Logo}/>
        </div>

        <div > 

        <Card style={styles.Card}>

            <CardHeader
                title="Splitwiser"
                subheader="split bills and tips effeciently" />

            <CardContent>
                <Typography style={styles.cardcontent} />
            </CardContent>


        </Card>
        </div>
        
    </div>


);

const styles = {
    container: {
        // display: 'flex',
        backgroundColor: '#C5E4E7',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh',
        
        
    },
    logoContainer:{
        margin: '40px auto',
    },
    Logo:{
        display: 'inline-block',
        margin: '40px auto', 
        
    },


    Card: {
        margin: '50px 50px 50px 50px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
    },
    
    cardtitle: {
        fontSize: '24px',
    },
    cardcontent: {

    }

}


export default Dashboard;