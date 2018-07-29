$(document).ready(function() {
    var taco = {
        health: 120,
        attack: 22,
        baseAttack: 22,
        counterattack: 14
    }
    
    var sloppyJoe = {
        health: 140,
        attack: 13,
        baseAttack: 13,
        counterattack: 15
    }
    
    var pineapple = {
        health: 110,
        attack: 23,
        baseAttack: 23,
        counterattack: 18
    }
    
    var pizza = {
        health: 160,
        attack: 12,
        baseAttack: 12,
        counterattack: 12
    }
    
    var iceCream = {
        health: 100,
        attack: 31,
        baseAttack: 31,
        counterattack: 15
    }
    
    var userChoices = ["taco", "sloppyJoe", "pineapple", "pizza", "iceCream"];
    var enemyChoices = [];
    var enemyDefeated = [];
    
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
            $("#user-choice").text("Choose your opponent");
        } 
        //Second click to choose current opponent
        else if (currentEnemy === undefined) {
            for (item in enemyChoices) {
                if (enemyChoices[item] === $(this).attr("data-food")) {
                    currentEnemy = $(this).attr("data-food");
                    $(".defender").append(document.getElementById(currentEnemy));
                    $("#user-choice").text("");
                }
            }
        };
    });

    //Click fight button to attack
    $("#fight").click(function() {
        eval(player).health = eval(player).health - eval(currentEnemy).counterattack;
        eval(currentEnemy).health = eval(currentEnemy).health - eval(player).attack;
        eval(player).attack = eval(player).attack + eval(player).baseAttack;
        $("#tacoHealth").text("Health: " + taco.health);
        $("#sloppyJoeHealth").text("Health: " + sloppyJoe.health);
        $("#pizzaHealth").text("Health: " + pizza.health);
        $("#iceCreamHealth").text("Health: " + iceCream.health);
        $("#pineappleHealth").text("Health: " + pineapple.health);
        if (eval(player).health <= 0) {
            $("#user-choice").text("You lost!");
        } else if (eval(currentEnemy).health <= 0) {
            $("#user-choice").text("You won the battle!  Choose a new opponent");
            $(".defeated").append(document.getElementById(currentEnemy));
            for (item in enemyChoices) {
                if (enemyChoices[item] === currentEnemy) {
                    enemyDefeated.push(currentEnemy);
                    enemyChoices.splice(item, 1);
                }
            };
            currentEnemy = undefined;
            if (enemyChoices.length === 0) {
                $("#user-choice").text("You are victorious!");
            }
        };
    });

    //Click restart button to reset conditions
    $("#restart").click(function() {
        location.reload();
    })
})