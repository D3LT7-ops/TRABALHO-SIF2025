
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        function handleSubmit(event) {
            event.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            event.target.reset();
        }

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-links a').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    // Close mobile menu if open
                    document.getElementById('navLinks').classList.remove('active');
                }
            });
        });

        // Update cart count animation
        let cartCount = 3;
        document.querySelector('.cart-icon').addEventListener('click', function() {
            alert(`Você tem ${cartCount} itens no carrinho!`);
        });

        // Add to cart functionality
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                cartCount++;
                document.querySelector('.cart-count').textContent = cartCount;
                this.textContent = '✓ Adicionado';
                this.style.background = '#00a651';
                this.style.borderColor = '#00a651';
                this.style.color = '#fff';
                
                setTimeout(() => {
                    this.textContent = 'Adicionar ao carrinho';
                    this.style.background = '#ffd814';
                    this.style.borderColor = '#fcd200';
                    this.style.color = '#0f1111';
                }, 2000);
            });
    });