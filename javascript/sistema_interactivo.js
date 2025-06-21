//Inicializacion del programa
console.log("Welcome to the program");
// bienvenida al programa en la consola


function JS(event) {
// funcion evento encargada de recibir valores ingresados en el formulario del indexedDB.html
   event.preventDefault();
    // event.preventDefault(); es usado para evitar los eventos o acciones que esten enlazadas envio de algun boton o hipervinculo, asi previene que seas enviado a otro lado cancelando la accion del envio/ boton

   let userName = document.getElementById("name").value;
    //    variable recibida del input "name" del html
   if (userName.trim() === "") {
    // condicion que acciona cuando no se es ingresado ningun dato en name
    alert("Error: Enter the required data");
    console.error("Enter the required data");
    return;
   }
   // -----------------------------------------------
   let userAge = document.getElementById("age").value;
    //    variable recibida del input "age" del html
   userAge = parseInt(userAge);
//    esta linea se encarga de convertir el valor recibido del formulario a entero (numero)
   if (isNaN(userAge)) {
    // condicion que acciona cuando no se en ingresado un valor que sea numerico/entero
      alert("Error: Please enter a valid age in numbers.");
      console.error("Please enter a valid age in numbers.");
   } 
   else if (userAge <= 0) {
    // condicion que acciona cuando se ingresa un numero negativo como edad en el formulario
        alert("Error: Please enter a valid age in numbers.");
        console.error("Please enter a valid age in numbers.");
   }
   else if (userAge >= 18) {
    // condicion que acciona cuando se ingresa numeros mayores a 18
      alert(`Hi ${userName}, you're of legal age. Get ready for great opportunities in the world of programming!`);
      console.log(`Hi ${userName}, you're of legal age. Get ready for great opportunities in the world of programming!`);
   } 
    else {
    // esta condicion se acciona cuando la condicion anterior no se cumple, siendo numero menores a 18 los ingresados en el formulario
      alert(`Hi ${userName}, you're a minor. Keep learning and enjoying coding!`);
      console.log(`Hi ${userName}, you're a minor. Keep learning and enjoying coding!`);
   }
   
   console.log(userName);
   console.log(userAge);
//    con estos seran enviados los datos ingresados a la consola
}
