import axios from "axios"


export default class ProductService{
    
    getSongs(){
        return axios.get("http://localhost:8080/api/songs/getall")
    }
    getBySongName(songName){
        return axios.get("http://localhost:8080/api/songs/getBySongName?songName=" + songName)
    }
    getBySongCreator(songCreator){
        return axios.get("http://localhost:8080/api/songs/getBySongCreator?songCreator=" + songCreator)
        
        
    }   
    getBySongCreator(seoName){
        return axios.get("http://localhost:8080/api/songs/getBySongCreator?songCreator=" + seoName)
        
    } 
}   

