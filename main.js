const calc = (event) => {
    event.preventDefault();
    const str1 = document.querySelector("#name1").value.toLowerCase();
    const str2 = document.querySelector("#name2").value.toLowerCase();
    const str3 = "loves";

    let strArray = (str1 + str3 + str2).split("");
    let calcArray = [];

    //Stores the occurences of characters
    for (let i = 0; strArray.length; i++) {
        let element = strArray[0],
            count = 0;

        for (let j = 0; j < strArray.length; j++) {
            if (element === strArray[j]) {
                count++;
            }
        }

        calcArray.push(count);

        strArray = strArray.filter((ev) => {
            if (ev !== element) {
                return ev;
            }
        });
    }
    console.log(calcArray);
    //Calculates the result of occurences according to rule defined.

    while (calcArray.length > 2) {
        let l = calcArray.length;
        let mid = l % 2 == 0 ? l / 2 : Math.floor(l / 2);

        for (let i = 0; i < mid; i++) {
            calcArray[i] = calcArray[i] + calcArray[calcArray.length - 1];
            calcArray.pop();
        }
    }

    //Final Result
    let lovePercent,
        lDigit = calcArray[1];
    if (calcArray[0] > 9) {
        let fDigit = Math.floor(calcArray[0] / 10),
            nDigit = calcArray[0] % 10;
        lovePercent = (fDigit + lDigit).toString() + nDigit.toString();
    } else if (lDigit > 9) {
        let fDigit = calcArray[0],
            nDigit = lDigit % 10;
        lDigit = Math.floor(lDigit / 10);

        lovePercent = (fDigit + nDigit).toString() + lDigit.toString();
    } else {
        lovePercent = calcArray[0].toString() + lDigit.toString();
    }

    console.log(`Here is your love hard ${lovePercent}%`);
};
