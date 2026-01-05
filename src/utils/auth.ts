const ADMIN_PASSWORD = "Pele2025clinica";

export function loginAdmin(password: string) {
  if (password === ADMIN_PASSWORD) {
    localStorage.setItem("admin-auth", "true");
    return true;
  }
  return false;
}

export function isAdminAuthenticated() {
  return localStorage.getItem("admin-auth") === "true";
}

export function logoutAdmin() {
  localStorage.removeItem("admin-auth");
}
