document.getElementById('pickupButton').addEventListener('click', function() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
});

document.getElementById('back').addEventListener('click', function() {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page1').classList.remove('hidden');
});

document.getElementById('backspace').addEventListener('click', function() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
});

document.getElementById('enter').addEventListener('click', function() {
    const displayValue = document.getElementById('display').value;
    if (displayValue === '6789') {
        showToast('Tu pedido está en el casillero 4, por favor recoge tu pedido', 'success');
    } else {
        showToast('El código es incorrecto, por favor inténtalo nuevamente.', 'error');
    }
    document.getElementById('display').value = ''; // Limpiar el input después de mostrar el toast
});

document.querySelectorAll('.key').forEach(function(key) {
    key.addEventListener('click', function() {
        const display = document.getElementById('display');
        if (this.id !== 'back' && this.id !== 'backspace' && this.id !== 'enter') {
            display.value += this.textContent;
        }
    });
});

function showToast(message, type) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.remove('success', 'error');
    toast.classList.add(type);

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

function togglePassword() {
    const display = document.getElementById('display');
    const toggle = document.getElementById('toggle-password');
    if (display.type === 'password') {
        display.type = 'text';
        toggle.textContent = '🙈';
    } else {
        display.type = 'password';
        toggle.textContent = '👁️';
    }
}
