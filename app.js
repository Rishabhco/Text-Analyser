document.getElementById("submit").addEventListener("click", function () {
    var userData = document.getElementById('Enter').value;
    var vowels = 0;
    var consonants = 0;
    var number = 0;
    var space = 0;
    var sc = 0;
    var count;
    for (count = 0; count < userData.length; count++) {
        var char = userData.charAt(count);
        if (char.match(/[aeiou]/)) {
            vowels++;
        } else if (char.match(/[bcdfghjklmnpqrstvwxyz]/)) {
            consonants++;
        } else if (char.match(/[1234567890]/)) {
            number++;
        } else if(char.match(/[\s]/)) {
            space++;
        } else {
            sc++;
        }
    }
    var total = Number(vowels) + Number(consonants) + Number(number) + Number(sc)+ Number(space);
    document.getElementById('vowel').textContent = vowels;
    document.getElementById('consta').textContent = consonants;
    document.getElementById('num').textContent = number;
    document.getElementById('sc').textContent = sc;
    document.getElementById('space').textContent = space;
    document.getElementById('total').textContent = total;
})

document.getElementById("reset").addEventListener("click", function () {
    document.getElementById('vowel').textContent = "";
    document.getElementById('consta').textContent = "";
    document.getElementById('num').textContent = "";
    document.getElementById('sc').textContent = "";
    document.getElementById('space').textContent = "";
    document.getElementById('total').textContent = "";   
    document.getElementById('Enter').value = "";   
})
