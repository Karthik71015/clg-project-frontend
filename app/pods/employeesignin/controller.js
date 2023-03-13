import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        redirecttoemployeesignup(){
            this.transitionToRoute('employeesignup');
        },
        login(){
            console.log("hello");
            let mail = document.getElementById("email").value;
            let password= document.getElementById("password").value;
            Ember.$.ajax({
                url:'http://localhost:8080/clgproject/employeeLogin',
                type:'POST',
                dataType: 'json',
                data:
                {
                      mail:mail,
                      pass:password
                }
            }).then ((response) => {
                
                let data=response.success;
                console.log(data);
                if(data == "login failed incorrect username or password")
                {
                    alert("incorrect email or password");
                }
                else{
                    
                    this.transitionToRoute('/');
                }
                
            });
        }
    }
});
