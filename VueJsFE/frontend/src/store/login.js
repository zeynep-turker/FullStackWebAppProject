import axios from "axios";
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },

    methods: {
        login(e) {
            e.preventDefault();
            axios.get("http://localhost:8081/login?email=" +this.email + "&password=" + this.password)
                .then(response => {
                    alert("Successful")
                })
                .catch(error => alert("Wrong email or password"))
        },
    }
}