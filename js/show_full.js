const expandBtns = document.querySelectorAll('.expand-btn');
let isPushed = false;

expandBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const reviewText = this.parentElement.querySelector('.review-text.hidden');

        if (!isPushed) {
            reviewText.style.display = 'block';
            this.textContent = 'Скрыть отзыв';
            isPushed = true
        }
        else {
            reviewText.style.display = 'none';
            this.textContent = 'Развернуть отзыв';
            isPushed = false
        }

    });
});