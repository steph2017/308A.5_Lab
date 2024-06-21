export function loadResult() { //helperfunction using doc frag to load the result depending on the answers to the quiz. then add to page.
    const answerScore = ((Number(document.getElementById('birthMonth').value) + Number(document.querySelector('input[name="spiritAnimal"]:checked').value)) / 2);
    let textResult;
    if (answerScore <= 0.6) {
        textResult = "I am getting better and better.\nI am smart and capable of being a winner.\nI am an abundant being.\nI allow the flow of abundance in and through me.\nAll my problems have solutions.\nI have enough. I am enough.";
    }
    else {
        textResult = "I am proud of myself.\nI am full of potential.\nI am naturally confident and at ease in my own life.\nI bring value to the people in my life.\nI have natural good fortune and boundless opportunity.\nMy dreams are coming true.";
    }
    const resultContainer = document.createElement('div');
    resultContainer.setAttribute("id", "resultBox");
    resultContainer.textContent = textResult;

    //adding print option 
    const printButton = document.createElement('button');
    printButton.textContent = 'Print';
    printButton.addEventListener('click', printResult);


    const fragResult = document.createDocumentFragment(); //make template
    fragResult.appendChild(resultContainer);
    fragResult.appendChild(printButton);
    document.getElementById('app').appendChild(fragResult); //add result to webpage


    function printResult() { //using BOM .print
        window.print();
    }
}