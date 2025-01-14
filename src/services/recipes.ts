import axios from 'axios';

const getAllData = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/recipes');
        return response;
        console.log(response)
    } catch (error : any) {
        console.log(error.message);
        return error.message;
    }
}

export default getAllData;