"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Importa o hook useRouter

export default function Error({ error, reset }) {
  const [isRetrying, setIsRetrying] = useState(false);
  const router = useRouter(); // Instância do roteador

  useEffect(() => {
    console.group("Error Log");
    console.error("Error Details:", error);
    console.groupEnd();
  }, [error]);

  const handleReset = async () => {
    setIsRetrying(true);
    try {
      reset(); // Função para tentar novamente
    } catch (err) {
      console.error("Retry failed:", err);
    } finally {
      setIsRetrying(false);
    }
  };

 const goToHome = () => {
    router.push("/"); // Redireciona para a página inicial
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Opa! Algo deu errado!</h2>
      <p style={styles.message}>
        Ocorreu um erro inesperado. Tente novamente ou entre em contato com o suporte se o problema persistir.
      </p>
      <button
        onClick={handleReset}
        style={{ ...styles.button, ...(isRetrying ? styles.buttonDisabled : {}) }}
        disabled={isRetrying}
      >
        {isRetrying ? "Retrying..." : "Tentar novamente"}
      </button>
      <button
          onClick={goToHome}
          style={styles.homeButton}
        >
          Voltar para a página inicial
        </button>
    </div>
  );
}


// Estilos básicos
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f8d7da",
    color: "#721c24",
    border: "1px solid #f5c6cb",
    borderRadius: "5px",
    margin: "20px auto",
    maxWidth: "500px",
  },
  header: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  message: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonDisabled: {
    backgroundColor: "#6c757d",
    cursor: "not-allowed",
  },
  homeButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};