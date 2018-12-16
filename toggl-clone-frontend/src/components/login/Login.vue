<template>
  <v-container fill-height>

    <v-layout justify-center align-center>
      <v-card class="elevation-12" width="90%" max-width="500px">
          <v-alert type="success" :value="submitted && errors.items == 0">Success!</v-alert>
          <v-alert
            :value="submitted && errors.has('email')"
            type="error"
            outline
            >Valid Email Required </v-alert>
          <v-alert
            :value="submitted && errors.has('password')"
            type="error"
            outline
            >Password must be at least 8 characters, contain at least one capital letter, at least one number and at least one special character</v-alert>
        <v-toolbar dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-form  @keyup.native.enter="handleSubmit($event)">
          <v-flex pa-4>
            <v-text-field
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
              label="Password"
              name="password"
              @click:append="show = !show"
              ref="password"
              v-validate="{ required: true, min: 8, regex:/(?:[A-Z]+|[1-9]+|[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+)/}"
              :rules="passwordValidation"
              required
            ></v-text-field>
            <v-flex class="text-xs-right">
              <v-btn
              color="primary"
              @click="handleSubmit($event)"
              to="/track"
              >
                Log In
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
export default {
  data () {
    return {
      valid: false,
      email: '',
      password: '',
      show: false,
      submitted: false,
      emailRules: [
        v => /.+@.+/.test(v) || 'Email must be valid'
      ],
      passwordValidation: [
        v => v.length > 7 || 'Password must be at least 8 characters',
        v => /(?:[A-Z]+|[1-9]+|[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+)/.test(v) || 'Password must contain at least one number, an uppercase letter or a special character'
      ],
    }
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
    }
  }
}
</script>

<style lang="css">
</style>
