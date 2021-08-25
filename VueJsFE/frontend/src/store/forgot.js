import axios from "axios";
export default {
    name : 'Forgot',
    data() {
        return {
            email: '',
        };
    },

    methods: {
        reset(e){
            e.preventDefault();
            axios.get("http://localhost:8081/reset?email=" +this.email)
                .then(response => {
                    alert("Successful")
                    this.$router.push({name: 'ResetPassword', params: {email: this.email}})
                })
                .catch(error => alert("Email is not found!"))
        }
    }
}