
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        // Update cart count
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
   