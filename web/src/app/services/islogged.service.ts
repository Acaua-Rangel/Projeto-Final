export default function isLogged(): boolean {
  const isLoggedSession = verifyStorage(sessionStorage);

  if (!isLoggedSession) {
    const id = localStorage.getItem("id");
    const nome = localStorage.getItem("nome");
    const email = localStorage.getItem("email");

    if (id!=null && nome!=null && email!=null) {
      sessionStorage.setItem("id", id);
      sessionStorage.setItem("nome", nome);
      sessionStorage.setItem("email", email);

      return true;
    }
  }

  return isLoggedSession
}

function verifyStorage(storage: Storage): boolean {
  const id = storage.getItem("id");
  const nome = storage.getItem("nome");
  const email = storage.getItem("email");

  if (id!=null && nome!=null && email!=null) {
    return true;
  }
  
  return false;
}