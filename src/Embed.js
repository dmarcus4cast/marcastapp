import React from 'react';
import { API, Auth } from 'aws-amplify';

var QuickSightEmbedding = require("amazon-quicksight-embedding-sdk");


class Embed extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            loader: true
        };
    }

    componentDidMount() {
        this.getSessionToken();
        
    }
    
    getSessionToken = async () => {
        const data = await Auth.currentSession();
        const jwtToken = data.idToken.jwtToken; 
        console.log(jwtToken) 

        const params = { 
            headers: {},
            response: true,
            queryStringParameters: {
                openIdToken: jwtToken,
                mode: 'getUrl'
            }
        }

        const quicksight = await API.get('marcastapiv2', '/getembedurl', params);
        console.log(quicksight);

    }

    render() {
        return <h2>Embed</h2>
    }

}

export default Embed;

