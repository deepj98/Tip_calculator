import React from 'react';

const  Dashboard = () => (
    
        <div style={styles.container}>   
            <div style={styles.dashboardCard}>
        
            </div>
        </div>
    );

const styles = {
    container:{
        display: 'flex',
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    dashboardCard: {
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
    },
    cardtitle: {
        fontSize: '24px',

    },

}


export default Dashboard;