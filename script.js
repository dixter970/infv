
        function validateForm() {
            var nameInput = document.getElementById('name').value;
            var errorMessage = document.getElementById('error-message');

            if (nameInput.length < 3 || nameInput.length > 20) {
                errorMessage.textContent = "Jméno musí obsahovat od 3 do 20 znaků.";
                return false;
            } else {
                errorMessage.textContent = "";
               
                return true;
            }
        }

    function validateForm() {
        var passwordInput = document.getElementById('password').value;
        var confirmPasswordInput = document.getElementById('confirmPassword').value;
        var errorMessage = document.getElementById('error-message');

        
        if (passwordInput.length < 8) {
            errorMessage.textContent = "Heslo musí obsahovat alespoň 8 znaků.";
            return false;
        }

      
        if (!/[A-Z]/.test(passwordInput)) {
            errorMessage.textContent = "Heslo musí obsahovat alespoň jedno velké písmeno.";
            return false;
        }

    
        if (!/[a-z]/.test(passwordInput)) {
            errorMessage.textContent = "Heslo musí obsahovat alespoň jedno malé písmeno.";
            return false;
        }

      
        if (!/\d/.test(passwordInput)) {
            errorMessage.textContent = "Heslo musí obsahovat alespoň jedno číslo.";
            return false;
        }
        if (passwordInput !== confirmPasswordInput) {
            errorMessage.textContent = "Potvrzení hesla se neshoduje s heslem.";
            return false;
        }

       
        errorMessage.textContent = "";
       
        return true;
    }

    
    function validateForm() {
        var ageInput = document.getElementById('age').value;
        var errorMessage = document.getElementById('error-message');

        
        if (ageInput < 18 || ageInput > 100) {
            errorMessage.textContent = "Věk musí být mezi 18 a 100 lety.";
            return false;
        }

      
        errorMessage.textContent = "";
               return true;
    }