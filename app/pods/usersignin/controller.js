import Controller from '@ember/controller';

export default Controller.extend({
    actions:
    {
        sendData(){
            console.log("hello");
            let mail = document.getElementById("email").value;
            let password= document.getElementById("password").value;
            Ember.$.ajax({
                url:'http://localhost:8080/clgproject/userLogin',
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
        },
        redirecttousersignup(){
             this.transitionToRoute("usersignup");
        }
    }
});
