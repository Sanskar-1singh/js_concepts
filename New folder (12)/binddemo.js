    const player1={
        firstname:"virat",
        lastname:"kohli",
        battonumber:3,
        canBowl:false,
        getDetails:function(){
            console.log(this.firstname,this.lastname,"comes at",this.battonumber);
        }
    }

    const obj=function(){
                player1.getDetails();
    }
    
    //BIND FUNCTION>>>
    let x=obj.bind(player1);
    console.log(x);
    x();
      
    //CALL FUNCTION>>>>

    obj.call(player1); 