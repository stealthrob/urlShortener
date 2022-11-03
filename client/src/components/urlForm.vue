<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label>Input your URL:</label>
            <input type="text" required v-model="redirectUrl"> <!-- trackear lo que pase en los inputs con vmodel -->

            <div class="submit">
                <button>Submit</button>
            </div>

        </form>
        <p>Shorten Url:{{ shortenUrl}}</p>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            redirectUrl: '',
            shortenUrl: ''
        }
    },
    methods: {
        handleSubmit() {

            const url = this.redirectUrl;
            const host = window.location.href;
            console.log('The host: '+host);
            axios.post(`${host}`, {redirectUrl:url}).then(data => {
                this.shortenUrl = data.data;
            });
        }
    }
}
</script>
<style>
form {
    max-width: 420px;
    margin: 25 px 0 auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

.submit {
    text-align: center;
}
</style>