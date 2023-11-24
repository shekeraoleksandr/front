document.addEventListener('DOMContentLoaded', function () {
    const characterCountBtn = document.getElementById('character-count-btn');
    const textInput = document.getElementById('textField');

    if (characterCountBtn && textInput) {
        characterCountBtn.addEventListener('click', function () {
            const characterCount = textInput.value.length;
            alert('Character count: ' + characterCount);
        });
    } else {
        console.error('Element not found. Check your IDs.');
    }
});
