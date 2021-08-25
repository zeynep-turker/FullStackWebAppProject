import axios from "axios";
export default {
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            password: ''
        };
    },

    methods: {
        signup(e) {
            e.preventDefault();
            axios.post("http://localhost:8081/addUser?name=" +this.name  + "&surname=" + this.surname + "&email=" + this.email + "&password=" + this.password)
                .then(response => {
                    console.info(response)
                    alert("Successful")
                    this.$router.push('/login');

                })
                .catch(error => alert.error(error))

        }
    }
}