import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import splitwiser_logo from '/Users/deepshah/Deep_documents/TipApp/frontend/src/assets/splitwiser_logo.svg'



const Dashboard = () => (
    <div style={styles.container}>

        <div>
            <img src={splitwiser_logo} alt='spliwiser logo' style={styles.Logo}/>
        </div>

        <div> 
        <Card style={styles.Card}>

            <CardContent>
                <form style={styles.form} >

                    <div style={styles.leftContent}>
                        <label style={{display: 'block'}} htmlFor='billValue'>Bill</label>

                        <div style={styles.leftInputIcon}>
                        
                        <input style={styles.leftInput} type='number' id='billValue' />
                        </div>

                        <label style={{display:'block', marginTop: '20px'}}> Select Tip %</label>
                        <div style={styles.leftButtonGrid}>
                            <button>5%</button>
                            <button>10%</button>
                            <button>15%</button>
                            <button>20%</button>
                            <button>25%</button>
                            <button>Custom</button>
                        </div>

                        <label style={{display: 'block', marginTop:'20px'}} htmlFor='noOfpeople'>No of People</label>
                        <input style={styles.leftInput} type='number' id='noOfpeople' />

                    </div>

                    <div style={styles.rightContent}>
                        <label style={{display: 'block'}} htmlFor='calcTipPP'>Tip per person</label>
                        <input type='text' id='calcTipPP' readOnly />
                    </div>

                </form>

            </CardContent>


        </Card>
        </div>
        
    </div>


);

const styles = {
    container: {
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

   form: {
    display: 'flex',
    flexDirection:'columns',
    alignItems: 'center',

   },
    leftContent: {
    padding:'20px',
    width: '100%',
    textAlign: 'left',
   },

   leftInput:{
    marginTop:'10px',
    textAlign: 'right', 
    width:'100%', 
    borderRadius:'3px', 
    fontSize:'24px',
    padding:'10px',
   },
   leftInputIcon:{
    position: 'relative',
   },

   leftIcon:{
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    color:'#00000'

   },

   leftButtonGrid:{
    marginTop: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap:'10px',
   },

   rightContent: {
    padding:'20px',
    width: '100%',
    textAlign: 'left',
    backgroundColor: '#C5E4E7'
   },

   rightInput:{


   },


}

export default Dashboard;