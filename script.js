const showLoginButton = document.getElementById('showLogin');
        const overlay = document.getElementById('overlay');
        const loginContainer = document.getElementById('loginContainer');
        const closeLoginButton = document.getElementById('closeLogin');

        showLoginButton.addEventListener('click', () => {
            overlay.style.display = 'flex';
            loginContainer.style.display = 'block';
            loginContainer.shop.display = 'block';
        });

        closeLoginButton.addEventListener('click', () => {
            overlay.style.display = 'none';
            loginContainer.style.display = 'none';
            loginContainer.shop.display = 'block';
        });
