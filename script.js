const submitBtn = document.querySelector(".submit-btn");
const allTextInpunts = document.querySelectorAll(".warning-style");
const warningText = document.querySelectorAll(".warning-text");
const queryType = document.querySelectorAll("#query");
const email = document.querySelector("#email");
const radioIconGeneral = document.querySelector(".radio-icon-general");
const radioIconSupport = document.querySelector(".radio-icon-support");
const generalQuery = document.querySelector(".general");
const supportQuery = document.querySelector(".support");
const emailWarningText = document.querySelector(".warning-text-email");
const queryWarningText = document.querySelector(".warning-text-query");
const consentWarningText = document.querySelector(".warning-text-consent");
const consent = document.querySelector("#consent");
const checkboxIcon = document.querySelector(".checkbox-icon");
const succesState = document.querySelector(".success-state");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   allTextInpunts.forEach((inp) => {
//     const matchedData = document.querySelector(
//       `.warning-text[data-for='${inp.id}']`
//     );

//     if (inp.value === "") {
//       inp.style.border = "1px solid var(--Red)";
//       matchedData.style.display = "block";
//     }
//   });

//   const validateEmail = emailRegex.test(email.value);
//   if (!validateEmail) {
//     emailWarningText.style.display = "block";
//   }

//   const selectedQuery = Array.from(queryType).filter(
//     (selected) => selected.checked
//   ).length;

//   if (selectedQuery === 0) {
//     queryWarningText.style.display = "block";
//   }

//   if (!consent.checked) {
//     consentWarningText.style.display = " block";
//   }

//   return

//   succesState.style.display = "flex";
// });

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let hasErrors = false; // Flag para rastrear errores de validación

  allTextInpunts.forEach((inp) => {
    const matchedData = document.querySelector(
      `.warning-text[data-for='${inp.id}']`
    );

    if (inp.value === "") {
      inp.style.border = "1px solid var(--Red)";
      matchedData.style.display = "block";
      hasErrors = true; // Se marca un error si el campo está vacío
    }
  });

  const validateEmail = emailRegex.test(email.value);
  if (!validateEmail) {
    emailWarningText.style.display = "block";
    hasErrors = true;
  }

  const selectedQuery = Array.from(queryType).filter(
    (selected) => selected.checked
  ).length;

  if (selectedQuery === 0) {
    queryWarningText.style.display = "block";
    hasErrors = true;
  }

  if (!consent.checked) {
    consentWarningText.style.display = " block";
    hasErrors = true;
  }

  if (!hasErrors) {
    succesState.style.display = "flex";
    allTextInpunts.forEach((inp) => {
      inp.value = "";
    });

    queryType.forEach((item) => {
      item.checked = false;
      item.style.display = "block";
      radioIconGeneral.style.display = "none";
      radioIconSupport.style.display = "none";
      generalQuery.classList.remove("query-style");
      supportQuery.classList.remove("query-style");
    });
    consent.checked = false
    consent.style.display = "block";
    checkboxIcon.style.display = "none";

  }
});

queryType.forEach((query) => {
  query.addEventListener("click", (e) => {
    queryType.forEach((item) => {
      item.checked = false;
      item.style.display = "block";
      radioIconGeneral.style.display = "none";
      radioIconSupport.style.display = "none";
      generalQuery.classList.remove("query-style");
      supportQuery.classList.remove("query-style");
      queryWarningText.style.display = "none";
    });

    if (query.classList.contains("query-general")) {
      query.style.display = "none";
      radioIconGeneral.style.display = "block";
      generalQuery.classList.add("query-style");
      query.checked = true;
    }

    if (query.classList.contains("query-support")) {
      query.style.display = "none";
      radioIconSupport.style.display = "block";
      supportQuery.classList.add("query-style");
      query.checked = true;
    }
  });
});

consent.addEventListener("click", () => {
  consent.style.display = "none";
  checkboxIcon.style.display = "block";
});

/*
reset inputs
*/

allTextInpunts.forEach((inp) => {
  const matchedData = document.querySelector(
    `.warning-text[data-for='${inp.id}']`
  );

  inp.addEventListener("focus", (e) => {
    inp.value = "";
    inp.style.border = "";
    matchedData.style.display = "none";
    succesState.style.display = "none";

  });

});
