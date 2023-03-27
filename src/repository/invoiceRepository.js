import store from "@/store";

const apiKey = "3bcb08313fe3bc8292a3caf1a96ebac2";
export async function getAllUsers(){
    return store.dispatch('data-resources/listing',{
        actionUri:`person/popular?api_key=${apiKey}&language=en-US&page=1`
    })
    // return axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=1`)
}
