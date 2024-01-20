import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import splitwiser_logo from '/Users/deepshah/Deep_documents/TipApp/frontend/src/assets/splitwiser_logo.svg'

const Dashboard = () => (
    <div style={styles.container}>

        <div>
            <img src={splitwiser_logo} alt='spliwiser logo' style={styles.Logo}/>
        </div>

        <div> 
        <Card style={styles.Card}>

            <CardContent>
                <table style={styles.contentTable}>

                <div style={styles.leftColumn}>
                    <tr>
                        <td>
                                <Typography>Bill</Typography>
                                <input type='text'></input>
                        </td>
                        <td style={styles.rightColumn}>
                            <Typography>Total</Typography>


                        </td>
                    </tr>
                    </div>

                    <div style={styles.rightColumn}>
                    <tr>
                        <td>
                            <Typography>Total</Typography>


                        </td>
                    </tr>
                    </div>

                </table>

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
   
    Logo:{
        display: 'inline-block',
        margin: '40px auto', 
        
    },


    Card: {
        width: '800px',
        height:'350px',
        margin: '50px auto',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
    },

    cardcontent: {
    },

    contentTable: {
        width: '100%',
        marginTop: '20px',
    },

    leftColumn:{
        height:'100%',
        textAlign: 'left',
    },
    rightColumn:{
        textAlign: 'right',
    }

}


export default Dashboard;