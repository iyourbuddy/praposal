let currentSlide = 0;
        const slides = document.querySelectorAll(".slide");
        const nextBtn = document.getElementById("nextBtn");
        const prevBtn = document.getElementById("prevBtn");
        const game = document.getElementById("game");
        const noBtn = document.getElementById("noBtn");

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });
            nextBtn.style.display = index === slides.length - 1 ? "none" : "inline-block";
            prevBtn.style.display = index === 0 ? "none" : "inline-block";
            if (index === slides.length - 1) {
                game.style.display = "block";
            } else {
                game.style.display = "none";
            }
        }

        function nextSlide() {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                showSlide(currentSlide);
            }
        }

        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                showSlide(currentSlide);
            }
        }

        function answerYes() {
            document.getElementById("response").innerText = "Alhamdulillah! Looking forward to a blessed future together! 💍";
        }

        function answerNo() {
            const x = Math.random() * window.innerWidth * 0.8;
            const y = Math.random() * window.innerHeight * 0.8;
            noBtn.style.position = "absolute";
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        }