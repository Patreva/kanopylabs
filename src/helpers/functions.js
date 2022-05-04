import axios from "axios";
const base_url = 'https://swapi.dev/api/',


Api = (url) => new Promise((resolve, reject) => {
    axios.get(base_url + url, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then((res) => {
            resolve(res.data);
        }).catch((e) => {
            reject(e);
        });
})

export {
    Api
}