const $ = (sel) => document.querySelector(sel);

function toggleMenu(){
  const menu = $("#mobileMenu");
  if(!menu) return;
  const open = menu.getAttribute("data-open") === "true";
  menu.style.display = open ? "none" : "block";
  menu.setAttribute("data-open", open ? "false" : "true");
}

function showToast(title, msg){
  const t = $("#toast");
  if(!t) return;
  t.querySelector("strong").textContent = title;
  t.querySelector("span").textContent = msg;
  t.style.display = "block";
  setTimeout(()=>{ t.style.display="none"; }, 4500);
}

window.toggleMenu = toggleMenu;

function onContactSubmit(e){
  e.preventDefault();

  const name = $("#name").value.trim();
  const emailField = $("#email").value.trim();
  const message = $("#message").value.trim();
  const interest = $("#interest").value;

  if(!name || !emailField || !message){
    showToast("Missing info", "Please fill in your name, email, and message.");
    return;
  }

  const subject = encodeURIComponent(`Inquiry (${interest}) — Solsbery Ventures`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${emailField}\nPhone (optional): ${$("#phone").value.trim()}\nInterest: ${interest}\n\nMessage:\n${message}\n`
  );

  const mailto = `mailto:Solsberyventuresllc@gmail.com?subject=${subject}&body=${body}`;

  showToast("Opening email draft", "If it doesn’t open, copy your message and send it to Solsberyventuresllc@gmail.com.");
  window.location.href = mailto;
}

window.onContactSubmit = onContactSubmit;
