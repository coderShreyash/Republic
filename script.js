database=firebase.database();
named=""
users=0

function updater(){
database.ref("/Users/users").on('value',function(data){
    users=data.val()
})
named = localStorage.getItem("name")

reason = localStorage.getItem("reason")

    database.ref("/Users/users").on('value',function(data){users=data.val()})

    database.ref("/Players/"+users+named.replaceAll(" ","")).set({
        Reason:reason
    })
   
}
