document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    const question1 = document.getElementById('question1');
    const question2 = document.getElementById('question2');
    const question3 = document.getElementById('question3');
    const result = document.getElementById('result');
    
    // Question 1 buttons
    document.getElementById('q1-option1').addEventListener('click', function() {
        result.textContent = 'Congratulations you are a Gryffindor';
        result.style.display = 'block';
        question1.style.display = 'none';
    });
    
    document.getElementById('q1-option2').addEventListener('click', function() {
        question1.style.display = 'none';
        question2.style.display = 'block';
    });
    
    // Question 2 buttons
    document.getElementById('q2-option1').addEventListener('click', function() {
        result.textContent = 'Congratulations you are a Slytherin';
        result.style.display = 'block';
        question2.style.display = 'none';
    });
    
    document.getElementById('q2-option2').addEventListener('click', function() {
        question2.style.display = 'none';
        question3.style.display = 'block';
    });
    
    // Question 3 buttons
    document.getElementById('q3-option1').addEventListener('click', function() {
        result.textContent = 'Congratulations you are a Ravenclaw';
        result.style.display = 'block';
        question3.style.display = 'none';
    });
    
    document.getElementById('q3-option2').addEventListener('click', function() {
        result.textContent = 'Congratulations you are a Hufflepuff';
        result.style.display = 'block';
        question3.style.display = 'none';
    });
});