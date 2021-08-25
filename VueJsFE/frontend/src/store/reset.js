import axios from "axios";
export default {
    name : 'Forgot',
    data() {
        return {
            email: '',
            password:'',
            confirmPassword:''
        };
    },

    methods: {
        reset(e){
            e.preventDefault();
            if (this.password == this.confirmPassword) {
                axios.get("http://localhost:8081/confirm?email=" + this.$route.params.email + "&password=" + this.password)
                    .then(response => {
                        alert("Successful")
                        this.$router.push('/login');
                    })
                    .catch(error => alert(error))
            }
            else{
                alert("Passwords didn't match!");
            }

        }
    }
}