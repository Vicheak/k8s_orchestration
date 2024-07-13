const axios = require('axios');

async function makeExternalAPICall() {
    try {
        const response = await axios.get('http://my-external-svc');
        console.log('Response :', response.data);
        // Process the response as needed
    } catch (error) {
        console.error('Error :', error.message);
        // Handle the error
    }
}

makeExternalAPICall();