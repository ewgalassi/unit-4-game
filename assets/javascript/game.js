$(document).ready(function() {
    var taco = {
        health: 100,
        attack: 25,
        baseAttack: 25,
        counterattack: 15
    }
    
    var sloppyJoe = {
        health: 120,
        attack: 15,
        baseAttack: 15,
        counterattack: 20
    }
    
    var pineapple = {
        health: 90,
        attack: 15,
        baseAttack: 15,
        counterattack: 25
    }
    
    var pizza = {
        health: 150,
        attack: 15,
        baseAttack: 15,
        counterattack: 20
    }
    
    var iceCream = {
        health: 80,
        attack: 20,
        baseAttack: 20,
        counterattack: 20
    }
    
    var userChoices = ["taco", "sloppyJoe", "pineapple", "pizza", "iceCream"];
    var enemyChoices = [];
    
    var player;
    var currentEnemy;

    //First click to choose player character    
    $(".characters").click(function() {
        if (userChoices !== [] && player === undefined) {
            player = $(this).attr("data-food");
            for (item in userChoices) {
                if (userChoices[item] !== player) {
                    enemyChoices.push(userChoices[item]);
                }
            };
            userChoices = [];
            $(".player").append(document.getElementById(player));
            for (item in enemyChoices) {
                $("#user-choice").text("Choose your opponent");
            };
        } 
        //Second click to choose current opponent
        else if (currentEnemy === undefined) {
            currentEnemy = $(this).attr("data-food");
            $(".defender").append(document.getElementById(currentEnemy));
            $("#user-choice").text("");
        };
    });

    //Click fight button to attack
    $("#fight").click(function() {
        eval(player).health = eval(player).health - eval(currentEnemy).counterattack;
        eval(currentEnemy).health = eval(currentEnemy).health - eval(player).attack;
        eval(player).attack = eval(player).attack + eval(player).baseAttack;
        console.log(eval(player));
        console.log(eval(currentEnemy));
        if (eval(player).health <= 0) {
            $("#user-choice").text("You lost!");
        } else if (eval(currentEnemy).health <= 0) {
            $("#user-choice").text("You won the battle!  Choose a new opponent");
            $(".defeated").append(document.getElementById(currentEnemy));
            currentEnemy = undefined;
        }
    });

    //Click restart button to reset conditions
    $("#restart").click(function() {
        location.reload();
    })
})