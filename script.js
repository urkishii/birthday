function showMessage() {
            document.getElementById('setup').style.display = 'none';
            document.getElementById('wish').style.display = 'block';
            startHearts();
        }

        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }

        function startHearts() {
            setInterval(createHeart, 300);
        }