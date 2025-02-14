// drag and drop COde start

document.addEventListener('DOMContentLoaded', function () {
  const dropArea = document.getElementById('drop-area');
  const thumbnailContainer = document.getElementById('thumbnail-container');
  const fileInput = document.getElementById('fileInput');

  // Prevent default drag behaviors
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
  });

  // Highlight drop area when item is dragged over it
  ['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
  });

  // Remove highlight when item is dragged out of drop area
  ['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
  });

  // Handle dropped files
  dropArea.addEventListener('drop', handleDrop, false);
  fileInput.addEventListener('change', handleDrop, false);

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight() {
    dropArea.classList.add('highlight');
  }

  function unhighlight() {
    dropArea.classList.remove('highlight');
  }

  function handleDrop(e) {
    const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;

    for (const file of files) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function (event) {
          const thumbnail = document.createElement('img');
          thumbnail.src = event.target.result;
          thumbnail.classList.add('thumbnail');
          thumbnailContainer.appendChild(thumbnail);
        };

        reader.readAsDataURL(file);
      }
    }

    unhighlight();
  }
});




// ==================== IMAGE UPLOAD START ====================

function handleImageUpload(index) {
  const input = document.getElementById(`imageInput${index}`);
  const container = document.getElementById(`imageContainer${index}`);
  const image = document.getElementById(`uploadedImage${index}`);
  const uploadArrow = document.getElementById(`upload-arrow${index}`);
  const file = input.files[0];

  if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
          image.src = e.target.result;
          container.style.display = 'block';
          input.style.display = 'none';
          uploadArrow.style.display = 'none';
      };

      reader.readAsDataURL(file);
  }
}



// PASSWORD SHOW AND HIDE


function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var icon = document.querySelector(".toggle-password i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}





// ====================== DROPDOWN TICK =======================

function UserSortBy(sort) {
  
  if (sort.name == retrieveOption()) return;
  
  document.getElementById("sort-selected").innerText = sort.innerText;

  var children = document.getElementById("sort-content").children;
  
  for (var i of children) {
     var newText = i.innerText.replace(" ✓", "");
     i.innerText = newText;
     i.setAttribute("isSelected", "false"); 
  }

  sort.innerText += " ✓";
  sort.setAttribute("isSelected", "true"); 

  newSort = retrieveOption();
  document.getElementById("sort").innerText = newSort;
}


function retrieveOption() {
  var children = document.getElementById("sort-content").children;
  for (var i of children) {
      if (i.getAttribute("isSelected") == "true") {
          return i.name;
      }
  }
}

// ====================== USER MANAGEMENT DROPDOWN CITY TICK  =======================

function selectCity(sort) {
  
  if (sort.name == UserCityRetrieveOption()) return;
  
  document.getElementById("city-selected").innerText = sort.innerText;

  var children = document.getElementById("city-content").children;
  
  for (var i of children) {
     var newText = i.innerText.replace(" ✓", "");
     i.innerText = newText;
     i.setAttribute("isSelected", "false"); 
  }

  sort.innerText += " ✓";
  sort.setAttribute("isSelected", "true"); 

  newSort = UserCityRetrieveOption();
  document.getElementById("city").innerText = newSort;
}


function UserCityRetrieveOption() {
  var children = document.getElementById("sort-content").children;
  for (var i of children) {
      if (i.getAttribute("isSelected") == "true") {
          return i.name;
      }
  }
}


// ====================== USER MANAGEMENT DROPDOWN FILTER TICK  =======================

function selectMeFilter(sort) {
  
  if (sort.name == UserFilterRetrieveOption()) return;
  
  document.getElementById("filter-selected").innerText = sort.innerText;

  var children = document.getElementById("filter-content").children;
  
  for (var i of children) {
     var newText = i.innerText.replace(" ✓", "");
     i.innerText = newText;
     i.setAttribute("isSelected", "false"); 
  }

  sort.innerText += " ✓";
  sort.setAttribute("isSelected", "true"); 

  newSort = UserFilterRetrieveOption();
  document.getElementById("user-filter").innerText = newSort;
}


function UserFilterRetrieveOption() {
  var children = document.getElementById("filter-content").children;
  for (var i of children) {
      if (i.getAttribute("isSelected") == "true") {
          return i.name;
      }
  }
}


// ====================== PAYMENT DROPDOWN TICK  =======================

function Paymentselect(sort) {
  
  if (sort.name == PaymentRetrieveOption()) return;
  
  document.getElementById("payment-selected").innerText = sort.innerText;

  var children = document.getElementById("payment-content").children;
  
  for (var i of children) {
     var newText = i.innerText.replace(" ✓", "");
     i.innerText = newText;
     i.setAttribute("isSelected", "false"); 
  }

  sort.innerText += " ✓";
  sort.setAttribute("isSelected", "true"); 

  newSort = PaymentRetrieveOption();
  document.getElementById("pay").innerText = newSort;
}


function PaymentRetrieveOption() {
  var children = document.getElementById("payment-content").children;
  for (var i of children) {
      if (i.getAttribute("isSelected") == "true") {
          return i.name;
      }
  }
}

// ====================== DOCUMENT PURCHASE CONSULT DETAILS DROPDOWN TICK  =======================

function DocumentPurchase(sort) {
  
  if (sort.name == DocumentPurchaseRetrieveOption()) return;
  
  document.getElementById("DPurchaseselected").innerText = sort.innerText;

  var children = document.getElementById("DPurchasecontent").children;
  
  for (var i of children) {
     var newText = i.innerText.replace(" ✓", "");
     i.innerText = newText;
     i.setAttribute("isSelected", "false"); 
  }

  sort.innerText += " ✓";
  sort.setAttribute("isSelected", "true"); 

  newSort = DocumentPurchaseRetrieveOption();
  document.getElementById("dpur").innerText = newSort;
}


function DocumentPurchaseRetrieveOption() {
  var children = document.getElementById("DPurchasecontent").children;
  for (var i of children) {
      if (i.getAttribute("isSelected") == "true") {
          return i.name;
      }
  }
}

// DRAG AND DROP IMAGE

"use strict";
function dragNdrop(event) {
    var fileName = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("preview");
    var previewImg = document.createElement("img");
    previewImg.setAttribute("src", fileName);
    preview.innerHTML = "";
    preview.appendChild(previewImg);
}
function drag() {
    document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
    document.getElementById('uploadFile').parentNode.className = 'dragBox';
}


"use strict";
function privacydragNdrop(event) {
    var privacyfileName = URL.createObjectURL(event.target.files[0]);
    var privacypreview = document.getElementById("privacypreview");
    var privacypreviewImg = document.createElement("img");
    privacypreviewImg.setAttribute("src", privacyfileName);
    privacypreview.innerHTML = "";
    privacypreview.appendChild(privacypreviewImg);
}
function privacydrag() {
    document.getElementById('privacyuploadFile').parentNode.className = 'draging dragBox';
}
function privacydrop() {
    document.getElementById('privacyuploadFile').parentNode.className = 'dragBox';
}

"use strict";
function termsdragNdrop(event) {
    var termsfileName = URL.createObjectURL(event.target.files[0]);
    var termspreview = document.getElementById("termspreview");
    var termspreviewImg = document.createElement("img");
    termspreviewImg.setAttribute("src", termsfileName);
    termspreview.innerHTML = "";
    termspreview.appendChild(termspreviewImg);
}
function termsdrag() {
    document.getElementById('termsuploadFile').parentNode.className = 'draging dragBox';
}
function termsdrop() {
    document.getElementById('termsuploadFile').parentNode.className = 'dragBox';
}