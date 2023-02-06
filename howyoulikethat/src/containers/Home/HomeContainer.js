import axios from "axios";

const ApiTest = () => {
    return axios.get('localhost:5000/Hello?name=LordYuk');
}
const HomeContainer = () => {

    return (
        <div>
            {ApiTest()}
        </div>

    )
}

export default HomeContainer;