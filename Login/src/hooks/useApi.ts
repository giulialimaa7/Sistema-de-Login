import axios from 'axios'

const BASEAPI = 'http://localhost:3333';

export const api = {
    loginUser: async (email:string, password:string ) => {
        const res = await axios.post( `${ BASEAPI }/login`, { email, password } );
        return res.data;
    },
    validateToken: async (token:string) => {
        const res = await axios.post(`${ BASEAPI }/validate`, { token } );
        return res.data;
    }
}