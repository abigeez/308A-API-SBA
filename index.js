

const API_KEY = 'live_9rACe49g2hV7l9Q8skb7kGEFeYdCzFlnfJzahqnthE095x3YCq4BituWKtglYZN';

import axios from "axios";

const client = axios.create({
    baseURL:"https://api.thedogapi.com/";

});

async function dogCapture () {
    const getImage = () => {
        axios.get('https://api.thedogapi.com/v1/images/search')
    }

    

};

document.getElementById("myBtn").addEventListener("click",getDog);

async function getDog() {
    let dataCatch =
    document.getElementById("theInput").value;
    let requestBody = {data:dataCatch};

    const response = await axios.post{
        
    }

}
