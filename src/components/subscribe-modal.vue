<template>
    <div v-if="isOpen" class="modal-overlay">
      <div class="modal-container">
        <button @click="closeModal" class="close-btn">×</button>
        <h2 class="modal-title">{{ isSuccess ? 'Thank You!' : 'Stay Updated!' }}</h2>
        <p class="modal-description">
          {{ isSuccess ? 'You\'re request to be added to the newsletter has been sent!' : 'Subscribe to get the latest updates' }}
        </p>
  
        <!-- Conditional content based on success or failure -->
        <div v-if="!isSuccess">
          <form @submit.prevent="handleSubmit" class="subscribe-form">
            <input
              type="email"
              v-model="email"
              placeholder="Your email"
              class="email-input"
              required
            />
            <p v-if="invalidEmail" class="error-message">Please enter a valid email address.</p>
            <button type="submit" class="subscribe-btn">
              Subscribe Now
            </button>
          </form>
        </div>
        <div v-else>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        email: '',
        invalidEmail: false,
        isSuccess: false, // Track success state
      };
    },
    methods: {
      openModal() {
        this.isOpen = true;
        this.isSuccess = false; // Reset success state when reopening the modal
      },
      closeModal() {
        this.isOpen = false;
      },
      handleSubmit() {
        // Simple email validation using regex
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,}$/;
        if (!emailRegex.test(this.email)) {
          this.invalidEmail = true;  // Set error state if invalid email
        } else {
          this.invalidEmail = false;  // Clear error state if valid email
          this.isSuccess = true;  // Set success state to true
          // Simulate successful submission (in reality, you'd call an API here)
          setTimeout(() => {
            this.email = ''; // Clear email input after success
          }, 1500);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-container {
    background-color: white;
    border-radius: 8px;
    padding: 24px;
    width: 400px;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    min-height: 300px; /* Ensure there is enough space for the content */
  }
  
  .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
  }
  
  .close-btn:hover {
    color: #000;
    cursor: crosshair;
  }
  
  .modal-title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
    font-weight: 400;
  }
  
  .modal-description {
    text-align: center;
    color: #555;
  }
  
  .subscribe-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .email-input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
    background-color: #3333;
    color: black;
  }
  
  .email-input:focus {
    outline: none;
  }
  
  .subscribe-btn {
    padding: 12px;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    background-color: black;
  }
  
  .subscribe-btn:hover {
    opacity: .8;
    cursor : crosshair;
  }
  
  .error-message {
    color: #e74c3c;
    font-size: 14px;
    text-align: center;
  }
  
  /* .close-btn-bottom {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
  } */
  
  /* .close-btn-bottom:hover {
    background-color: #0056b3;
  } */
  </style>
  