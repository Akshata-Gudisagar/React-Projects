import axios from "axios";

const DataUrl = "http://localhost:3000/user";

class DataService {
    getDataService() {
        return axios.get(DataUrl)
    }
    createDataService(Data) {
        return axios.post(DataUrl,Data)
    }
    deleteDataService(id){
        return axios.delete(DataUrl + '/' + id)
    }
    grtDataId(id){
        return axios.get(DataUrl + '/' + id )
    }
}

export default new DataService()