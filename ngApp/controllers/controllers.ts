namespace testloginapp.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public userCredentials = {};
        public user = {};

        public loginUser(){
            this.loginService.get(this.userCredentials).then((user) => {
              this.$state.go('main');
            });
        }

        public register(){
          this.loginService.save(this.user).then(() => {
            this.$state.go('login');
          });
        }

        constructor(private loginService:testloginapp.Services.LoginService, private $state: ng.ui.IStateService) {

        }
    }

}
