// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//addFood(steak[i], '#steak');
// console.log(mashPotatoes[i]);
// }

const imagesPlaceholder = document.getElementById("table");

// Iteration 1 using callbacks
addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {
                imagesPlaceholder.innerHTML +=
                  "<img src = './public/images/steak.jpg' />";
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
          imagesPlaceholder.innerHTML +=
            "<img src = './public/images/mashPotatoes.jpg' />";
        });
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(step) {
  try {
    if (step < brusselSprouts.length) {
      await addFood(brusselSprouts[step], "#brusselSprouts"); // Coloco o passo atual na fila
      makeFood(step + 1); // Dou o próximo passo na receita
    } else {
      imagesPlaceholder.innerHTML +=
        "<img src = './public/images/brusselSprouts.jpg' />";
      throw "End of recipe.";
    }
  } catch (err) {
    console.log(err);
  }
}

const eachStep = 0;
makeFood(eachStep);
