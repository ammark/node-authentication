module.exports = {
    signUp: async(req, res, next) => {
        console.log(`UsersControllers.signup() is called`);
    },

    signIn: async(req, res, next) => {
        console.log(`UsersControllers.signIn() is called`);
    },

    secret: async(req, res, next) => {
        console.log(`UsersControllers.secret() is called`);
    }
}
