namespace testloginapp.Services {

    export class LoginService {
      private LoginResource;

      public get(username){
        return this.LoginResource.get({username:username});
      }

      public save(user){
        return this.LoginResource.save(user).$promise;
      }

      constructor(private $resource: ng.resource.IResourceService){
        this.LoginResource = $resource('/routes/user');
      }
    }
    angular.module('testloginapp').service('loginService', LoginService);

  }
