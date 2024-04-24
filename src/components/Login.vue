<template>
  <section>
    <div class="container">
      <h1>Autenticazione</h1>
      <form>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Accedi</button>
      </form>
    </div> 
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 500px;
  justify-content: center; /* Centra orizzontalmente */
  align-items: center; /* Centra verticalmente */
  height: 100vh; /* Altezza del contenitore uguale all'altezza della finestra del browser */
  margin-left: auto;
  margin-right: auto;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 5px;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #45a049;
}


@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

.bg-btn {
  background-color: #3C9521;
}

.container {
  font-family: 'Work Sans', sans-serif;
}
</style>
    

    
