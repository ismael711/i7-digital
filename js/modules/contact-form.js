/* ===================================
   CONTACT FORM MODULE
   Validação e envio do formulário
   =================================== */

export function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (!form) return;
  
  const submitBtn = form.querySelector('button[type="submit"]');
  const formMessage = document.getElementById('form-message');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!validateForm(data)) {
      showFormMessage('Por favor, preencha todos os campos corretamente.', 'error');
      return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    try {
      // Send form data to backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        showFormMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        form.reset();
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Error:', error);
      showFormMessage('Erro ao enviar mensagem. Por favor, tente novamente.', 'error');
    } finally {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  });
  
  // Real-time validation
  const inputs = form.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
    });
    
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) {
        validateField(input);
      }
    });
  });
  
  // Validate field
  function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Remove previous error
    field.classList.remove('error');
    const errorMsg = field.parentElement.querySelector('.field-error');
    if (errorMsg) errorMsg.remove();
    
    // Required validation
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      showFieldError(field, 'Este campo é obrigatório');
    }
    
    // Email validation
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        showFieldError(field, 'Email inválido');
      }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
      const phoneRegex = /^[\d\s\-\(\)]+$/;
      if (!phoneRegex.test(value) || value.length < 10) {
        isValid = false;
        showFieldError(field, 'Telefone inválido');
      }
    }
    
    return isValid;
  }
  
  // Show field error
  function showFieldError(field, message) {
    field.classList.add('error');
    const errorMsg = document.createElement('span');
    errorMsg.className = 'field-error';
    errorMsg.textContent = message;
    errorMsg.style.cssText = `
      display: block;
      color: var(--color-error);
      font-size: var(--font-size-xs);
      margin-top: var(--spacing-xs);
    `;
    field.parentElement.appendChild(errorMsg);
  }
  
  // Validate form
  function validateForm(data) {
    let isValid = true;
    
    // Validate all fields
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  // Show form message
  function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form__message ${type}`;
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      formMessage.className = 'form__message';
    }, 5000);
  }
}

// Made with Bob
