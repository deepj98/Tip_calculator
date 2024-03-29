import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import splitwiser_logo from '/Users/deepshah/Deep_documents/TipApp/frontend/src/assets/splitwiser_logo.svg'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonIcon from '@mui/icons-material/Person';

const Dashboard = () => {
    const[billValue, setBillValue] = useState('');
    const[noOfpeople, setNoOfPeople] = useState('');
    const[tipPercent, setTipPercent] = useState('');
    const[tipPerPerson, setTipPerPerson] = useState('');
    const[totalTip, setTotalTip] = useState('');

   const handleBillValue = (e) =>{
    setBillValue(e.target.value)
    calculateTotalTip(e.target.value, noOfpeople, tipPercent)
   };

   const handleNoOfPeople = (e) =>{
    setNoOfPeople(e.target.value)
    calculateTotalTip(billValue, e.target.value, tipPercent)
   };

   const handleTipPercentChange = (e) =>{
    setTipPercent(e.target.value)
    calculateTotalTip(billValue,noOfpeople,e.target.value)
   };

   const calculateTotalTip = (billValue, noOfpeople, tipPercent) =>{
    const tipAmount = parseFloat(billValue) * (parseFloat(tipPercent));
    const totalTip = tipAmount / parseFloat(noOfpeople);
    setTotalTip(tipAmount);
    setTipPerPerson(totalTip);
   };

   const handleSubmit = (e) => {
    e.preventDefault();
   };

   const resetForm = (e) => {
    setBillValue('');
    setNoOfPeople('');
    setTipPerPerson('');
    setTipPercent('');
    setTotalTip('');
   }

    return(
            <div style={styles.container}>

        <div>
            <img src={splitwiser_logo} alt='spliwiser logo' style={styles.Logo}/>
        </div>

        <div> 
        <Card style={styles.Card}>

            <CardContent>
                <form id='FormID' style={styles.form} onSubmit={handleSubmit} >

                    <div style={styles.leftContent}>
                        <label style={{display: 'block'}} htmlFor='billValue'>Bill</label>

                        <div style={styles.leftInputIconContainer}>
                        <MonetizationOnIcon style={styles.leftIcon}/>

                        <input style={styles.leftInput} type='number' id='billValue' 
                        value= {billValue} onChange={handleBillValue} />

                        </div>

                        <label style={{display:'block', marginTop: '20px'}}> Select Tip %</label>
                        <div style={styles.leftButtonGrid}>
                            <button value= '0.05' onClick={handleTipPercentChange}>5%</button>  
                            <button value= '0.10' onClick={handleTipPercentChange}>10%</button>
                            <button value= '0.15' onClick={handleTipPercentChange}>15%</button>
                            <button value= '0.20' onClick={handleTipPercentChange}>20%</button>
                            <button value= '0.25' onClick={handleTipPercentChange}>25%</button>
                            <button value= '0.30' onClick={handleTipPercentChange}>30%</button>
                        </div>

                        <label style={{display: 'block', marginTop:'20px'}} htmlFor='noOfpeople'>No of People</label>

                        <div style={styles.leftInputIconContainer}>
                            <PersonIcon style={styles.leftIcon}/>
                                <input style={styles.leftInput} type='number' id='noOfpeople' 
                                value={noOfpeople} onChange={handleNoOfPeople} />
                        </div>

                    </div>

                    <div style={styles.rightContent}>
                        
                                <label style={{display: 'block', color:'white'}} htmlFor='calcTipPP'>Tip / Person </label>
                                <input style={styles.rightInput} type='text' id='calcTipPP' value={tipPerPerson} readOnly />

                                <label style={{display:'block', color:'white', marginTop:'30px'}} htmlFor='totalTip'>Total Tip</label>
                                <input style={styles.rightInput} type='text' id='totalTip' value={totalTip} readOnly />

                                <input type='button' style={styles.rightButton} onClick={resetForm} value='Reset'/>                            
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>     
    </div>

    );
};

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
        maxWidth: '800px',
        width:'90%',
        margin: '50px auto',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        display:'flex',
        flexDirection:'column',
    },

   form: {
    display: 'flex',
    flexDirection:'columns',
    alignItems: 'stretch',
    height:'100%',

   },
    leftContent: {
    flex:'1',
    padding:'20px',
    maxWidth:'360px',
    width: '90%',
    textAlign: 'left',
    borderRadius:'20px',
   },

   leftInput:{
    marginTop:'10px',
    textAlign: 'right', 
    width:'90%', 
    borderRadius:'3px', 
    fontSize:'2vh',
    padding:'10px',
   },

   leftInputIconContainer:{
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
    flex:'1',
    padding:'20px',
    maxWidth:'360px',
    width: '90%',
    textAlign: 'left',
    backgroundColor: '#71BEC6',
    borderRadius:'20px',
   },

   rightInput:{
    textAlign:'right',
    backgroundColor:'#71BEC6',
    width:'90%',
    fontSize: '2vh',
    borderRadius:'3px',
    borderColor:'#000000',
    marginTop:'10px',
    padding:'10px',
   },

   rightButton:{
    marginTop:'60px',
    alignItems:'center',
    width: '100%',
    height:'5vh',
    borderRadius:'3px',
    backgroundColor: '#71BEC6'
   },

}

export default Dashboard;