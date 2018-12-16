<template>
  <v-container fill-height>

    <v-layout justify-center align-center>
      <v-card class="elevation-12" width="90%" max-width="500px">
        <v-alert type="success" :value="submitted && errors.items == 0">Success!</v-alert>
        <v-alert
      :value="submitted && errors.has('firstName')"
      type="error"
      outline
    > First Name Required</v-alert>
    <v-alert
    :value="submitted && errors.has('lastName')"
    type="error"
    outline
    > Last Name Required </v-alert>
    <v-alert
    :value="submitted && errors.has('email')"
    type="error"
    outline
    >Valid Email Required </v-alert>
    <v-alert
    :value="submitted && errors.has('password')"
    type="error"
    outline
    >Password must be at least 8 characters and must contain at least a number, an uppercase letter or a special character</v-alert>
    <v-alert
    :value="submitted && errors.has('confirmPassword')"
    type="error"
    outline
    > Passwords Must Match </v-alert>
        <v-toolbar dark>
          <v-toolbar-title>Sign Up</v-toolbar-title>
        </v-toolbar>
        <v-form  @keyup.native.enter="handleSubmit($event)">
          <v-flex pa-4>
            <v-text-field
              v-model="firstName"
              label="First Name"
              name="firstName"
            v-validate="{ required: true, min: 3 }"
                required
                :rules="nameLength"
            ></v-text-field>
            <v-text-field
              v-model="lastName"
              label="Last Name"
              v-validate="{ required: true, min: 3 }"
              name="lastName"
                required
                :rules="nameLength"
            ></v-text-field>
            <v-text-field
              v-model="username"
              label="Username"
              v-validate="{ required: true, min: 3 }"
              name="username"
                required
                :rules="nameLength"
            ></v-text-field>
            <v-text-field
              validate-on-blur
              v-model="email"
              label="Email"
                name="email"
                v-validate="'required|email'"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              :append-icon="show ? 'visibility_off' : 'visibility'"
              :type="show ? 'text' : 'password'"
              v-model="password"
              :rules="passwordValidation"
              label="Password"
              v-validate="{ required: true, min: 8, regex:/(?:[A-Z]+|[1-9]+|[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+)/}"
              name="password"
              @click:append="show = !show"
              ref="password"
              required
            ></v-text-field>
            <v-alert
              :value="true"
              :color="levelColor"
              outline
            >{{ levelText }}
            </v-alert>
            <v-progress-linear
              :color="barColor"
              height="10"
              :value="barValue"
            ></v-progress-linear>
            <v-text-field
              validate-on-blur
              :append-icon="show ? 'visibility_off' : 'visibility'"
              :type="show ? 'text' : 'password'"
              v-model="passwordConfirm"
              label="Confirm Password"
              name="confirmPassword"
              :rules="passwordRules"
               v-validate="'required|confirmed:password'"
              @click:append="show = !show"
              required
            ></v-text-field>
            <v-flex class="text-xs-right">
              <v-btn
              color="primary"
              @click="handleSubmit($event)">
                Sign Up
              </v-btn>
            </v-flex>
          </v-flex>
        </v-form>
        <v-card max-width="500px">
          <v-toolbar>
        </v-toolbar>
      </v-card>
    </v-card>
    </v-layout>
  </v-container>
</template>

<script>

import axios  from 'axios';

export default {
  data () {
    return {
      valid: false,
      levelColor: 'grey',
      levelText: 'Please insert a password',
      barColor: 'grey',
      barValue: 0,
      passwordLevel: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      username: '',
      emailRules: [
        v => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(v) || 'Email must be valid'
      ],
      passwordRules: [
        v => v === this.password || 'Passwords must match'
      ],
      passwordValidation: [
        v => v.length > 7 || 'Password must be at least 8 characters',
        v => /(?:[A-Z]+|[1-9]+|[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+)/.test(v) || 'Password must contain at least one number, an uppercase letter or a special character',
      ],
      nameLength: [
        v => v.length > 2 || 'Must be at least 3 characters'
      ],
      show: false,
      submitted: false
    }
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if(valid) {
            this.valid = true;
            axios.post(`${this.$store.state.serverPath}/auth/signup`, {
              firstName: this.firstName,
              lastName: this.lastName,
              password: this.password,
              email: this.email,
              username: this.username
            })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
    }
  },
  watch: {
    password: function(){
      let counter = [0,0,0,0];
      if(this.password.length > 7){
        counter[0] = 1;
      }
      if(/[A-Z]+/.test(this.password)){
        counter[1] = 1;
      }
      if(/[1-9]+/.test(this.password)){
        counter[2] = 1;
      }
      if(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.password)){
        counter[3] = 1;
      }
      let sum = counter[0] + counter[1] + counter[2] + counter[3];
      if(sum == 0){
        this.passwordLevel = 'invalid';
        this.barColor = 'error' 
        this.barValue = 10
        this.levelColor = 'error'
        this.levelText = 'Password strength: Invalid'
      }else if(sum == 1){
        this.passwordLevel = 'weak';
        this.barColor = 'warning' 
        this.barValue = 30
        this.levelColor = 'warning'
        this.levelText = 'Password strength: Weak'
      }else if(sum == 2 && counter[0] == 1){
        this.passwordLevel = 'ok';
        this.barColor = 'info' 
        this.barValue = 50
        this.levelColor = 'info'
        this.levelText = 'Password strength: Ok'
      }else if(sum == 3 && counter[0] == 1){
        this.passwordLevel = 'strong';
        this.barColor = 'light-green' 
        this.barValue = 70
        this.levelColor = 'light-green'
        this.levelText = 'Password strength: Strong'
      }else if(sum == 4){
        this.passwordLevel = 'very strong';
        this.barColor = 'success' 
        this.barValue = 100
        this.levelColor = 'success'
        this.levelText = 'Password strength: Very strong'
      }
    }
  }
}
</script>

<style>
</style>
