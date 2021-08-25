import axios from "axios";
export default {
    created() {
        this.getUsers();
    },
    data() {
        return {
            users: [],
        };
    },
    methods: {
        getUsers() {
            axios
                .get("http://localhost:8081/getUsers")
                .then((response) =>{
                    (this.users = response.data)})
                .catch((error) => {
                });
        },
    },
};